function findNumberOfOccurance(sentence, word) {
    let count
    sentence = sentence.toLowerCase()
    word = word.toLowerCase()
    count = sentence.split(word).length-1
    return count

}

console.log(findNumberOfOccurance("be kind whenever possible. kindness is what matters", "kind"))