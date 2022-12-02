class Stopwatch {
    constructor() {
        this.minute = 0
        this.second = 0
        this.timerOn = false
    }
    
    incrementTimer() {
        if (this.timerOn) {
            if (this.second == 59) {
                this.minute += 1
                this.second = 0
                return
            }
            this.second += 1
        }
    }

    stopButton() {
        this.timerOn = false
        console.log("Stopped")

    }

    startButton() {
        this.timerOn = true
        console.log("Started")
    }
    
    fomatTime() {
        let minute = this.minute;
        let second = this.second;
        if (minute < 10) {minute = '0' + minute};
        if (second < 10) {second = '0' + second};
        return minute + ':' + second;
    }

    
}

var started = document.getElementById("start");
var stopped = document.getElementById("stop");
var reset = document.getElementById("reset");
var timer = document.getElementById("timer");
var newStopwatch = new Stopwatch();

function changeText() {
    newStopwatch.incrementTimer()
    timer.innerHTML = newStopwatch.fomatTime()
}


started.onclick = function() {
    newStopwatch.startButton()
    started.disabled = true
    interval = setInterval(changeText, 1000)
}

stopped.onclick = function() {
    newStopwatch.stopButton()
    started.disabled = false
    clearInterval(interval)
}

reset.onclick = function() {
    if (newStopwatch.timerOn) {
        newStopwatch.stopButton()
        started.disabled = false
        clearInterval(interval)
    }
    newStopwatch.second = 0
    newStopwatch.minute = 0
    timer.innerHTML = newStopwatch.fomatTime()
}

