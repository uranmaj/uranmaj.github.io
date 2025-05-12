document.addEventListener('DOMContentLoaded', function () {
    const KEY = 'dark';
    const button = document.getElementById('mode-switch');

    const userPref = localStorage.getItem(KEY);
    if (userPref === 'true') {
        document.body.classList.add(KEY);
    } else if (userPref === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add(KEY);
    }

    button.addEventListener('click', function () {
        const isDark = document.body.classList.toggle(KEY);
        localStorage.setItem(KEY, isDark ? 'true' : 'false');
    });
});