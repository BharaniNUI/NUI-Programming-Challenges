function findEvenSum(arr) {
    let b = 0
    for (let i of arr) {
        if (i % 2 === 0) {
            b = b + i
        }
    }
    return b
}

console.log(findEvenSum([38, 3, 2, 8, 31]))