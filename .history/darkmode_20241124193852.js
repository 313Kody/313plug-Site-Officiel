let darkmode = localStorage.getItem('darkmode');

const themeSwitchNavbar = document.getElementById('theme-switch-navbar');
const themeSwitchSidebar = document.getElementById('theme-switch-sidebar');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    // Change le logo et les icônes ici
    document.querySelector('.logo img').src = "images/313_logo_Lamauve-removebg-preview.png";
    // Change les SVG dans la sidebar (ici pour le menu et le bouton close)
    changeSidebarIcons("white");
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    // Remet le logo et les icônes à leur état original
    document.querySelector('.logo img').src = "images/313_vert-removebg-preview.png";
    changeSidebarIcons("black");
};

const changeSidebarIcons = (color) => {
    const menuIcon = document.querySelector('.menu-button svg');
    const closeIcon = document.querySelector('.sidebar svg');
    
    const iconColor = color === "white" ? "#FFFFFF" : "#000000";
    menuIcon.setAttribute("fill", iconColor);
    closeIcon.setAttribute("fill", iconColor);
};

// Vérifie si darkmode est activé au chargement de la page
if(darkmode === "active") {
    enableDarkmode();
}

themeSwitchNavbar.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

themeSwitchSidebar.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
