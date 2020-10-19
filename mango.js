class Mango{
  constructor(x,y,width,height,options) {
      this.image = loadImage("sprites/mango.png");
      
      var options = {
        isStatic:true,
        restitution:0,
        friction:1,
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y,this.body.scale);
    
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
}