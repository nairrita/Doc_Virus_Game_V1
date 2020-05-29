class Ground {
    constructor(x, y, width){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width , 75, options);
        this.width =  width
        this.height = 75

         World.add(world, this.body)
    }

    display(){
        var pos = this.body.position

        fill("red")
        rect(pos.x, pos.y, this.width, this.height);

        
    }
}