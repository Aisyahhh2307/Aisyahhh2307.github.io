const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthNames
const weton = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];

function updateClock() {
    const now = new Date(); 
    // year, month, date, day
    let hours = now.getHours();
    let displayHours = String(hours).padStart(2, '0');
    let minutes = now.getMinutes();
    let displayMinutes = String(minutes).padStart(2, '0');
    let seconds = now.getSeconds();
    let displaySeconds = String(seconds).padStart(2, '0');

    let totalDays = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    let wetonIndex = totalDays % 5;

    //let dateString = 
    //let timeString = 

    document.getElementById('time').innerText = dateString;
    document.getElementById('time').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();