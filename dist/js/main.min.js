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

function init() {
    handleScroll(null);
}

function handleScroll(e) {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const max = document.querySelector("body").scrollHeight - vh;
    const pages = document.querySelectorAll(".page").length;
    let cur = this.scrollY;

    const unit = max / pages;
    console.log(cur, max, unit);
    let toShow = 1;
    while (cur > unit) {
        cur -= unit;
        toShow++;
    }
    showPage(toShow);
}

window.addEventListener('scroll', function (e) { handleScroll(e); });

window.onload = function () {
    init();
}