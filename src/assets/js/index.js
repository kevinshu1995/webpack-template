export function aPromise(fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(fn);
        }, 500);
    });
}
