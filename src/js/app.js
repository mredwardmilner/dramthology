document.getElementById('js-current-year').appendChild(document.createTextNode(new Date().getFullYear()));

window.onload = function () {
    document.documentElement.classList.add("is-ready");
};
