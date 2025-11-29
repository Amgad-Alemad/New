let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let nouvil = document.querySelector('.nouvil');

window.onscroll = function() {
    let value = scrollY;

    stars.style.left = value + 0.5 + 'px';
    stars.style.top = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 4 + 'px';

    
    nouvil.style.fontSize = value + 'px';

   
    if (scrollY >= 70) {
        nouvil.style.fontSize = '70px';
        nouvil.style.position = 'fixed';
        if (scrollY >= 545) {
            nouvil.style.display = 'none';
        }
        else 
        {
            nouvil.style.display = 'block';
        }
        if (scrollY >= 450) {
            document.querySelector('main').style.background = 'linear-gradient(#c48686 , #58afb2)';
        }
        else {
            document.querySelector('main').style.background = 'linear-gradient(#000000 , #29012e)';
        }
        
        }
};