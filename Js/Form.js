class Form{
    constructor(){
        this.inputName = createInput("Name")
        this.goButton = createButton("Go")
        this.greetings = createElement("h3")
        this.reset = createButton("Reset")
    }
    display(){
        var title = createElement("h2")
        title.html("Car racing game")
        title.position(displayWidth/2 - 50, 0);
        
        this.inputName.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.goButton.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth/2 + 20, displayHeight/2 + 40)
        this.goButton.mousePressed(()=>{
            this.inputName.hide()
            this.goButton.hide()
            player.name = this.inputName.value()
            playerCount += 1

            player.index = playerCount

            this.greetings.html("Hello "+ player.name)
            this.greetings.position(displayWidth/2 - 70, displayHeight/4);


            
            player.update()
            player.countUpdate(playerCount)
            
        })
         
        this.reset.mousePressed(()=>{
            player.countUpdate(0)
            control.updateState(0)

            var playerRef = database.ref("Players")
            playerRef.remove()

            //console.log("Reset")
        })


    }

    hide(){
        this.greetings.hide()
        this.inputName.hide()
        this.goButton.hide()
    }
}

