function setClock(){
    let elClock = document.getElementById("clock");

    let now = new Date();
    let hh = ('0' + now.getHours()).slice(-2);
    let mm = ('0' + now.getMinutes()).slice(-2);
    let ss = ('0' + now.getSeconds()).slice(-2);
    elClock.innerHTML = hh + ':' + mm + ':' + ss;
}

setInterval(setClock, 1000);
