class paper {
    constructor(x, y, r) {
      var options = {
           isStatic:false,
           restitution:0.3,
           density:1.2,
           friction:0.5
          
          
          
          
      }
      this.body = Bodies.circle(x, y,20, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(1);
			fill("pink")
			ellipse(0,0,this.r, this.r);
			pop()
    }
  };
  