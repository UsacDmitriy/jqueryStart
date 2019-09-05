class Elem{

  constructor(matrix, cords){
    this.matrix = matrix;
    this.cords = cords;
    this.value = '';
  }

  show(){
    for (const cord of this.cords) {
      this.matrix.setCell(cord[0], cord[1], this.value);
    }
  }
}