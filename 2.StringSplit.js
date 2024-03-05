function stringSplit(str, num) {
    let arr = str.split("")
    let arr1 = []

    for (let i = 0; i < arr.length; i + 2) {
        let sp = ""
        for (let j = 0; j < num; j++) {
            if(arr[i]){
                sp += arr[i]
            }
            i++
        }
        arr1.push(sp)
    }
    return arr1
}

console.log(stringSplit("numenticaui", 2))