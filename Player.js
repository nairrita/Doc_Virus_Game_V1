class Player {
    constructor(x, y){
        var options = {
            isStatic: true,
            'density': 0.3
        }
        
    this.body = Bodies.rectangle(x, y, 50, 60, options);

    this.width = 50,
    this.height = 60

    World.add(world, this.body)

    }

   /* move(x, y){
        this.body.position.x = this.body.position.x + x;
        this.body.position.y = this.body.position.y + y;
    }*/

    hit(){
        if(player.x-ball.x < player.width/2 + ball.width/2 &&
            ball.x-player.x < player.width/2 + ball.width/2 &&
            player.y - ball.y < player.height/2 + ball.height/2
            && player.y - ball.y < player.height/2 + ball.height/2){
                
            }
    }

    
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("blue");
        rect(0,0, 50, 60);
        pop()


    }

 }