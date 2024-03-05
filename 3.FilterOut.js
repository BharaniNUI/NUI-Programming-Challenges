function filterOut(arr, filter) {
    let arr1 = []
    for (let i of arr) {
        if (typeof i != filter) {
            arr1.push(i)
        }
    }
    return arr1

}

console.log(filterOut(["a", "d", 1, true, "cd", 33], "number"))