let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')
    const logo = document.getElementById('logo')  // Récupère l'élément logo
    const menuIcon = document.getElementById('menu-icon')  // Récupère l'icône menu
    const closeIcon = document.getElementById('close-icon')  // Récupère l'icône close
    const themeIconLight = document.getElementById('theme-icon-light')
    const themeIconDark = document.getElementById('theme-icon-dark')

    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
        logo.src = "images/313_logo_Lamauve-removebg-preview.png"  // Change le logo en mode sombre
        menuIcon.setAttribute('fill', '#FFFFFF')  // Change la couleur de l'icône du menu en blanc
        closeIcon.setAttribute('fill', '#FFFFFF')  // Change la couleur de l'icône de fermeture en blanc
        themeIconLight.style.display = "none"  // Cache l'icône claire
        themeIconDark.style.display = "block"  // Affiche l'icône sombre
    }

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.removeItem('darkmode')
        logo.src = "images/313_vert-removebg-preview.png"  // Remet le logo vert
        menuIcon.setAttribute('fill', '#000000')  // Remet la couleur de l'icône du menu en noir
        closeIcon.setAttribute('fill', '#000000')  // Remet la couleur de l'icône de fermeture en noir
        themeIconLight.style.display = "block"  // Affiche l'icône claire
        themeIconDark.style.display = "none"  // Cache l'icône sombre
    }

    // Si le mode sombre est déjà activé, on l'active à l'ouverture de la page
    if(darkmode === "active") enableDarkmode()

    // Ajout de l'événement de clic pour changer de thème
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })