const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const wetonNames = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];

function updateClock() {
    const now = new Date(); 
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let day = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let displayHours = String(hours).padStart(2, '0');
    let displayMinutes = String(minutes).padStart(2, '0');
    let displaySeconds = String(seconds).padStart(2, '0');

    let localOffset = now.getTimezoneOffset() * 60 * 1000 * -1; 
//getTimezoneOffset() returns time in minutes; -1 is used to find the local time from UTC
    let totalDays = Math.floor((now.getTime() + localOffset) / (1000 * 60 * 60 * 24));
    let wetonIndex = totalDays % 5;

    let dateString = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year + " (" + wetonNames[wetonIndex] + ") ";
    let timeString = displayHours + ":" + displayMinutes + ":" + displaySeconds;

    document.getElementById('date').innerText = dateString;
    document.getElementById('time').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();