/////////aaraysss
const myArr=[0,1,2,3,4,5]
const myHeros=["ben","hen"]
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[0])
console.log(myHeros[1])
console.log(typeof myHeros)
////arrays method///
 myArr.push(6)
myArr.push(8)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.shift()
myArr.unshift(9)

console.log(myArr.includes(9));
console.log(myArr.indexOf(3))
const newArr=myArr.join()
console.log(typeof newArr)




///////slice////splice//
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2)
//////arraayyyy222222////
const marvel_heros=["thor","spiderman","hulk"]
const dc_heros=["ironman","batman",
"flash"]
 
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[3][1])
 const allHeros=marvel_heros.concat(dc_heros)
 console.log(allHeros)

 const all_new_heros=[...marvel_heros,...dc_heros]
 console.log(all_new_heros)
 //// 
 const anotherArr=[1,2,3,[4,5,6],7[6,7[4,5]]]
 const real_another_array= anotherArr.flat(Infinity)
 console.log(real_another_array)

 console.log(Array.isArray("kanishk"))
 console.log(Array.from("kanishk"))

 console.log(Array.from({name:"kanishk"}))
let score1=200
let score3=300
let score2=800
console.log(Array.of(score1,score3,score2))
const allScore=[...score1,...score2,...score3]
console.log(allScore) 