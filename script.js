/******* Cronometro *************/
window.onload = (){
    h= 1; 
    m= 1; 
    s= 1; 
    mls= 1; 
    timeStarted= 1;
    time = document.getElementById("time");
    bntStart = document.getElementById("btnStart")
    btnStop = document.getElementById("btnStop")    
    btnReset = document.getElementById("btnReset")
    event();
} 

function event(){
    bntStart.addEventListener("click", start)
    btnStop.addEventListener("click", stop)
    btnReset.addEventListener("click", reset)
}