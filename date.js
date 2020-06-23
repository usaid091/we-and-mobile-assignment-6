//q1
// var a = new Date();
// alert(a)


// q2
// var a = new Date();
// var b=a.getMonth()
// // alert("The Current month is:" + )
// if(b===0){
//     alert ("The Current month is: " + 'January')
// }else if( b===1){
//     alert("The Current month is: " +'Feburay')
// }else if( b===2){
//     alert("The Current month is:" +'March')
// }else if( b===3){
//     alert("The Current month is:" +'April')

// }else if( b===4){
//     alert("The Current month is:" + 'May')
// }else if( b===5){
//     alert( "The Current month is:" + 'June')
// }else if( b===6){
//     alert( "The Current month is:" + 'July')
// }else if( b===7){
//     alert( "The Current month is:" + 'August')
// }else if( b===8){
//     alert( "The Current month is:" + 'September')
// }else if( b===9){
//     alert( "The Current month is:" + 'October')

// }else if( b===10){
//     alert( "The Current month is:" + 'November')
// }else if( b===11){
//     alert( "The Current month is:" + 'December')
// }

///q3
// var a=new Date()
// var day =a.getDay()

// if(day===0){
//     alert("today is :"+ "Sun")

// }
// else if(day===1){
//     alert("today is :"+ "Mon")

// } 
//  else if(day===2){
//     alert("today is :"+ "Tue")

// }else if(day===3){
//     alert("today is :"+ "Wed")

// }else if(day===4){
//     alert("today is :"+ "Thu")

// }else if(day===5){
//     alert("today is :"+ "Fri" )

// }else if(day===6){
//     alert("today is :"+ "Sat")

// }


//Q4
// var a=new Date()
// var day =a.getDay()

// if(day===0){
//     alert("It is Fun day ")

// }else {
//     alert("It is Fun day ")
// }

// q5

// var a=new Date()
// var day =a.getDate()

// if(day<16){
//     alert("First fifteen days of the month")
// }else {
 
//     alert("Last fifteen days of the month")
// }

// q6

// var a= new Date()
// document.writeln("Current Date" + a +"<br/>")
// var b=a.getTime()
// document.writeln("Elapsed MILLISECOND SINCE midnight, Jan. 1, 1970 : " + b + "<br/>" )
// document.writeln("Elapsed Minutes SINCE midnight, Jan. 1, 1970 : " +b/(1000*60) + "<br/>" )


// q7
// var a= new Date()
// var b= a.getHours()
// if(b>0 && b<12){
//     alert(" It's AM")
// }else{
//     alert(" It's PM")

// }



// Q8
// var a=new Date( "May 30, 2020" )


// alert("Later Date "+a)


// Q9
// var a=new Date("May 18, 2020")
// var b=new Date()
// var c= b.getTime()-a.getTime()
// var day=c/(1000*60*60*24)
// alert("no of days since Ramdan :" + Math.floor(day))

// Q10

// var a=new Date("Januray 1, 2015")
// var b=new Date()
// var c= b.getTime()- a.getTime()

// alert("Reference "+ b +"seconds that elapsed between the reference date and the beginning of 2015 : " + Math.floor(c/1000) )

// q11
// var a =new Date()
// alert( "Current Date " +a)
// var b=a.getHours();
// a.setHours( "1 hour ago" + b-1)

// alert(a)

// q12

// var a=prompt("Enter your age ")
// var b=new Date()
// var c=b.getFullYear()
// alert("your age is" + c )
// var d=c-Number(a)
// alert("Brith Year is : " + d )

// Q14
// var name =prompt("enter the name ")
// var Month =prompt("enter the month ")
// var unit=prompt("enter the unit")
// var amount=1
// var chargeunit=16
// var surge=350
// var amountd=0

// document.write( "K-Electric"   +"<br/>" )
// document.write( "Customer Name : "+name   +"<br/>" )
// document.write( "Month: " + Month  +"<br/>" )
// document.write( "Charges : " + chargeunit  +"<br/>" )
// var d=Number(unit*chargeunit)+Number(surge)
// document.write( "Net Amount Payable (Within Due Date) : " + unit*chargeunit  +"<br/>" )
// document.write( "Net Amount Payable (After Due Date) : " + d  +"<br/>" )
