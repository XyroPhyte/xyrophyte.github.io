let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainBack = document.getElementById('mountainBack');
let mountainFront = document.getElementById('mountainFront');
let slidingText = document.getElementById('slidingText');
let button = document.getElementById('button');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.20 + 'px';
    mountainBack.style.top = value * 0.50 + 'px';
    mountainFront.style.bottom = value * 0.50 + 'px';
    slidingText.style.marginRight = value * 4.00 + 'px';
    slidingText.style.marginTop = value * 0.75 + 'px';
    button.style.marginTop = value * 0.75 + 'px';
    header.style.top = value * 0.50 + 'px';
});
