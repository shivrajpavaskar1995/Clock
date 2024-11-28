let is24HourFormat=true;

function formatTime(hours,minutes,seconds){
    if(!is24HourFormat && hours>12)
        
        {hours-=12;
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`;
}
else if (!is24HourFormat && hours === 0) {
    hours = 12; // Midnight case
    return `12:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} AM`;
  }
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

}

function updateClock(){
    const now = new Date;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date=now.toLocaleDateString();

    const timeString=formatTime(hours,minutes,seconds);
    document.getElementById("time").innerText=timeString;
    document.getElementById("date").innerText=date;


}

document.getElementById("toggleFormat").addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    document.getElementById("toggleFormat").textContent = is24HourFormat ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
    updateClock();
  });
  