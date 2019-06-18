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

