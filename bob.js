class Bob{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:1
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,option);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y)
        fill ('purple')
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}