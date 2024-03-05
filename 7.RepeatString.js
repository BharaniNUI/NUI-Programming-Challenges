function repeatString(string, num) {
    let repeatedString = ""
    for (let i = 1; i <= num; i++) {
        repeatedString += string
    }
    return repeatedString
}

console.log(repeatString('arun', 3))