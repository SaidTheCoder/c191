AFRAME.registerComponent("bullets",{

    init:function(){
        this.shootBullet();
    },

    shootBullet:function(){
        window.addEventListener("click",(e)=>{
            // if(e.key==="e"){
                var bullet=document.createElement("a-entity")
                bullet.setAttribute("geometry",{primitive:"sphere",radius:.05})
                bullet.setAttribute("material","color","yellow")
                var cam = document.querySelector("#camera")
                // pos=cam.getAttribute("position")
                bullet.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                var camera=document.querySelector("#camera").object3D
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene=document.querySelector("#scene")
        
                bullet.setAttribute("dynamic-body",{shape:"sphere",})
                bullet.addEventListener("collide",this.removeBullet)
                scene.appendChild(bullet)
            //  }
            // bullet.addEventListener("click",this.remove)
        })
    },

    remove:function(){
            bullet.setAttribute("visible",false)
    },

    removeBullet:function(e){
        var scene = document.querySelector("#scene");
    
        //bullet element
        var element = e.detail.target.el;
    
        //element which is hit
        var elementHit = e.detail.body.el;
    
        if (elementHit.id.includes("enemy")) {
          //Add code here
          var countRobberel=document.querySelector("#countrobber")
          var robbersFired=parseInt(countRobberel.getAttribute("text").value)
          robbersFired-=1
          countRobberel.setAttribute("text",{value:robbersFired})
          if(robbersFired===0){
            var txt=document.querySelector("#completed")
            txt.setAttribute("visible",true)
          }
          
          scene.removeChild(elementHit);
        }
        //remove event listener
        element.removeEventListener("collide", this.removeBullet);
    
        //remove the bullets from the scene   
        scene.removeChild(element);
        }

    }
)