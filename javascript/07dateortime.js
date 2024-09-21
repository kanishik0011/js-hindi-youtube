////dates
let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)
console.log(myDate.toLocaleTimeString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toTimeString())
console.log(myDate.toDateString())
let myCreateDate   =new Date (2024,9,21)
let minCreateDate =new Date (2024,9,21,5,3)
let moCreateDate =new Date ("2023-04-20")
let miCreateDate =new Date ("03-04-2024")


console.log(myCreateDate.toDateString())
   let myTimeStamp =Date.now()
   console.log(myTimeStamp) 
   console.log(myCreateDate.getTime())
   console.log(Date.now()/1000);
   let newDate =new Date()
   console.log(newDate)
   console.log(  newDate.getMonth+1())
   console.log(newDate.getDay())
   `${newDate.getDay()}and the time`

   newDate.toLocaleDateString('default',{weekday:"long"})