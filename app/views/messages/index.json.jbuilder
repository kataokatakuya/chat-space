json.array! @new_messages do |message|
  json.name           message.user.name
  json.date_time      message.date_time
  json.content        message.content
  json.image          message.image
  json.id             message.id
end
