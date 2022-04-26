AFRAME.registerComponent("player-movement",{

    init:function(){
        this.walk();
    },

    walk:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="w"){
                var entity=document.querySelector("#alarm_sound")
                entity.components.sound.playSound()
            }
        })
    }

})