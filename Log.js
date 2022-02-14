class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,50,height,angle);
    this.image = loadImage("sprites/jhar-removebg-preview.png");
    Matter.Body.setAngle(this.body, angle);
  }
}