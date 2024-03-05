function stringSplit(string, number) {
    if(number<=string.length){
        let array = string.split("")
        let resultArray = []
    
        for (let i = 0; i < array.length; i + 2) {
            let splitedString = ""
            for (let j = 0; j < number; j++) {
                if (array[i]) {
                    splitedString += array[i]
                }
                i++
            }
            resultArray.push(splitedString)
        }
        return resultArray
    }else{
        return `Please enter number between 1 to ${string.length}`
    }

}

console.log(stringSplit("numenticaui", 2))