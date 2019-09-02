class Snake{

  constructor(matrix, x, y, course){
    this.matrix = matrix;
    this.x = x;
    this.y = y;
    this.course = course;
  }

  show(){
    this.matrix.setCell(this.x, this.y, 'snake');
  }
// поставить кейсы и проверить нажатие на клавиши
  move(){

    this.matrix.setCell(this.x, this.y, '');
    switch(this.course){
      case 'right':
        this.x++;
        break;
      case 'left':
        this.x--;
        break;
      case 'up':
        this.y--;
        break;
      case 'down':
        this.y++;
        break;
    }
    
    this.matrix.setCell(this.x, this.y, 'snake');
  }
}