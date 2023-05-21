const hourText = document.getElementById("hour");
const minuteText = document.getElementById("minute");
const secondText = document.getElementById("second");
const progressBar = document.getElementById("progress");

function updateTime() {
    let date = new Date();
    hourText.textContent = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();;
    minuteText.textContent = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    secondText.textContent = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();
    progressBar.style.width = (date.getSeconds()/60)*100 +"%";
}

setInterval(updateTime, 1000);
