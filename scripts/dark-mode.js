export function darkModeToggler(){
    const preferredTheme = localStorage.getItem('preferredTheme');
    const themeTogglerBtn = document.querySelector('.theme-switcher-btn');
    const followersIcon = document.querySelector('.analyzed-icon');
    const nonFollowersIcon = document.querySelector('.non-followers-icon');
    const bodyElement = document.body;

    if(preferredTheme === 'dark'){
        bodyElement.classList.add('body-DM');
    }else{
        bodyElement.classList.remove('body-DM');
    }

    themeTogglerBtn.addEventListener('click', () => {
        const isDarkMode = bodyElement.classList.toggle('body-DM');
        themeTogglerBtn.innerHTML = isDarkMode ? '<img src="./assets/moon-svgrepo-com.svg" width="30" height="30" class="theme-switcher-icon">': '<img src="./assets/sun-svgrepo-com.svg" width="30" height="30" class="theme-switcher-icon">';
        followersIcon.innerHTML = isDarkMode ? '<img src="./assets/account-avatar-male-man-people-person.svg" height="30" width="30" class="followers-svg">' : '<img src="./assets/account-avatar-male-man-people-person-svgrepo-com.svg" height="30" width="30" class="followers-svg">';
        nonFollowersIcon.innerHTML = isDarkMode ? '<img src="./assets/avatar-delete-profile-remove-unfollow-user.svg" height="30" width="30" class="non-followers-svg">' : '<img src="./assets/avatar-delete-profile-remove-unfollow-user-svgrepo-com.svg" height="30" width="30" class="non-followers-svg">';
        localStorage.setItem('preferredTheme', isDarkMode ? 'dark' : 'light');
    });
}