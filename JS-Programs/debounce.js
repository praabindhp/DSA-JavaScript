function log() { console.log('Debounced!'); }
const debouncedLog = debounce(log, 2000);
debouncedLog();

function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
