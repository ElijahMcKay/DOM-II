// Your code goes here


// click
const rmHeaderPic = document.querySelector('header img') 
rmHeaderPic.addEventListener('click', () => rmHeaderPic.style.display = 'none'); 

// mouseout

const returnColor = document.querySelector('header img')
returnColor.addEventListener('mouseout', element => element.target.style.display = ''); 

// dblclick
const blackout = document.querySelector('.intro h2')
blackout.addEventListener('dblclick', () => blackout.style.background = 'black'); 

const resizing = document.querySelector('h1'); 
window.addEventListener('resize', () => console.log(resizing)); 


// const homeBtn = document.querySelector('footer'); 

// homeBtn.addEventListener('mouseover', (event) => event.style.color = 'green'); 

window.addEventListener('scroll', () => document.body.style.backgroundColor = 'red'); 




let mouseChange = document.querySelector('footer p'); 
mouseChange.addEventListener('mouseover', () => mouseChange.style.backgroundColor = 'black'); /*event.style.backgroundColor = 'black'*/; 

let btnChange = document.querySelectorAll('.btn'); 

btnChange.forEach(btnChange.addEventListener('mouseover', (e) => e.style.backgroundColor = 'black')); 
// btnChange.addEventListener('mouseover', () => btnChange.style.backgroundColor = 'black'); 