let grid;
let c=10;
let r=20;

function make2Darray(){
  let arr = new Array(r);
  for(let i = 0; i<arr.length; i++){
    arr[i]=new Array(r);
  }
  for(let i = 0; i< r; i++){
    for(let j = 0; j< c; j++){
      arr[i][j] = floor(random(2));
    }
  }
  return arr;
}

function setup() {
  grid = make2Darray();

}

function draw() {
}
