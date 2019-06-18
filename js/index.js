// Your code goes here
//using mouseover to change the color of 'fun bus' to red 
//event #1
const funBus = document.getElementsByClassName('logo-heading')
funBus[0].addEventListener('mouseover', mouseOver = () => {
    funBus[0].style.color = 'red';
});
funBus[0].addEventListener('mouseout', mouseOut = () => {
    funBus[0].style.color = 'black';
});

//use event alert 
//event #2
btnAlert = document.getElementsByClassName('btn')
btnAlert[0].addEventListener('click', function (event) {
    alert('Fun In The Sun!');
  });
// use event wheel
//event #3
let scale = 1;
const logoHeading = document.querySelector('.logo-heading');
logoHeading.onwheel = zoom;

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.25, scale), 2.5);
    logoHeading.style.transform = `scale(${scale})`;
};

// using doubleclink 
//event #4 
const card = document.querySelector('header nav');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});