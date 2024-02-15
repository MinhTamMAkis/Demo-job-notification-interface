// Lấy tham chiếu đến các phần tử cần thao tác
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

// Thêm sự kiện click vào nút menu
menuButton.addEventListener('click', function() {
    // Toggle lớp active cho menu links
    navLinks.classList.toggle('menu_mobi');
    menuButton.style.display = 'none';

});
