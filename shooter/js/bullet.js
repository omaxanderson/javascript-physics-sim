function Bullet(x, y) {
  this.xtarget = x;
  this.ytarget = y;
  this.xpos = width / 2;
  this.ypos = height - 20;
  this.xstep = (this.xtarget - width / 2);
  this.ystep = (this.ytarget - height + 20);
  this.dist = sqrt(this.xstep**2 + this.ystep**2);

  this.draw = function() {
    stroke(255);
    fill(255);
    //line(this.xdir, this.ydir, width / 2, height - 20);
    ellipse(this.xpos, this.ypos, 5, 5);
  }

  this.update = function() {
    this.xpos += this.xstep;
    this.ypos += this.ystep;
  }

  this.setup = function() {
    this.xstep = (this.xstep / this.dist) * 3.5;
    this.ystep = (this.ystep / this.dist) * 3.5;
  }
}
