class ground
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("ground.png");
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