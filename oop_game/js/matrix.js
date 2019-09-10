class Matrix{

  constructor(elem, rows, cols){
    this.elem = elem;
    this.cells = [];
    this.rows = rows;
    this.cols = cols;
  }

  create(){
    console.log((this.m)*(this.n));
    for(let i =0; i < this.rows * this.cols; i++){
      let div = document.createElement('div');

      if (i % this.cols === 0) {
        div.classList.add('row-start');
      }

      this.elem.appendChild(div);
      this.cells[i] = '';
    }

    this.elem.style.width = (this.cols*20)+'px';
  }

  getCell(x, y){
    let num = this._calcNum(x, y);
    return this.cells[num];
  }

  setCell(x, y, val){
    let num = this._calcNum(x, y);
    this.cells[num] = val;
    this.elem.children[num].setAttribute('data-game', val);
  }

  setRandomCell(val){
    let randomRow = Math.floor(Math.random() * this.rows + 1);
    let randomCol = Math.floor(Math.random() * this.cols + 1);

    while (this.getCell(randomRow, randomCol !== '')) {
      randomRow = Math.floor(Math.random() * this.rows + 1);
      randomCol = Math.floor(Math.random() * this.cols + 1);
    }

    this.setCell(randomRow, randomCol, val)
  }

  _calcNum(x, y){
    
    return ((y-1)*this.cols + (x - 1));
  }
}