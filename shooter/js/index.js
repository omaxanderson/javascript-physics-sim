var i = 0;
var bullets = [];
var targets = [];
var score = 0;
var lives = 3;
var screenFlashAlpha = 0.7;

function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(70);
  fill(255);
  stroke(255);
  textSize(16);
  text("Score: " + score, 20, 30);
  text("Lives: " + lives, 20, 50);
  ellipse(width / 2, height - 20, 15, 15);

  // game over if lives == 0
  if (lives == 0) {
    textSize(30);
    text("Game Over!", width / 2 - 70, height / 2 - 20);
    noLoop();
  }

  // add targets
  if (random(0, 100) < 1 && targets.length < 5) {
    targets.push(new Target());
  }

  // check for bullet-target collision
  for (var i = bullets.length - 1; i >= 0; i--) {
    for (var j = targets.length - 1; j >= 0; j--) {
      if (distance(targets[j], bullets[i]) < 20) {
        console.log("hit");
        bullets.splice(i, 1);
        targets.splice(j, 1);
        score++;
      }
    }
  }

  // remove offscreen targets and bullets
  for (var i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].xpos > width || bullets[i].xpos < 0 ||
      bullets[i].ypos < 0) {
        bullets.splice(i, 1);
    }
  }
  for (var i = targets.length - 1; i >= 0; i--) {
    if (targets[i].pos.y > height) {
        targets.splice(i, 1);
        lives--;
        screenFlashAlpha = 0.7;
    }
  }

  // update and draw targets
  for (var i = 0; i < targets.length; i++) {
      targets[i].update();
      targets[i].draw();
  }

  // update and draw bullets
  if (bullets.length > 0) {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].update();
      bullets[i].draw();
    }
  }

  //console.log("b: " + bullets.length);
  //console.log("t: " + targets.length);

}

function distance(target, bullet) {
  if (target && bullet) {
  return sqrt((target.pos.x - bullet.xpos)**2 +
    (target.pos.y - bullet.ypos)**2);
  } else {
    return 0;
  }
}

function keyPressed() {
  if (keyCode == TAB) {
    var b = new Bullet(mouseX, mouseY);
    b.setup();
    bullets.push(b);
  }
  return false;
}
