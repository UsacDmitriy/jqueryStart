class Snake{

  constructor(matrix, x, y, course){
    this.matrix = matrix;
    this.x = x;
    this.y = y;
    this.course = course;
    this.alive = true;
  }

  show(){
    this.matrix.setCell(this.x, this.y, 'snake');
  }
// поставить кейсы и проверить нажатие на клавиши
  move(){
    if (!this.alive){
      return;
    }

    let lastX = this.x;
    let lastY = this.y;

    
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
    //this._checkAlive();
    if (!this._checkAlive()){
      this.alive = false;
      return false;
    }
    
    this.matrix.setCell(lastX, lastY, '');
    this.matrix.setCell(this.x, this.y, 'snake');
  }

  _checkAlive(){
    return this.x >= 1 && this.x <= this.matrix.cols &&
          this.y >= 1 && this.y <= this.matrix.rows
  }
}