let topBlock = document.querySelectorAll('.block'); 

let topBlockArray = Array.from(topBlock); 

topBlockArray.forEach(function(block) {
    block.addEventListener('click', () => topBlock.prepend());
    // block.addEventListener('mousedown', () => block.style.transform = translate(1000)); 
}); 

