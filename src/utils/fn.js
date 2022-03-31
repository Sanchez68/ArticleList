export
const delay = (() => {
    let timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = window.setTimeout(callback, ms);
    };
})();