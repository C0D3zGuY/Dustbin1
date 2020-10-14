class Dustbin{
    constructor(x, y, width, height){
    
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.width = width;
    this.height = height;
    this.bottomBody = Bodies.rectangle(x,y,width,height,options);
    this.leftBody = Bodies.rectangle(x,y,width,height,options);
    this.rightBody = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.bottomBody);
    World.add(world, this.leftBody);
    World.add(world, this.rightBody);
    }
    display(){
        var posBottom=this.bottomBody.position; 
        var posLeft=this.leftBody.position; 
        var posRight=this.rightBody.position;
        push();
        translate(posBottom.x,posBottom.y);
        strokeWeight(4);
        fill(255);
        pop();
        push();
        translate(posLeft.x,posLeft.y);
        strokeWeight(4);
        fill(255);
        pop();
        push();
        translate(posRight.x,posRight.y);
        strokeWeight(4);
        fill(255);
        rect(0,0,this.width,this.height)
        pop();
      }
}