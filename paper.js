class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
         'density':1.2
    }
      this.body=Bodies.circle(x,y,(radius-190)/2,options);
      this.image = loadImage("paper.png");
      this.radius=radius;
      
    World.add(world, this.body);

     
      
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
   imageMode(RADIUS);
      fill(255);
      stroke("green");
     strokeWeight(5)
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  };