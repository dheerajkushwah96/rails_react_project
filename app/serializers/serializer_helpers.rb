# frozen_string_literal: true

# SerializerHelpers can help prevent unintentional n+1 queries.
#
# Its eager_loading enforcement runs only in the test environment.
#
# Usage: Include it in a serializer, and invoke the serializer with `call`.
module SerializerHelpers
  def self.included(base)
    base.send(:private_class_method, :new)
    base.extend(ClassMethods)
  end

  module ClassMethods
    def call(obj, opts = { check_query: true, root: false })
      serializer = new(obj, { root: opts[:root] == true })
      serializer.check_query if opts[:check_query]

      serializer
    end
  end

  def check_query
    return unless Rails.env.test?
    return unless self.class.const_defined?(:REQUIRED_ASSOCIATIONS)
    return if self.class::REQUIRED_ASSOCIATIONS.blank?

    self.class::REQUIRED_ASSOCIATIONS.each { |ra| check(object, ra) }
  end

  private

  # check recurses through REQUIRED_ASSOCIATIONS and checks that each is loaded.
  #
  # Given the following requirements for an object:
  #     REQUIRED_ASSOCIATIONS = [
  #       { creatives: [:artist, :external_service_ids] },
  #       :label,
  #       :upcs
  #     ].freeze
  #
  # It checks that the root object has creatives, label and upcs loaded,
  # and that each creative has artist and external_service_ids loaded.
  def check(parent, requirement)
    case requirement
    # e.g. { creatives: [:artist, :external_service_ids] }
    when Hash
      requirement.each_pair do |attr, association|
        values = Array.wrap(parent.send(attr))
        values.each { |v| check(v, association) }
      end
    # e.g. [:artist, :external_service_ids]
    when Array
      requirement.each { |association| check(parent, association) }
    # e.g. :artist
    else
      association = parent.association(requirement)
      return if association&.loaded?

      raise StandardError.new("Must eager_load: #{requirement}")
    end
  end
end
