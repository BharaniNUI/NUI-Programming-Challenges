function charRepeating(str){
    let arr=[]
    arr=str.split("")
    let count=0
    let ans

    const map=new Map()
    for(let i of arr){
        let j=1
        if(map.has(i)){
            map.set(i,map.get(i)+1)
        }else{
            map.set(i,j)
        }
        if(count<map.get(i)){
            ans=i
            count=map.get(i)
        }
    }
    return ans
}

console.log(charRepeating("traaainngfornewbie"))