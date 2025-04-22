json.extract! post, :id, :title, :body
json.created_at post.created_at.strftime('%d %b, %y at %I:%M %p')
json.url post_url(post, format: :json)
