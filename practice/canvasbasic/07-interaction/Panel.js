class Panel {
  constructor(){
    this.scaleValue = 0.01;
    this.rotateValue = 0;
  }
  draw(){
    context.save();
    context.resetTransform();
    context.translate(oX, oY);
    context.scale(panel.scaleValue,panel.scaleValue);
    context.rotate(toRadian(this.rotateValue));
    context.fillStyle = 'hotpink';
    context.fillRect(- 200,- 200, 400 , 400);
    context.fillStyle = 'white';
    context.fillText(selectedBox.index + '번째',-150, -150);
    context.restore();
  }

}