//     function same(arr1,arr2){
//         if (arr1.length!==arr2.length){
//             return false
//         }
//         for (let i=0; i<arr1.length; i++){
//             let curentIndex=arr2.indexOf(arr1[i]**2)

//             if (curentIndex==-1){
//                 return false
//             }
//             arr2.splice(curentIndex,1)
//         }
//         return true

//     }
//   console.log(same([3,2,1],[9,4,1]))
// let arr1 ="hassnain"
// console.log(arr1.indexOf("n")

// console.log(result)
// "hassnain"
//       function count(str) {
// let result = {};
//         for (let i = 0; i < str.length; i++) {

//           if (result[str[i]] > 0) {
//             result[str[i]]++;
//           } else {
//             result[str[i]] = 1;

//           }

//         }
//         return result;
//       }
//       console.log(count("hhhjk"));
//   let count1 = {};
//   arr1 = "hassnain";
// function same(arr1, arr2) {
//     if (arr1.lenght!==arr2.lenght)
//     {
//         return new Error("arry are not equal in size")
//     }
//   let count1={};
//   let count2={};

//   for (let val of arr1) {
//     count1[val] = (count1[val] || 0) + 1;
//   }
//       console.log(count1);
//   for (let val of arr2) {
//     count1[val] = (count1[val] || 0) + 1;
//   }
//   for (let key in count1){
//       if (!(key**2 in count2) ){
//           return false
//       }

//   }
//   return true
//   // for ()
// }
// console.log(same([4,4,2],[16,16,4]))

// arr1="hassnain"
// let count2={name:"hassnain"}
//     for (let val in count2) {
//     //   count1[val] = (count1[val] || 0) + 1;
//     console.log(val)
// }

//   function reversmatch(str,str1){
//     if (str.length!==str1.length){
//       return false
//     }
//     let result="";
//   for (let i = str.length-1; i >=0;  i--) {
//     result+=str[i]

//   }
//   if (result===str1){
//       return true
//     }else{
//       return false
//     }

//       console.log(result)

// }
// console.log(anagram("hass","ssah"))
// function(){

// }
// function anagram(str,str1){
//   let result ={}
//   for (let i=0; i<str.length; i++){
// result[str[i]]?result[str[i]]++:result[str[i]]=1
//   }
//   for (let i=0; i<str1.length; i++){
// if(!(result[str1[i]])){
//   return false

// }else{
//   result[str1[i]]-=1
// }

//   }
// return true
// }
// [-3,-2,-1,0,1,2,3]
// function pointer(arr){
//   for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){

//       if ((arr[i]+arr[j])===0){
//         return [arr[i],arr[j]]
//       }
//     }
//   }
// }

// function countuniquevaluesinarry(arr){
//   let i=0
//   for (let j=1; j<arr.length; j++){
//     if (arr[i]!==arr[j]){
//       i++
//      console.log(arr[i]=arr[j]) // 2,3,4,5
//     }
//   }
//    return i+1
// }
// console.log(countuniquevaluesinarry([1,1,1,2,2,2,3,4,5]))

// arr=[1,1,2,3,4,4,5]
// // let result =""
// for(let i=arr.length-1; i>=0;i-- ){
// // result+=arr[i]
// console.log(i)
// }
// console.log(result)

// for (let i=0; i<4-3; i++){
//     console.log(i)
// }

// function maxsum(arr,num){
//     max=0
//     for(let i=0; i<=arr.length-1;  i++){
//         // console.log(i<arr.length-num+1,"i")
//         console.log(i)
//         temp=0
//         for(let j=0; j<num; j++){
//             temp+=arr[i+j]
//         }
//         if(temp>max){
//             max=temp
//         }
//         // console.log(temp,max);
//     }
//     return max
// }
// console.log(maxsum([1,2,5,2,8,1,5],3));
// const usera={}

// function maxsum(arr,num) {
//     let maxsum = 0;
//     let tempsum = 0;
//     // console.log();
//     for (let i = 0; i < num; i++){

//         maxsum += arr[i];

//     }
//    tempsum=maxsum
//     for (let i = num; i <arr.length; i++) {
//         console.log(i,"i")
//         tempsum=tempsum - arr[i-num]+ arr[i];
//         maxsum=Math.max(maxsum,tempsum);
//         console.log(maxsum,tempsum)
//         }
//         return maxsum;
// }
// console.log(maxsum([2,6,9,2,1,8,5,6,3],3));

// //linear search
// function findindex(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if (arr[i]===num){
//             return i
//         }

//     }
//     return -1

// }
// console.log(findindex([1,2,3,4,5,6,7,8,9],9))

// function binarySearch(arr,num){
//     min=0;
//     max=arr.length-1;
//     while (min<=max){
//           middle=Math.floor((min+max)/2)

//     if(arr[middle]>num){
//         max=middle-1
//     }else if (arr[middle]<num) {
//         min=middle+1
//     } else {
//         return middle

//     }
//     }

// }
// console.log(binarySearch([1,2,3,4,5,6,7,8],2))
// function fact(num){

//     if(num===1 || num===0) return 1
//     return num * fact(num-1)

// }
// console.log(fact(1))

// function factorial(num){
//     let sum =1
//     for(let i=num; i>1; i--){
//     //   console.log(i);
//         sum*=i
//         console.log(sum);

//     }
//     return sum
// }
// console.log(factorial(7));

// function collect(arr){
// let result=[]
//     function helper(help){
//         if (help.length===0){
//             return
//         }
//         if (help[0]%2==0){
//             result.push(help[0])
//         }
//            helper(help.slice(1))
//     }
//     helper(arr)
//     return result
// }
// //
// // arr=[1,2,3,4,5,6,7,8]

// function collect(arr){
//  let result=[]
//     for (let i=0; i<arr.length; i++){
//     if (arr[i]%2==0){
//         result.push(arr[i])
//     }
// }
// return result
// }
// console.log(collect([1,2,3,4,5,6,7,8]));
// function collect(arr,value){

//     for (let i=0; i<arr.length; i++) {

//         if (arr[i]===value) {
//            return i
//         }
//     }
//      return -1
// }
// console.log(collect([5,8,1,100,12,3,12],12));

// function binarySearch(arr, value) {
//   let min = 0;
//   let max = arr.length;
//   while (min <= max) {
//     middle = Math.floor((min + max) / 2);
//     if (arr[middle] > value) {
//       max = middle - 1;
//     } else if (arr[middle] < value) {
//       min = middle + 1;
//     }else{
//         return middle
//     }
//   }
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));

// function naiveString(string,val) {
//      let count=0
//     for (let i=0; i<string.length; i=i+1){
//         for(let j=0; j<val.length; j++){
//             // console.log(string[i+j],val[j])
//             if(string[i+j]!==val[j])break;
//             if (j===val.length-1){
//                 // console.log(j,val.length-1);
//                 count++;
//             }
//         }
//     }
//   return count

// }
// console.log(naiveString("hello hassnain how are you" , "ow"))
// ababcbda
// 12345678

// pie table
// j
// abab
//pie table

// // 01234
// function cryptographic(pattern, A, B) {
//   let arr = [];
//   for (let i = 0; i < pattern.length; i++) {
//     arr.push(pattern.charCodeAt(i));
//   }
//   let arrayChuks = [];
//   while (arr.length) arrayChuks.push(arr.splice(0, 3));
//   // console.log(arrayChuks);
//   let filledArray = [];
//   for (let i = 0; i < arrayChuks.length; i++) {
//     if (arrayChuks[i].length !== 3) {
//       arrayChuks[i].push(32);
//       // console.log('not');
//     }
//     // console.log(arrayChuks[i]);

//     filledArray.push(arrayChuks[i]);
//   }

//   console.log(filledArray);
//   let array = [];
//   for (let index = 0; index < arr.length; index++) {
//     array.push();
//   }
//   array = [1, 3, 4];
//   //   console.log(array);

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       for (let z = 0; z < array.length; z++) {
//         // console.log(i,"i",j,"j",z,"z")
//       }
//     }
//   }
// }
// console.log(
//   cryptographic('hello hassnain how are you', [
//     [1, 2, 2],
//     [-1, 1, 3],
//     [1, -1, -4],
//   ]),
// );

// array = [[13,5,5],[20,0,13],[5,0,13]];
// A=[
//   [1, 2, 2],
//   [-1, 1, 3],
//   [1, -1, -4],
// ]
//     let m=[]
//     // let /
// for (let i = 0; i < array.length; i++) {
//   let a1 =0
//   for (let j = 0; j < array.length; j++) {
// //  let a1=0
//     for (let z = 0; z < array.length; z++) {

//       // console.log(i,"i",j,"j",z,"z")
//       m.push( A[z][j]*array[j][z])
//       console.log("break");
//       console.log(array[j][z], A[z][j]);

//     }
//   }
//   // console.log(a1);
// }
// console.log(m);

// function bubbleSort(array){
//   let noSwap
//   for (let  i= 0; i < array.length; i++) {
//     noSwap=true
//     for (let j = 0; j < array.length; j++) {
//       if (array[j]>array[j+1]){
//         temp=array[j]
//         array[j]=array[j+1]
//         array[j+1]=temp
//         noSwap=false
//       }
//     }
//     if (noSwap) break
//   }

// return array;
// }
// c

// function selection(array) {
//   // let min = 0;
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       console.log(i, 'i', j, 'j');
//       if (array[min] > array[j]) {
//         min = j;
//         console.log('min', array[min]);
//       }
//     }
//     temp = array[min];
//     array[min] = array[i];
//     array[i] = temp;
//     // console.log(temp);
//   }
//   return array;
// }
// console.log(selection([5, 3, 4, 1, 2]));

function insertion(array) {
  let arr=[]
  for (let i =1; i < array.length; i++) {
    let currentval = i;
    for (let j =  i-1; j >=0; j--) {
      
      if (array[j] > currentval) {
        console.log(i, 'i', j, 'j');
        array.splice(currentval)
        console.log("done");
    //     temp = array[i];
    // array[i] = array[j];
    // array[j] = temp;
      }
      // break

    }

    // console.log(temp);
  }
  return array;
}
console.log(insertion([5, 3, 4, 1, 2]));
console.log([1,2,3,4,5,6,7,8].splice(0,3));

