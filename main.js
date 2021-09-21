const T = (n) => {
    let sum = 0
    while (n !== 0) {
        n /= 2
        n = Math.floor(n)
        sum += n
    }
    return sum
}

console.log(T(800) - T(1))