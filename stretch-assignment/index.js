let topBlock = document.querySelectorAll('.block');

let topArray = Array.from(topBlock); 

topArray.forEach(function(block) {
    block.addEventListener('click', block => block.parentNode.prepend(block));
    // block.addEventListener('mousedown', () => block.style.transform = translate(1000)); 
}); 
