let text = document.querySelector('#text');

console.log(text);

text.onclick = function(){
    text.innerHTML = 'red';
    text.className = 'test';
}