const modal = document.getElementById('modal');
const showBtn = document.getElementById('show-btn');
const closeBtn = document.getElementById('close-btn');

const accordionBtns = document.getElementsByClassName('accordion-btn');
const accordions = document.getElementsByClassName('accordion');

showBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => {
    modal.style.display = "none";
    for(const accordion of accordions){
        accordion.classList.remove('open');
    }
    for(const accordionBtn of accordionBtns){
        accordionBtn.classList.remove('active');
    }
}

for(const accordionBtn of accordionBtns){
    accordionBtn.addEventListener("click", () =>{
        accordionBtn.classList.toggle('active');
        const accordion = accordionBtn.nextElementSibling;
        accordion.classList.toggle('open');
    });
}