let targetDate = new Date("Dec 19, 2020 00:00:00").getTime();
let days, hours, minutes, seconds;

setInterval(function() {
    
    let now = new Date().getTime()
    console.log(now)
    let dif = targetDate - now
    console.log(dif)

    seconds = 1000
    minutes = seconds * 60
    hours = minutes * 60
    days = hours * 24

    let d = Math.floor(dif / (days))
    let h = Math.floor((dif % (days)) / (hours))
    let m = Math.floor((dif & (hours)) / (minutes))
    let s = Math.floor((dif % (minutes)) / (seconds))
    

    document.getElementById('day').innerHTML = d + "d"
    document.getElementById('hours').innerHTML = h + "h"
    document.getElementById('minutes').innerHTML = m + "m"
    document.getElementById('seconds').innerHTML = s + "s"
    
}, 1000)

console.log(targetDate)