$(function(){

    let $form = $('.app');
    let $result = $('.result');
    let errors = $('.error');
    let loading = $('.loading')
/* ДЗ 
1) Предотвратить нажатие кнопок
2) Добавить крутящийся флажок
3) Добавить сообщения в соотвествующие спаны
 */


    $('.send').on('click', function(){
        $result.empty();
        loading.fadeIn(100);

        $('.send').attr('disabled', true);
        $.post('app.php', $form.serialize(), function(data){        
            
            if (data.res) {
                $result.html('Request send');
                $form.slideUp(300);
            } else {
                errors.empty();

                for (const i in data.errors ) {
                    let target = $('[name=' + i +']');

                    if (target.length > 0){
                        $('[name=' + i +']').next().html(data.errors[i]);
                    }        
                }
            }

            setTimeout(function(){
                $('.send').attr('disabled', false);
            }, 1000)
        }, 'json')
        .fail(function () {
            $result.html('Loading Error')
          })
        .always(function () {
            loading.fadeOut(100);
          });

    }, )
});