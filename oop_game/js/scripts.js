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
  
    switch(key){
      case 37:
        if (snake.course !== 'right'){
           snake.newCourse = 'left';
      }
        break;
      case 38:
        if (snake.course !== 'down'){
        snake.newCourse = 'up';
      }
        break;
      case 39:
        if  (snake.course !== 'left'){
        snake.newCourse = 'right';
      }
        break;
      case 40:
        if  (snake.course !== 'up'){
        snake.newCourse = 'down';
      }
        break;
      case 96:
        clearInterval(Timer);
        break;  
    }
  });
  
  let Timer = setInterval(() => {
    snake.move();
    if (!snake.hungry){
      matrix.setRandomCell('fruit');
      this.document.querySelector('#score').value = snake.count;
    }
    if (!snake.alive){
      clearInterval(Timer);
      alert("Game over");
    }
  }, 300);
}
