// alert('Hello World') //! Better not do this!

// 'use strict';
console.log('app.js is loaded.');

// let today = new Date();

// let formatdate = today.toDateString();
// let selectElement = document.getElementById('date');

// def(){
//     let a = 1;
//     console.log('checkcing indents in this shiiiiiiit');
// }



// selectElement.innerHTML = formatdate;



const navToggle = document.querySelector('.nav-toggle');
const navLinks= document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    // console.log('trying red');
    document.body.classList.toggle('nav-open')
});


navLinks.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open');
    })
})