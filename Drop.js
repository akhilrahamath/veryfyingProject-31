class Drop{
    constructor(x,y,r){
      var options={
        isStatic:false
      }  

      this.rain=Bodies.circle(x,y,r,options);
      World.add(world,this.rain);

      this.drops=[];
    }

     display(){
      var maxDrops=100;
    }

    updateY(){     
      if(this.rain.position.y > height){
          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
      }
  }

   showDrop(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
  }

    