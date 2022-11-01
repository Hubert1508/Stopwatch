let hundsec = 0;
let sec = 0;
let min = 0;
let zeroHundSec = 0;
let zeroSec = 0;
let num = 1;

let timer = document.getElementById("timer");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

window.onload = function(){

   timer.textContent = min + ":" + zeroSec + sec + ":" + zeroHundSec + hundsec;

}

startButton.onclick = function(){

    let lapButton = document.getElementById("lap");

    lapButton.style.visibility  = "visible";
    

    lapButton.onclick = function(){

        let getValue = document.querySelector("#timer").innerHTML;
        

        localStorage.setItem("timer",getValue);

        const memory = localStorage.getItem("timer");

        let result = document.getElementById("result");
        
       

        if(num>=16){

            alert("Limit zapisu został osiągnięty");
            result = "";
        }

        result.innerHTML +=(num++) + " - "+memory+"</br>";

    }

    startButton.setAttribute("disabled", "dsiabled");
    startButton.setAttribute("class", "buttonDisabled");
    
    let interval = setInterval(()=>{

        timer.textContent = min + ":" + zeroSec + sec + ":" + zeroHundSec + (hundsec++);

        if(hundsec>=10){

           zeroHundSec="";

           if(hundsec===99){

            zeroHundSec = 0;
            hundsec = 0;
            sec++;

            if(sec>=10){

                zeroSec="";

                if(sec>=60){

                    zeroSec= 0;
                    sec = 0;
                    min++;

                    if(min>=60){
                        min=0;
                    }
                }
            }

           }

        }

    },10);

    pauseButton.onclick = function(){

        startButton.removeAttribute("disabled", "disabled");
        startButton.setAttribute("class","button")

        clearInterval(interval);

    }

    stopButton.onclick = function(){

        lapButton.style.visibility  = "hidden";

        num=1;

        clearInterval(interval);

        localStorage.removeItem("timer");

        hundsec = 0;
        sec = 0;
        min = 0;
        zeroHundSec = 0;
        zeroSec = 0;

        timer.innerHTML = min+":"+zeroSec+sec+":"+zeroHundSec+hundsec;

        startButton.removeAttribute("disabled", "disabled");
        startButton.setAttribute("class","button")
        let result = document.getElementById("result");

        result.innerHTML="";
         
    }
}

