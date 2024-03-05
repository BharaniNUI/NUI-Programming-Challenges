function findEvenSum(array) {
    let sum = 0
    for (let i of array) {
        if (i % 2 === 0) {
            sum = sum + i
        }
    }
    return sum
}

console.log(findEvenSum([38, 3, 2, 8, 31]))