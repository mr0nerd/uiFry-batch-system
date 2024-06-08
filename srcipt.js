document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.transition = 'transform 0.1s ease-out';
});


const cursorTrail = [];
const trailLength = 10;

for (let i = 0; i < trailLength; i++) {
    const trailDot = document.createElement('div');
    trailDot.className = 'cursor-trail';
    document.body.appendChild(trailDot);
    cursorTrail.push(trailDot);
}

document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    
    for (let i = 0; i < trailLength; i++) {
        setTimeout(() => {
            cursorTrail[i].style.left = e.pageX + 'px';
            cursorTrail[i].style.top = e.pageY + 'px';
            cursorTrail[i].style.transition = `transform 0.1s ease-out`;
        }, i * 20);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const switchModeButton = document.querySelector('.switch-mode');
    const body = document.body;
    const icon = switchModeButton.querySelector('i');
    const logoImg = document.querySelector('.logo-nav img');
    const footerImg = document.querySelector('.contact-left-footer img');


    switchModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const allTextElements = document.querySelectorAll('body *');
        allTextElements.forEach(element => {
            element.classList.toggle('dark-text');
        });
        
        if (body.classList.contains('dark-mode')) {
            logoImg.src = 'dir/images/logo-white.png';
        } else {
            logoImg.src = 'dir/images/logo.png';
        }

        if (body.classList.contains('dark-mode')) {
            footerImg.src = 'dir/images/logo-white.png';
        } else {
            footerImg.src = 'dir/images/logo.png';
        }

        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});
