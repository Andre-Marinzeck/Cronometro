let hh = 0;
let mm = 0;
let ss = 0;
let time =  1000;
let cron;
let span = true

function start() {
    if(span == true) {
        cron = setInterval(() => {timer() }, time)
        span = false
    }

}

function pause() {
    clearInterval(cron)
    span = true
}

function reset() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    span = true

    document.getElementById("value").innerText = "00:00:00"
}

function timer() {
    ss++
    if(ss == 60){
        ss = 0;
        mm++
    }
    if(mm == 60){
        mm = 0;
        hh++
    }

    let format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
    document.getElementById("value").innerText = format

}