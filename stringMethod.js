
// question1
//  var fname=prompt('enter the first name')
//  var lname=prompt('enter the last name ')
// var merge=fname+" " +lname
// document.write("Welcome " + merge)

// q2

// var mobilename=prompt('Enter the mobile number')
// var len=mobilename.length
// alert('Lenght of the string:'+ len)

//q3
// var Stringname=prompt("enter the world")
// var ind=Stringname.indexOf('n')
// alert("index of n is at :" + ind )


// q4
// var Stringname=prompt("enter the word")
// var ind=Stringname.lastIndexOf('l')
// alert("index of l is at :" + ind )

// q5
// var a= "Pakistan"
// alert("Character at index 3: "+ a.charAt(3))

// q7
// a="hyderabad"
// alert(a.replace("hyder","islam"))

// q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g,"&")
// alert(b)

// // q9
// var string1="472"
// alert( " First  " + typeof string1)
// var num=Number(string1)
// alert( " second  " + typeof num)

//q10
//  var a =prompt("enter the name is lowercase")
//  alert("user Input:" + a )
//  a = a.toUpperCase()
//  alert("uppercase:" + a )
  
// q11
// var a=prompt("enter some thing")
// var firstChar = a.slice(0, 1);
// var otherChars = a.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var title = firstChar + otherChars;
// alert(title)

// q12
// var num =35.36
// num=num*100
// var saveString=num.toString()
// alert(saveString)

// q13

// var entername=prompt("Enter the username");
// for(var i=0 ; i<=entername.length ; i++ ){
//   if(entername.charAt(i)==="!" ||entername.charAt(i)===","||entername.charAt(i)==="."|| entername.charAt(i)==="@" )
//   {
//       alert("Plaese enter a valid username")
//   }
// }


// q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userinput=prompt("enter the thing you want to purchase")
// var flag=false;
// for(var i=0;i<=A.length;i++){
//   if(userinput.toLowerCase()===A[i]){
//       alert("it is avaiable" + " AT " + i )
//      flag=true
//     }
  
// }
// if(flag!==true){
//     alert("Sorry not avaiable")
// }

//q15

// var inputpassword=prompt("enter the password")


// if(Number(inputpassword[0])!== NaN ){
//     alert('invalid Password')
// }else if(inputpassword.length < 6   ){
//     alert('invalid Password')
// }


// q16

// var university = "University of Karachi";

// for(var i=0; i<university.length;i++){
    
// document.write(university[i] + "</br>" )


// }


// q17
// var a= "Pakistan"
// var b= a.indexOf('n')
// alert(" last letter Character is " + a[b])

// q18
var a="The quick brown fox jumps over the lazy dog"
a=a.toLowerCase();
var count=0
for(var i=0;i<a.length ; i++)
{
    
    if(a[i]==="t"){
        
      if( a.slice(i,4)==="the")
      {
          count=count+1

      }
    }
}
alert( count)