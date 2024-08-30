const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link =>{
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden')
    })
})

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

// ----------------- TABS -------------------------
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");
tabs.forEach(tab =>{
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })

        tab.classList.add("active")

        const tabval = tab.getAttribute("data-tabs")
        // console.log(tabval);
        all.forEach(item => {
            item.style.display = 'none'
        })
        if (tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }else if(tabval == 'snack'){
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        }else if(tabval == 'beverage'){
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        }else{
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    })
})
// ----------------- darkmode -------------------------
const html = document.querySelector("html");
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
// if (localStorage.getItem('dark-mode') === 'enabled') {
//     // body.classList.add('dark');
//     // html.classList.add('dark');
// }


// darkModeToggle.addEventListener('click', (e) => {
//     // if (body.classList.contains('dark')) {
//     //     body.classList.remove('dark');
//     //     localStorage.setItem('dark-mode', 'disabled');
//     // } else {
//     //     body.classList.add('dark');
//     //     localStorage.setItem('dark-mode', 'enabled');
//     // }
// });

// OR
if (localStorage.getItem('dark-mode') === 'enabled') {
    darkMode();
}else{
    lightMode();
}
darkModeToggle.addEventListener('click', (e) => {
    if (localStorage.getItem('dark-mode') === 'disabled') {
        darkMode();
    }else{
        lightMode();
    }
});

function darkMode () {
    html.classList.add('dark');
    darkModeToggle.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem('dark-mode', 'enabled');
}
function lightMode () {
    html.classList.remove('dark');
    darkModeToggle.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem('dark-mode', 'disabled');
}
// ----------------- scroll up -------------------------
function scrollUp () {
    const scrollUpBtn = document.getElementById('scroll-up');

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll', scrollUp);

// ----------------- CHANGE BACKGROUND HEADER -------------------------
const scrollHeader = () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) {
        header.classList.remove("border", "border-secondaryColor");
    }else{
        header.classList.add("border", "border-secondaryColor");
    }
}
window.addEventListener('scroll', scrollHeader);

// ----------------- scroll section active link -------------------------
const activeLink = () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav__link');

    let current = 'home';

    sections.forEach(section => {
        const top = section.offsetTop;
        if (this.scrollY >= top -60) {
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach(navlink => {
        navlink.classList.remove('text-secondaryColor');
        // if (navlink.classList.contains(current)) {
        //     navlink.classList.add('text-secondaryColor');
        // }
        if (navlink.href.includes(current)) {
            navlink.classList.add('text-secondaryColor');
        }
    });
}
window.addEventListener('scroll', activeLink);



// ----------------- scroll reveal animation -------------------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(".home__image");
sr.reveal(".home__content", {origin: 'bottom'});

sr.reveal(".category__card", {interval: 300})

sr.reveal(".promo__card-1", {origin: 'left'});
sr.reveal(".promo__card-2", {origin: 'right'});

sr.reveal(".about__img", {origin: 'bottom'});
sr.reveal(".about__content", {origin: 'top'});

sr.reveal(".menu__items", {origin: 'left'});
sr.reveal(".customer__review", {origin: 'right'});

sr.reveal(".footer", {origin: 'right'});