const days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");

function getCounter(){
    const currYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currYear+1} 00:00:00:00`);
    const currDate = new Date();
    const diff = newYear - currDate;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor((diff/1000/60/60)%24);
    const m = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff/1000)%60);
    days.innerHTML = d < 10 ? "0"+d:d;
    Hours.innerHTML = h < 10 ? "0"+h:h;
    Minutes.innerHTML = m < 10 ? "0"+m:m;
    Seconds.innerHTML = s < 10 ? "0"+s:s;
}
setInterval(getCounter,1000);
