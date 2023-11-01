import Dashboard from "./scripts/Dashboard.js";

document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backToProjectListBtn');
    backBtn.addEventListener('click', () => {
        window.location.href = 'list.html';
    });
});

const dashboard = new Dashboard();
dashboard.init();