class Bob {
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }
     this.x = x;
     this.y = y;
     this.radius = radius;
     this.body = Bodies.circle(x,y,radius,options);

     World.add(world,this.body);


    }

    display() {

     var groundpos = this.body.position;
     push ();
     fill ("pink");
     translate (groundpos.x,groundpos.y);
     circle (0,0,this.radius);
     pop ();
    }
 }