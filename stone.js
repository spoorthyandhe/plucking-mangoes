class Stone{
    constructor(x, y,r) {
 
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.x=x;
		this.y=y;
		this.r=r
		this.stoneimage=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
      }
      display(){ 
        push();
        rectMode(CENTER);
        strokeWeight(4);
        stoneimageMode(CENTER);
        stoneimage(this.image,50, 660,50,50);
        pop();
      }
}