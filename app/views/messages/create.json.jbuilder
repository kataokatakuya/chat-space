json.name  @message.user.name
json.date_time  @message.created_at.in_time_zone('Tokyo').strftime('%Y/%m/%d %H:%M:%S')
json.content  @message.content
json.image  @message.image
