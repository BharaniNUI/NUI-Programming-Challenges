function findSum(a, b) {
    if (a > 0 && b > 0) {
        sum = 0
        for (let i = 0; i <= b; i++) {
            c = a * i
            sum += c
        }
        return sum
    }else{
        return `Invalid Number`
    }

}

console.log(findSum(8, 3))