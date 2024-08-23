export { a, checkThePrime };

let a = 10;

const checkThePrime = (a) => {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return 'Tub son emas';
        }
    }
    return 'Tub son emas';
}
