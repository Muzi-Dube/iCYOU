export function darkModeToggler(){
    const preferredTheme = localStorage.getItem('preferredTheme');
    const themeTogglerBtn = document.querySelector('.theme-switcher-btn');
    const bodyElement = document.body;

    if(preferredTheme === 'dark'){
        bodyElement.classList.add('body-DM');
    }else{
        bodyElement.classList.remove('body-DM');
    }

    themeTogglerBtn.addEventListener('click', () => {
        const isDarkMode = bodyElement.classList.toggle('body-DM');
        themeTogglerBtn.innerHTML = isDarkMode ? '<img src="./assets/moon-svgrepo-com.svg" width="30" height="30" class="theme-switcher-icon">': '<img src="./assets/sun-svgrepo-com.svg" width="30" height="30" class="theme-switcher-icon">';
        
        localStorage.setItem('preferredTheme', isDarkMode ? 'dark' : 'light');
    });
}