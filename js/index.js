// Your code goes here
//using mouseover to change the color of 'fun bus'
logo = document.getElementsByClassName('logo-heading')
logo[0].addEventListener('mouseover', mouseOver = () => {
    logo[0].style.color = 'red';
});
logo[0].addEventListener('mouseout', mouseOut = () => {
    logo[0].style.color = 'black';
});


