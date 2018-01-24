json.array! @new_messages do |message|
  json.id             message.id
  json.name           message.user.name
  json.content        message.content
  json.image          message.image
  json.date_time      message.date_time
end
