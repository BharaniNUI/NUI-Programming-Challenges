function findNumberOfOccurance(str,toFind){
    let count=0
    let str1=[]
    str=str.toLowerCase()
    str1=str.split(" ")
    for(let i of str1){
        if(i.includes(toFind)){
            count++
        }
    }
    return count

}

console.log(findNumberOfOccurance("be kind whenever possible. kindness is what matters", "kind"))