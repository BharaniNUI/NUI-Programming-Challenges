function findSum(a, b) {
    sum = 0
    for (let i = 0; i <= b; i++) {
        c = a * i
        sum += c
    }
    return sum
}

console.log(findSum(5, 5))