class Control{
    constructor(){}

    readState(){
      var gamestateRef = database.ref("gamestate")
      gamestateRef.on("value",function(data){
          gamestate = data.val()
      })
    }
    updateState(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    gameStart(){
        if(gamestate === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

        car1 = createSprite(100,200)
        car1.addImage(car1img)
        car2 = createSprite(150,200)
        car2.addImage(car2img)
        car3 = createSprite(200,200)
        car3.addImage(car3img)
        car4 = createSprite(250,200)
        car4.addImage(car4img)
        cars = [car1,car2,car3,car4]

    }
 
    play(){
        form.hide()
        //console.log("play")
        textSize(20)
        text("GameStart",200,10)


        


        Player.getPlayerInfo()
        player.getCarsAtEnd()

        if(playersInfo !== undefined){
            //var yPosition = 150
            background("brown")
            
            //console.log(displayHeight) 
            image(trackImg, 0, - displayHeight * 3, displayWidth, displayHeight * 4)
            var index = 0
            var x = 200
            var y = 0
            
            for(var person in playersInfo){

                /*if(person === "Player"+ player.index){
                    fill("Red")
                }
                else {
                    fill("Black")
                }

                textSize(10)
                text(playersInfo[person].name +"-"+ playersInfo[person].distance, 200, yPosition)
                yPosition += 20*/


                index = index + 1

                x = x + 225
                y = (displayHeight - 100) - playersInfo[person].distance
                cars[index - 1].x = x
                cars[index - 1].y = y


                if(index === player.index){
                    cars[index - 1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index - 1].y
                    fill("Red")
                    ellipse(x,y,70,100)
                }

 

                
            }
        }
        //console.log(player.index);
        if(keyIsDown(UP_ARROW) && player.index !== null){
            //console.log("Key pressed");
          player.distance += 10
          player.update()
        }

        if(player.distance >= 3456){
            gamestate = 2
            player.rank += 1
            console.log(player.rank)
            Player.updateCarsAtEnd(player.rank);
        }
    

        drawSprites()
    }

    end(){
        console.log(player.rank)
    }
}
