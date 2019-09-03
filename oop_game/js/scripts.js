window.onload = function(){
  let elem = document.querySelector('.fields');
  
  let matrix = new Matrix(elem, 20, 20);
  matrix.create();

  matrix.setCell(3, 3, 'fruit');

  let snake = new Snake(matrix, 5, 5, 'up');

  snake.show();

  document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    let key = e.keyCode;
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
  
  let Timer = setInterval(() => {
    snake.move();
    if (!snake.alive){
      clearInterval(Timer);
      alert("Game over");
    }
  }, 500);
}