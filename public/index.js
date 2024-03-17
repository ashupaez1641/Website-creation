// // Write your code here:
// var BMI,weight=58,height=1.60;
// BMI = weight /(height * height);
// if(BMI>=30){
//     console.log("Your Body Mass Index is:"+ BMI + "and You are Obese.")
// }
// if(BMI >= 25 || BMI <=25.9){
//      console.log("Your Body Mass Index is:"+ BMI + "and You are Overweight.")
// } 
// if(BMI>=18.6 || BMI<=24.9){
//     console.log("Your Body Mass Index is:"+ BMI + "and You are Healthyt.")
// }
// if(BMI<18.6){
//     console.log("Your Body Mass Index is:"+ BMI + "and You are Underweight.")
// }

// function fibb(N){
//     var a=0;
//     var b=1;
//     var i=0;
//     while(i < N){
//         var temp=a+b;
//         a=b;
//         b=temp;
//         console.log(a,b);
//         i++;
//     }
//     if(a == N){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
    
    
// }

// fibb(5);
// var name="global";
// var last="refrence";

// function a(){
//     var name="inside a"
//     console.log(name + "1");
//     function b(){
//         var first="book";
//         console.log(name+"inside b");
        
        
//     }
    
//     b();
    
//     console.log(name + "2");
    
// }
// a();
// console.log(name +" golobal refrence");

// var sum= function add(a,b){
//     return a+b;
// }

// console.log(sum);
// // console.log(add);
// console.log(add(10,10))
// console.log(sum(90,10))
// console.log(add(10,10))
// console.log(add(10,10))

// var add= function(a,b){
//     console.log("i called")
//     return a+b;
    
// }

// var op = function(func){
//     var x=2;
//     var y=3;
//     console.log("i came first")
//     return func(x,y);
//     console.log("i came second")
// }
// console.log(op(add));

// function day(x){
//     var arr=["M","T","W","TH","fr","sat","sun"]
//     var ans;
    
//         if(x < 1 || x > 7){
//             return null;
//         }
//         else{
//           ans=arr[x-1];
//         }
  
//     return ans;
// }

// var x=day(1);
// console.log(`the day is ${x}`)

// var arr=[1,2,3,4,6];

// var test= function(x){
//     return x > 5;
// }

// if(arr.every(test)){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//     }
// // });
// function f(a,b = 1) {
//     console.log(a*b)
//   }
//   var x = // some hidden  value
//   f(5,x)
  //What should be the value of x so that the output is 5?
// var arr=[1,2];
//   function duplicate(arr) {
//     // Write Logic here
//     var x =[];
//     for(var i=0;i<arr.length;i++){
//         x=arr;
//         var y=arr.shift;
//         arr.push(y);
//         var z=x.shift;
//         arr.push(z);
//     }
    
 
 
  
// }
//   }

//   duplicate(arr);
// var sec=10;
// function count(){
//   console.log("countdown"+sec);
//   sec--;
//   if(sec == 0){
//     alert("happy birthday");
//     clearInterval(x);
//   }

// }
// var x=setInterval(count,2000);
// Problem statement
// What will be the output of the following code:

// let list = [40, 50, 60];
// for (let i in list) {
//    console.log("in value"+i); 
// }

// for (let i of list) {
//    console.log("of value"+i); 
// // }
// var obj1={};
// var obj2;
// // console.log(obj1);
// // console.log(obj2);
// var arr=[];
// obj1.name="ashu";
// obj1.age=17;
// // console.log(obj1);
// // console.log(obj1["name"]);
// obj1.name={..."ashu2"};
// console.log(obj1);
// var key1=Object.keys(obj1);
// console.log(key1);
// var keys=Object.getOwnPropertyNames(obj1);
// console.log(keys);

// arr=[1,2,3,4,5,6];
//  var arr=["sunday","mon","tues"];
// //  console.log("the vale is before " + sunday)
//  const[sunday,monday]=arr;
//  console.log("the vale is after" + sunday)
