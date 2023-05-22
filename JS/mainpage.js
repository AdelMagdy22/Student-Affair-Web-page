const procon = document.querySelector('.projects');
const partcon = document.querySelector('.part')
const smallTap = document.getElementById('.smallTap');
const btn = document.getElementById('toggle-btn');
const MEC = document.getElementById('.marginedited');
// const nav = document.querySelector('nav');

btn.onclick = function() {
    // nav.classList.toggle('hide');
    partcon.classList.toggle('expand');
    smallTap.classList.toggle('expand');
    procon.classList.toggle('expand');
    MEC.classList.toggle('expand');
};