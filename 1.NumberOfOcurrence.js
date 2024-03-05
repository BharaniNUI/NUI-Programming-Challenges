function findNumberOfOccurance(sentence, word) {
    let count = 0
    let array = []
    sentence = sentence.toLowerCase()
    word = word.toLowerCase()
    array = sentence.split(" ")
    for (let i of array) {
        if (i.includes(word)) {
            count++
        }
    }
    return count

}

console.log(findNumberOfOccurance("be kind whenever possible. kindness is what matters", "kind"))