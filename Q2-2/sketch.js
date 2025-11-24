// チェッカー
function setup() {
  createCanvas(200, 200);
  noStroke();
  background(145,145,145);
  const size = width / 8; // マスの一辺の長さ
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0 ){
        fill(255);
        rect(size * i, size * j, 25, 25); 
      }
    }
    for(let i = 0; i < 8; i++){
      for(let j = 0; j < 3; j++){
        if((i + j) % 2 == 1){
          fill(255,0,0);
          ellipse(i * size + 12, j  * size + 12, 20, 20);
      }
    }
  }
    for(let i = 0; i < 8; i++){
      for(let j = 5; j < 8; j++){
        if((i + j) % 2 == 1){
          fill(0);
          ellipse(i * size + 12, j  * size + 12, 20, 20);
        }
      }
    }
  }
}
    
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
  