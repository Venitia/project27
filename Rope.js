class Rope {
    constructor(bodyA,pointB){
       var options= {

          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.04,
          length : 5
       }
       this.sling = Constraint.create(options);
       this.pointB = pointB;
       
      
       World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        
        if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           strokeWeight(5);
           line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
       
    
    }
}













/*class Rope{
    constructor(body1,body2,offsetX,offsetY){
     this.offsetX = offsetX;
     this.offsetY = offsetY;
     var option = {
         bodyA:body1,
         bodyB:body2,
         stiffness: 1.2,
         length: 450,
         pointB:{x:this.offsetX,y:this.offsetY}

     }
     this.rope = Constraint.create(option);
     World.add(world,this.rope);

     
    
    display() 
      if(this.rope.bodyA){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      var anchor1 = pointA.x
      var anchor2 = pointA.y
      var anchor3 = pointB.x+this.offsetX;
      var anchor4 = pointB.y+this.offsetY;
      strokeWeight(2);
      line (anchor1,anchor2,anchor3,anchor4);
      
      }}}*/



