function particals(particalsCount , animationTime , color , shadowColor) {
            if(window.innerWidth <= 1024) particalsCount /= 2; //redcue the count on smaller screens
            for (let i = 0; i < particalsCount; i++) { // generate particels and set the color and the shadow
                document.querySelector(".particles").innerHTML += `<div class="particle" style=
                "
                    background: ${color};
                    box-shadow: -3px 4px 14px 0px ${shadowColor};
                    -webkit-box-shadow: -3px 4px 14px 0px ${shadowColor};
                    -moz-box-shadow: -3px 4px 14px 0px ${shadowColor};

                "></div> `
            }
            setTimeout(() => {
                   document.querySelectorAll(".particle").forEach(item => {

                    item.style.top = random(0, window.innerHeight) + "px" // move to a randome posetion
                    item.style.left = random(0, window.innerWidth) + "px" 
                    setTimeout(() => {
                        item.style.top = random(0, window.innerHeight) + "px" // move again to a randome posetion
                        item.style.left = random(0, window.innerWidth) + "px"
                    }, animationTime);
                    setInterval(() => {
                        item.style.top = random(0, window.innerHeight) + "px" // move again to a randome posetion to infinity
                        item.style.left = random(0, window.innerWidth) + "px"
                    }, animationTime)
                })

            }, 500);
             
            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
}