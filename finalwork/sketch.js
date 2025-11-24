// 最終課題を制作しよう
let balls = [];
let state;
let size = 20;
let score = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  state = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  textSize(20);
 
  if (state == 0) { // ゲーム開始前
    fill(0);
    text("Dogge balls\nClick to start", width / 2, height / 2);
  } else if (state == 1) { // ゲーム中
    
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 30); //自分の動き

    //ここからボール
    for(let i = 0; i < balls.length; i++){
      let b = balls[i];
      fill(0);
      ellipse(b.x, b.y, b.size);
      b.x += b.vx;
      b.y += b.vy;
      b.size += 0.2;
      //終了
      if (mouseX - 30 < b.x - b.size / 2 && b.x + b.size / 2 < mouseX + 30 && mouseY - b.size / 2 - 30 < b.y && b.y + b.size / 2 < mouseY + 30) {
        state = 2;
        score.push(frameCount);
    }
  }
  //出現 
    if(frameCount % 20 == 0){
      const a = {x: width / 2, y: 1, size: 20, vx: random(-7, 7), vy: random(1, 7)};
      balls.push(a);
    }
    if(frameCount % 20 == 0 && frameCount > 200){
      const c = {x: width - 1, y: height / 2, size: 20, vx: random(-7, -1), vy: random(-7, 7)};
      balls.push(c);
    }
    if(frameCount % 20 == 0 && frameCount > 400){
      const e = {x: 1, y: height / 2, size: 20, vx: random(1, 7), vy: random(-7, 7)};
      balls.push(e);
    }
    if(frameCount % 20 == 0 && frameCount > 600){
      const f = {x: width / 2, y: height - 1, size: 20, vx: random(-7, 7), vy: random(-7, -1)};
      balls.push(f);
    }
     if(frameCount % 20 == 0 && frameCount > 800){
      const f = {x: width - 1, y: height - 1, size: 20, vx: random(-7, -1), vy: random(-7, -1)};
      balls.push(f);
    }
     if(frameCount % 20 == 0 && frameCount > 1000){
      const f = {x: 1, y: height - 1, size: 20, vx: random(1, 7), vy: random(-7, -1)};
      balls.push(f);
    }
     if(frameCount % 20 == 0 && frameCount > 1200){
      const f = {x: width - 1, y: 1, size: 20, vx: random(-7, -1), vy: random(1, 7)};
      balls.push(f);
    }
     if(frameCount % 20 == 0 && frameCount > 1400){
      const f = {x: 1, y: 1, size: 20, vx: random(1, 7), vy: random(1, 7)};
      balls.push(f);
    }

    const ballsInCanvas = []; // 画面内のボールを一時的に保持する配列
    for(let i = 0; i < balls.length; i++){
      let b = balls[i];
      if(b.x > 0 && b.x < width && b.y > 0 && b.y < height){ // 画面内
        ballsInCanvas.push(b);
      }
    }
    balls = ballsInCanvas;
  }

  else if (state == 2) { // ゲーム終了後
    fill(0);
    text(("Game Over\nYour score is"), width / 2, height / 2);
    text(score, width / 2, height / 2 + 50);
    textSize(20);
    if(score > 1400){
      upper(windowWidth / 2, windowHeight / 3);
    }
    else{
      lower(windowWidth / 2 - 80 , windowHeight / 3);
    }
  }
}

function mouseClicked() {
  if (state == 0) {
    state = 1;
  }
}

function upper(x1, y1){
  text("すごい", x1, y1);
}

function lower(x1, y1, x2, y2){
  text("難易度は１４００まで上がります", x1, y1)
}