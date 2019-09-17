$(function(){

    let $form = $('.app');
    let $result = $('.result');
/* ДЗ 
1) Предотвратить нажатие кнопок
2) Добавить крутящийся флажок
3) Добавить сообщения в соотвествующие спаны
 */


    $('.send').on('click', function(){

        $.post('app.php', $form.serialize(), function(data){
            
            if (data.res) {
                console.log('2');
                $result.html('Request send');
                $form.slideUp(300);
            } else {
                $result.html(data.errors.toString());
                console.log(data);
            }
        }, 'json')    
    }, )
});