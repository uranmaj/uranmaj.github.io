document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('mode-switch');

    if (localStorage.getItem('dark')) {
        document.body.classList.add('dark');
    }

    button.addEventListener('click', function () {
        const isDark = document.body.classList.toggle('dark');
        if (isDark) {
            localStorage.setItem('dark', 'true');
        } else {
            localStorage.removeItem('dark');
        }
    });
});