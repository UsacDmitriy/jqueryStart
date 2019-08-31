document.addEventListener('DOMContentLoaded', function () {  
  let elem = document.querySelector('.fields');
  
  let matrix = new Matrix(elem);
  matrix.create();

  matrix.setCell(15, 20, 'fruit');

  let snake = new Snake(matrix, [])

});