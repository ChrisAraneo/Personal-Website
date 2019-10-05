function showPage(number) {
    const pages = document.querySelectorAll(".page");
    if (number <= pages.length) {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.visibility = "hidden";
        }
        pages[number - 1].style.visibility = "visible";
    }
}

function hidePage() {

}

function handleScroll(e) {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const max = document.querySelector("body").scrollHeight - vh;
    const pages = document.querySelectorAll(".page").length;
    let cur = this.scrollY;

    const unit = max / pages;
    let toShow = 1;
    while (cur > unit) {
        cur -= unit;
        toShow++;
    }
    showPage(toShow);
}

function initLinks() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        const attr = link.getAttribute("data-href");
        if (attr) {
            link.addEventListener("click", function (e) {
                event.preventDefault();
                const active = link.classList.contains("active");
                if (!active) {
                    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    const max = document.querySelector("body").scrollHeight - vh;
                    const pages = document.querySelectorAll(".page").length;
                    const unit = max / pages;
                    window.scrollTo(0, unit * (attr - 1) * 1.05);
                }
            });
        }
    });
}

window.addEventListener('scroll', function (e) { handleScroll(e); });

window.onload = function () {
    this.handleScroll();
    this.initLinks();
}