class Stone{
constructor(x,y,bodyA,bodyB,options){
    this.image = loadImage("sprites/stone.png");
    var options  = {
       isStatic:false,
       restitution:0,
       friction:1,
       density:1.2,
       bodyA: bodyA,
       bodyB: bodyB,
       stiffness: 0.04,
       length: 10
    }    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.Stone = Constraint.create(options);
    World.add(world, this.Stone);
    
}
fly() {
    this.Slingshot.bodyA = null;


}
display(){
  push();
  translate(this.body.position.x, this.body.position.y,this.body.scale);

  imageMode(CENTER);
  image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  pop();
}


}