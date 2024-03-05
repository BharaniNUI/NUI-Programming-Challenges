function removeDuplicates(arr) {
    let j = 1
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr2.includes(arr[i])) {
            j++
        } else {
            arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(removeDuplicates([1, "two", "two", 3, "two"]))