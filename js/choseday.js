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
