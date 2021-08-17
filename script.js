/******* Cronometro *************/
window.onload = () => {
    h = 0; m = 0; s = 0; mls = 0;
    timeStarted = 0;
    time = document.getElementById("time");
    bntStart = document.getElementById("btnStart")
    btnStop = document.getElementById("btnStop")
    btnReset = document.getElementById("btnReset")
    event();
}
////////////Captura los clicks  en los botones de inicio,detener y reseteo //////
function event() {
    bntStart.addEventListener("click", start)
    btnStop.addEventListener("click", stop)
    btnReset.addEventListener("click", reset)
}
/***********Añade una unidad a segundo,minuto  hora cuando se completan las unidades anteriores equivalentes***/
function write() {
    let ht, mt, st, mlst;
    mls++
    if (mls > 99) { s++; mls = 0; }
    if (s > 59) { m++; s = 0; }
    if (m > 59) { h++; m = 0; }
    if (h > 24) { h = 0 }

    mlst = ('0' + mls).slice(-2)
    st = ('0' + s).slice(-2)
    mt = ('0' + m).slice(-2)
    ht = ('0' + h).slice(-2)

    time.innerHTML = `${ht}:${mt}:${st}:${mlst}`
}
function start() {
    write();
    timeStarted = setInterval(write, 10);
    btnStart.removeEventListener("click", start);
}

function stop() {
    clearInterval(timeStarted);
    btnStart.addEventListener("click", start);
}

function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00.00"
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    btnStart.addEventListener("click", start);
}

