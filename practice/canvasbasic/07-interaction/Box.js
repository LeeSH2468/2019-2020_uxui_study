class Box{
  constructor(x, y, width, height,index,speed){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.index = index;
  this.speed = speed;

  this.draw();
  }

  draw(){
    context.fillStyle='rgba(255, 0, 0, 0.5)'
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = 'white';
    context.font='bold 30px sans-serif'

    context.fillText(this.index,this.x+50,this.y+50);
  }

}