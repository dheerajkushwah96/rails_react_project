class UserSerializer < ApplicationSerializer
  include SerializerHelpers
  attributes :id, :name, :email, :created_at, :updated_at
end
