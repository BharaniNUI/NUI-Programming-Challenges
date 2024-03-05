function findNumberOfOccurance(str,toFind){
    let count=0
    let pattern=/kind+/g;
    let found=str.match(pattern)
    for(let i of found){
        count++
    }
    return count

}

console.log(findNumberOfOccurance("be kind whenever possible. kindness is what matters", "kind"))