window.onload = function(){
  let elem = document.querySelector('.fields');
  
  let matrix = new Matrix(elem, 20, 20);
  matrix.create();

  (new Fruit(matrix, [[2, 2]])).show();
  (new Wall(matrix, [[8, 2],[8, 3], [8, 4]])).show();

  let snake = new Snake(matrix, [[5,5], [4, 5], [3, 5]], 'right');

  snake.show();

  document.addEventListener('keydown', (e) => {
    let key = e.keyCode;
    /* 3) добавить защиту от смены курса */
    switch(key){
      case 37:
        snake.course = 'left';
        break;
      case 38:
        snake.course = 'up';
        break;
      case 39:
        snake.course = 'right';
        break;
      case 40:
        snake.course = 'down';
        break;
      case 96:
        clearInterval(Timer);
        break;  
    }
  });
/* 2)
если покушала новый фрукт на рандомном поле + очки
*/  


  let Timer = setInterval(() => {
    snake.move();
    if (!snake.alive){
      clearInterval(Timer);
      alert("Game over");
    }
  }, 500);
}