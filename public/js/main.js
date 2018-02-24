$(document).ready(function () {
  
       
        $.ajax({
            type: 'GET',
            url: 'https://api.mercadolibre.com/users/304041256?access_token=APP_USR-112193281612155-022402-af9284557cb8b07f15d8acd0b24a77e6__L_H__-304041256',
            success: function(response) {
                console.log(response)
                console.log(response.id)
                var selector = $('.container');
                /*traer data de api*/
               /*  $.each(response, function (i, obj) { */
                $(document).ready(function () {
                    var id = response.id;
                    console.log(id)
                    var user =response.nickname;
                    var firstName = response.first_name;
                    var lastName = response.last_name;
    
                    mercadolibre(selector, token = 0, id, user, firstName, lastName)
                });
                
             function mercadolibre(selector, token = 0, id = 0, user, firstName, lastName) {
                    selector.append(`
                      <div class="comment" data-response="${id}" data-topic="${token}">
                        <div class="content">
                        <a class="author">${id}</a>
                          <a class="author">${user}</a>
                          <a class="author">${firstName}</a>
                          <a class="author">${lastName}</a>
                          <div class="text">
    
                          </div>
                        </div>
                      </div>`
                    );
                }
            }
        });
    





});

