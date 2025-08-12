// for responsive nav bar
const sidebar = document.querySelector('.navSmallScreens');
const menuBtn = document.querySelector('.menu');
const crossBtn = document.querySelector('.crossBtn');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});
crossBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});


//for faqs
const singleAccordion = document.querySelectorAll('.accordion-content');

singleAccordion.forEach((item, index) => {
    const headingQuestion = item.querySelector('.question');
    headingQuestion.addEventListener('click', () => {
        item.classList.toggle('open');

        const description = item.querySelector('.answer-description');
        if(item.classList.contains('open')){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector('i').style.transform = `rotate(180deg)`;
            item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        }else{
            description.style.height = '0px';
            item.querySelector('i').style.transform = `rotate(-180deg)`;
            item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    });
});


//reveal on scroll
window.addEventListener('scroll', reveal);

        function reveal(){
            const reveals = document.querySelectorAll('.reveal');
            for(var i = 0; i < reveals.length; i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 10;

                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        }