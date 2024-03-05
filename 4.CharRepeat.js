function charRepeating(string) {
    let array = []
    array = string.split("")
    let count = 0
    let answer

    const map = new Map()
    for (let i of array) {
        let j = 1
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, j)
        }
        if (count < map.get(i)) {
            answer = i
            count = map.get(i)
        }
    }
    return answer
}

console.log(charRepeating("traaainngfornewbie"))