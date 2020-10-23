/*class bird{
    constructor(x,y,width,height)
    {

        var option=
        {
            'restitution':0.6,
            'density':2.0,
            'friction':1.0
        }
        this.birdobject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.birdobject);
        this.width=width;
        this.height=height;
        
    }
display()
 {
    this.birdobject.position.x=mouseX;
    this.birdobject.positionY=mouseY;
    push();
    var angle=this.birdobject.angle;
    translate(this.birdobject.position.x,this.birdobject.position.y);
    
    rotate(angle);
    fill("red");
    
    rect(0,0,this.width,this.height);

    pop();
 }
}*/

class bird extends BaseClass
{
    constructor(x,y,width,height)
    {
        super(x,y,width,height);
        this.image=loadImage("bird.png");


    }

    display()
    {
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        super.display();

    }


}
