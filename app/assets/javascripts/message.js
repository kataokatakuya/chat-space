$(function() {
  function buildHTML(message){
    var image = "";
    if (message.image) {
      image = `<img src = "message.image.url">`;
    }
    var html = `<div class = "message">
                  <div class = "upper-message">
                    <div class = "upper-message__user-name">
                    ${message.name}
                    </div>
                    <div class = "upper-message__date">
                      ${message.date_time}
                    </div>
                  </div>
                  <div class = "lower-message">
                    <p class = "lower-message__content">
                      ${message.content}
                    </p>
                    <p>
                      ${image}
                    </p>
                  </div>
                </div>`
    return html;
}
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log("done")
      var html = buildHTML(data);
      $('.chat .messages').append(html);
      $('.chat .messages').animate({scrollTop: $('.chat .messages')[0].scrollHeight}, "fast");
      $('.form__message').val('');
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })
});
