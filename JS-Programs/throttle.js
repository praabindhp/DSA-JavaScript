function log() { console.log('Throttled!'); }
const throttledLog = throttle(log, 2000);
throttledLog(); // The log will appear immediately.
throttledLog(); // Subsequent calls within 2 seconds will be ignored.

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}