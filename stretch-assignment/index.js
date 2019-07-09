let topBlock = document.querySelectorAll('.block');

let topArray = Array.from(topBlock); 

topArray.forEach(block => block.addEventListener('click', function() {block.parentNode.prepend(block)}));
    // block.addEventListener('mousedown', () => block.style.transform = translate(1000)); 
