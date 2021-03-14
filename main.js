// INTERSECTION OBSERVER
const elements = document.querySelectorAll('.anim');
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('anim-reveal');
        } else {
            entry.target.classList.remove('anim-reveal');
        }
    })
});

    elements.forEach(element =>{
        observer.observe(element)
    });