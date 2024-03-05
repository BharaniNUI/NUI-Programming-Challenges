function stringSplit(string, num) {
    let array = string.split("")
    let resultArray = []

    for (let i = 0; i < array.length; i + 2) {
        let splitedString = ""
        for (let j = 0; j < num; j++) {
            if (array[i]) {
                splitedString += array[i]
            }
            i++
        }
        resultArray.push(splitedString)
    }
    return resultArray
}

console.log(stringSplit("numenticaui", 2))