function removeDuplicates(array) {
    let j = 1
    let resultArray = []
    for (let i = 0; i < array.length; i++) {
        if (resultArray.includes(array[i])) {
            j++
        } else {
            resultArray.push(array[i])
        }
    }
    return resultArray
}
console.log(removeDuplicates([1, "two", "two", 3, "two"]))