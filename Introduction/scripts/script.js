let text = document.querySelector('#text');
function printObject(object){
    let res = '<ul>';

    for (const i in object) {
        res+= '<li><b>' + i + '</b>' + object[i] + '<li>';
    }
    res += '</ul>';
    document.write(res);
}

let images = document.querySelectorAll('#gallery .photos img');
let btnPrev = document.querySelector("#gallery .buttons .prev");
let btnNext = document.querySelector("#gallery .buttons .next");
let i = 0;

btnNext.addEventListener('click', ()=>{
    images[i].classList.remove('showed');
    i++;
    if (i > (images.length - 1)){
        i = 0;
    }
    images[i].classList.add('showed');
});

btnPrev.addEventListener('click', ()=>{
    images[i].classList.remove('showed');
    i--;
    if (i < 0){
        i = images.length - 1;
    }
    images[i].classList.add('showed');
});