let grid;
let c;
let r;
let res = 10
function make2Darray(r,c){
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
  createCanvas(800,600);
  c = width/res;
  r = height/res;
  grid = make2Darray(r,c);

}

function draw() {
  background(255);
  let nextGen = make2Darray(r,c);
  aliveCell(grid,nextGen,r,c);
  grid=nextGen;
  for(let i = 0; i< r; i++){
    for(let j = 0; j< c; j++){
      let x = j * res;
      let y = i * res;
      if(grid[i][j]===1){
        fill(0);
        stroke(255);
        rect(x,y,res,res);
      }
    }
  }
}

function aliveCell(g,n,r,c){
  for(let i = 0; i < r; i++){
    for(let j = 0; j < c; j++){
      n[i][j]=count(g,i,j);
    }
  }
}

function count(g,i,j){
  let s = 0;
  for(let x = -1; x < 2; x++){
    for(let y = -1; y < 2; y++){
      if(validCell(i,j,x,y,r,c)){
        s += g[i+x][j+y];
      }
    }
  }
  s-=g[i][j];
  if(g[i][j]===1){
    if(s>3){
      return 0;
    }
    if(s>=2){
      return 1;
    }
  }
  else{
    if(s===3){
      return 1;
    }
  }
  return 0;
}

function validCell(i,j,x,y,r,c){
  if(i+x<0 || j+y<0){
    return false;
  }
  else{
    if(i+x>=r || j+y>=c){
      return false;
    }
  }
  return true;
}
