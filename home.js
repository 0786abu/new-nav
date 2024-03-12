let x = document.getElementById('menu')
let menu = document.querySelector('.menubtn')
let close = document.querySelector('.closebtn')


function openmenu(){

    x.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block";
}

function closemenu(){

    x.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none";
}