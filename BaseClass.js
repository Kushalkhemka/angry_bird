class BaseClass
{
    constructor(x,y,width,height,angle)
    {

        var option=
        {
            'restitution':0.8,
            'density':1.0,
            'friction':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("base.png");
        

        
    }
display()
 {
    push();
    var angle=this.body.angle;
    translate(this.body.position.x,this.body.position.y);
    
    rotate(angle);
    
    //rect(0,0,this.width,this.height);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);


    pop();
 }
}
