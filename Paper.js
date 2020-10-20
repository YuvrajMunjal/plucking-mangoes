class Paper {
    
    constructor(x,y,radius,options){
        this.image = loadImage("Images/paper.png");
        var options = {         
            isStatic: false,
            restitution: 0.8,
            density:5.8
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        }   
        display(){
            var pos =this.body.position;
            imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            ellipseMode(RADIUS);
            ellipse(pos.x, pos.y, this.radius);
            
          }
    
}