document.addEventListener("DOMContentLoaded", function (){
    const calendarButton = document.querySelector('#calendarButton');
    calendarButton.addEventListener('click', function (){
        const resultElement  = document.querySelector('#result')
        const calendarInput = document.querySelector('#birthday-date');
        const dateValue = calendarInput.value;
        const date = new Date(dateValue);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const a = Math.floor((14 - month) / 12);
        const y = year - a;
        const m = month + 12 * a - 2;
        const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
        const days = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        }
        resultElement.textContent = days[dayOfWeek];
    });
});