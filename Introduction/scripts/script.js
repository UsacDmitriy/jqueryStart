let text = document.querySelector('#text');
function printObject(object){
    let res = '<ul>';

    for (const i in object) {
        res+= '<li><b>' + i + '</b>' + object[i] + '<li>';
    }
    res += '</ul>';
    document.write(res);
}

printObject(text.style);

text.onclick = function(){
    text.innerHTML = 'red';
    text.className = 'test';
}