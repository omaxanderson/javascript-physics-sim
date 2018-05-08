function Target() {
  this.pos = createVector(random(0, width - 10), 0);
  this.vel = createVector(0, random(1, 2));

  this.draw = function() {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, 20, 20);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }
}
