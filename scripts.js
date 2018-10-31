var navAdminBtnContainer = document.querySelector('.nav-admin-btn-container');
var navAdminIcon = document.querySelector('.nav-admin-icon');
var adminNavWidth = document.querySelector('.admin-nav-width');
var navBehindAside = document.querySelector('.nav-behind-aside');
var content = document.querySelector('.content');

navAdminBtnContainer.addEventListener('click', adminBarTransition);

function adminBarTransition () {
    navAdminIcon.classList.toggle('rotate-img');
    adminNavWidth.classList.toggle('admin-bar-position-change');
    navBehindAside.classList.toggle('admin-bar-width-change');
    content.classList.toggle('content-padding-for-admin-bar');
};





