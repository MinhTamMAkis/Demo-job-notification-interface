var dayDropdown = document.getElementById('daydropdown');
var monthDropdown = document.getElementById('monthdropdown');
var yearDropdown = document.getElementById('yeardropdown');
var currentTime = new Date();
var currentMonth = currentTime.getMonth();
for (let i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    dayDropdown.appendChild(option);
}

for (let i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    monthDropdown.appendChild(option);
}
var currentYear = currentTime.getFullYear();
for (var i = currentYear; i >= currentYear; i--) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearDropdown.appendChild(option);
}
// choice time
function hoursMenu() {

    var select = document.getElementById('alarmhrs');
    var hrs = 12

    for (i = 1; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
hoursMenu();
function minMenu() {

    var select = document.getElementById('alarmmins');
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();