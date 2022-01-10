const time = document.getElementById('time');
const buyingForm = document.querySelector('.last-case');
const scrollToBuy = document.querySelectorAll('.zakaz');
const nextSlide = document.getElementById('next-slide');
const prevSlide = document.getElementById('prev-slide');
const slideViews = document.querySelectorAll('.slide');
const takeIt = document.getElementById('takeIt');

scrollToBuy.forEach(element => {
    element.addEventListener('click', () => {
        buyingForm.scrollIntoView({behavior: "smooth"});
    });
});

takeIt.addEventListener('submit', (e) => {
    e.preventDefault();
});

timer();
sliders();


function sliders(){
    let x = 0;

    nextSlide.addEventListener('click', () => {
        x++;
        if(x > slideViews.length - 1){
            x = 0;
        }
        slideViews[x].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
    });

    prevSlide.addEventListener('click', () => {
        x--;
        if(x < 0){
            x = slideViews.length - 1;
        }
        slideViews[x].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
    });

    setInterval(() => {
        if(x <= 0){
            slideViews[x + 1].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
        }
        if(x >= slideViews.length - 1){
            slideViews[x - 1].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
        }
    }, 10000);
}

function timer(){
    let x = 59;
    let y = 29;
    let timerInterval = setInterval(() => {
        x--;
        if(x < 0){
            y--;
            x = 59;
        }
        time.textContent = `${y}:${x}`;
        if(x < 10){
            time.textContent = `${y}:0${x}`;
        }
        if(y < 10){
            time.textContent = `0${y}:${x}`; 
        }
        if(y < 0){
            clearInterval(timerInterval);
            alert('Время вышло');
        }
    }, 1000);
}
