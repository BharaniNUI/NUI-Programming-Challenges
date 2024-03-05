function filterOut(array, filter) {
    let resultArray = []
    for (let i of array) {
        if (typeof i != filter) {
            resultArray.push(i)
        }
    }
    return resultArray

}

console.log(filterOut(["a", "d", 1, true, "cd", 33], "number"))