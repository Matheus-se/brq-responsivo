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