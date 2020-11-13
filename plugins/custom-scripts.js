function changeNavWhenScroll() {
    window.document.body.onscroll = function(e) {
        if (window.pageYOffset > 100) {
            document.getElementsByTagName("nav")[0].classList.add("bg-translucent");
            document.getElementById("logo-nav").style.transform = "scale(.7)";
            return;
        }
        document.getElementsByTagName("nav")[0].classList.remove("bg-translucent");
        document.getElementById("logo-nav").style.transform = "scale(1)";
    };
}

changeNavWhenScroll();


const links = document.querySelectorAll('nav .nav-item');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        for (let j = 0; j < links.length; j++) {
            if (j != i) {
                links[j].setAttribute('style', 'opacity: .3 !important');

            }
        }
    });
    links[i].addEventListener('mouseout', () => {
        for (let j = 0; j < links.length; j++) {
            if (j != i) {
                links[j].setAttribute('style', 'opacity: 1 !important');
            }
        }
    });
}

const tituloSlider = document.querySelector('.color-change-text');
const butonRight = document.querySelector('.button-right-brq');
const butonLeft = document.querySelector('.button-left-brq');
const butonLeftText = document.querySelector('.text-change-button-left');
const butonRightText = document.querySelector('.text-change-button-right');

const contentSliderTitle = [
        {texto: "Definir a estratégia e transformar a cultura", cor: "var(--brq-darkblue)", label: "Definir"},
        {texto: "Aoba texto teste", cor: "var(--brq-yellow)", label: "Entender"},
        {texto: "Texto teste chiclete", cor:"#8B008B", label: "Entregar"},
        {texto: "Aeiou abcde 12345", cor: "#5F9EA0", label: "Monitorar"}
    ];

let i = 0;
let j = i + 1

if (butonRight) {
    butonRight.addEventListener('click', () => {
        i++;
        j++;

        if (i >= contentSliderTitle.length - 1) {
            i = 0;
        }
        if (i >= contentSliderTitle.length - 2) {
            j = 0;
        }

        tituloSlider.style.opacity = 0;
        butonLeftText.style.opacity = 0;
        butonRightText.style.opacity = 0;
        setTimeout(() => {
            tituloSlider.style.color = contentSliderTitle[i].cor;
            butonRightText.style.color = contentSliderTitle[j].cor;
            butonRightText.innerHTML = contentSliderTitle[j].label;
            butonLeftText.style.color = contentSliderTitle.slice(i-1)[0].cor;
            butonLeftText.innerHTML = contentSliderTitle.slice(i-1)[0].label;
            tituloSlider.innerHTML = contentSliderTitle[i].texto;
            tituloSlider.style.opacity = 1;
            butonLeftText.style.opacity = 1;
            butonRightText.style.opacity = 1;
        }, 250);
    });
}

if (butonLeft) {
    butonLeft.addEventListener('click', () => {
        i--;
        j--;

        if (i <= -1) {
            i = contentSliderTitle.length - 1;
        }
        if (j <= -1) {
            j = contentSliderTitle.length - 1;
        }
        
        tituloSlider.style.opacity = 0;
        butonLeftText.style.opacity = 0;
        butonRightText.style.opacity = 0;
        setTimeout(() => {
            tituloSlider.style.color = contentSliderTitle[i].cor;
            butonRightText.style.color = contentSliderTitle[j].cor;
            butonRightText.innerHTML = contentSliderTitle[j].label;
            butonLeftText.style.color = contentSliderTitle.slice(i-1)[0].cor;
            butonLeftText.innerHTML = contentSliderTitle.slice(i-1)[0].label;
            tituloSlider.innerHTML = contentSliderTitle[i].texto;
            tituloSlider.style.opacity = 1;
            butonLeftText.style.opacity = 1;
            butonRightText.style.opacity = 1;
        }, 250);
    });
}