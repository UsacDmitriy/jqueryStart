class Snake extends Elem{

  constructor(matrix, cords, course){
    super(matrix, cords)
    this.value ='snake'
    this.course = course;
    this.alive = true;
    this.hungry = true;
  }

  move(){
    if (!this.alive){
      return;
    }
    this.hungry = true;
    let head = this.cords[0].slice();
    console.log(head);

    
    switch(this.course){
      case 'right':
        head[0]++;
        break;
      case 'left':
        head[0]--;
        break;
      case 'up':
        head[1]--;
        break;
      case 'down':
        head[1]++;
        break;
    }
    //this._checkAlive();
    if (!this._checkAlive(head)){
      this.alive = false;
      return false;
    }
    
    /* 1) getCell 
      фрукт - поели
      стена - игра закончена
      змея - конец игры

    */
    if (this.matrix.getCell(head[0],head[1]) === 'wall'){
      this.alive = false;
      return;
    }

    if (this.matrix.getCell(head[0],head[1]) === 'snake'){
      this.alive = false;
      return;
    }

    if (this.matrix.getCell(head[0],head[1]) === 'fruit'){
      this.cords.unshift(head);
      this.matrix.setCell(head[0], head[1], 'snake');
      this.hungry = false;
    } else {
      let tail = this.cords.pop();
      this.matrix.setCell(tail[0], tail[1], '');
  
      this.cords.unshift(head);
      this.matrix.setCell(head[0], head[1], 'snake');

    }
  }

  _checkAlive(head){
    return head[0] >= 1 && head[0] <= this.matrix.cols &&
        head[1] >= 1 && head[1] <= this.matrix.rows
  }
}