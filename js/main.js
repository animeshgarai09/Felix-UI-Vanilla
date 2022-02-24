const themeSwitcher = document.getElementById('themeSwitcher')
const icon = themeSwitcher.querySelector('i')
const theme = window.localStorage.getItem('theme')
const toggleIcon = (toggle = false) => {
    //toggle true == light
    if (toggle) {
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    } else {
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
    }

}
/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && theme == null) {
    // dark mode
    document.body.classList.add('dark-theme')
    toggleIcon();
    window.localStorage.setItem('theme', 'dark')
} else if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches && theme == null) {
    toggleIcon(true);
    window.localStorage.setItem('theme', 'light')
} else if (theme === 'dark') {
    document.body.classList.add('dark-theme')
    toggleIcon();
} else if (theme == 'light') {
    document.body.classList.remove('dark-theme')
    toggleIcon(true);

}
// event listener stops when the change theme button is clicked
themeSwitcher.addEventListener('click', () => {
    const theme = window.localStorage.getItem('theme')
    if (theme == 'dark') {
        document.body.classList.remove('dark-theme')
        toggleIcon(true);
        window.localStorage.setItem('theme', 'light')
    } else if (theme == 'light') {
        document.body.classList.add('dark-theme')
        toggleIcon();
        window.localStorage.setItem('theme', 'dark')
    }

})

