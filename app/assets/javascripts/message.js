$(function() {
  function buildHTML(message){
    var image = "";
    if (message.image.url) {
      image = `<img src = "message.image.url">`;
    }
    var html = `<div class = "message" data-message-id = "${message.id}">
                  <div class = "upper-message" >
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
      var html = buildHTML(data);
      $('.chat.messages').append(html);
      $('.form__message').val('');
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })

  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var id = $('.message').last().data('message-id')
      $.ajax({
        url: location.href,
        data: {id: id},
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML = '';
        data.forEach(function(message) {
          if (message.id > id ) {
            insertHTML += buildHTML(message);
          }
        });
        $('.messages').append(insertHTML);
      })
      .fail(function(data) {
        alert('自動更新に失敗しました');
      });
    }
    else {
      clearInterval(interval);
    }
  } , 1000 );
});
