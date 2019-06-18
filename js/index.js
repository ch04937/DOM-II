// Your code goes here
//using mouseover to change the color of 'fun bus'
funBus = document.getElementsByClassName('logo-heading')
funBus[0].addEventListener('mouseover', mouseOver = () => {
    funBus[0].style.color = 'red';
});
funBus[0].addEventListener('mouseout', mouseOut = () => {
    funBus[0].style.color = 'black';
});


