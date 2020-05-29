class Ball {
    constructor(x, y){
        var options = {
            density: 0.5,
            friction: 0.5,
            restitution :0.6
        }

        this.body = Bodies.circle(x, y, 18, options);
        this.radius = 30;

        World.add(world, this.body);
            
    }

    //collision function
    hits(player){
        if(player.body.positionx-this.body.position.x < player.width/2+ this.width/2 
            && this.body.position.x - player.body.position.x < player.width/2 +this.width/2
            && player.body.position.y - this.body.position.y < player.height/2 + this.height/2
            && this.body.position.y -  player.body.position.y < player.height/2 + this.height/2){
                return true
            }
            
            else {
                return false
            }
            
          
            }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x, pos.y);

        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, 18, 18);
        pop();
    }
}