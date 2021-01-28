class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.1,
            length:500
        }
      this.rope=constraint.create(option);
      World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        var xoffset=pointB.x+this.offsetX;
        var yoffset=pointB.y+this.offsetY;
        strokeWeight(2);
        line (pointA.x,pointA.y,xoffset,yoffset);
    }
}
