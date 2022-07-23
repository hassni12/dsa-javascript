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
// let result =""
// for(let i=arr.length-1; i>=0;i-- ){
// result+=arr[i]
// // console.log(i)
// }
// console.log(result)

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

// // // 01234
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

//   // console.log(filledArray,"this");

//   let array = [];
//   for (let index = 0; index < arr.length; index++) {
//     array.push();
//   }

//   // array = [1, 3, 4];
//     // console.log(array," this ");

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
//       // m.push( A[z][j]*array[j][z])
//       // console.log("break");
//       // console.log(array[j][z], A[z][j]);

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

// function insertion(array) {
//   let arr=[] in linux
//   for (let i =1; i < array.length; i++) {
//     let currentval = i;
//     for (let j =  i-1; j >=0; j--) {

//       if (array[j] > currentval) {
//         console.log(i, 'i', j, 'j');
//         array.splice(currentval)
//         console.log("done");
//     //     temp = array[i];
//     // array[i] = array[j];
//     // array[j] = temp;
//       }
//       // break

//     }

//     // console.log(temp);
//   }
//   return array;
// }
// console.log(insertion([5, 3, 4, 1, 2]));
// console.log([1,2,3,4,5,6,7,8].splice(0,3));

// function insert(array) {
//   for (let i = 1; i < array.length; i++) {
//     let currentVal = array[i];

//     let j = i - 1;
//     while (j >= 0 && array[j] > currentVal) {
//       console.log(i, "i", j, "j");
//       array[j + 1] = array[j];

//       j--;
//     }
//     array[j+1]=currentVal

//     console.log("break");
//   }
//   return array
// }
// console.log(insert([2, 1, 9, 76, 4]));

// function mergeSort(firstArray, secondArray) {

//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < firstArray.length && j < secondArray.length) {
//     if (firstArray[i] < secondArray[j]) {
//       result.push(firstArray[i]);
//       i++;
//     } else  {
//       result.push(secondArray[j]);
//       j++;

//     }
//   }
//   while (i<firstArray.length ){
//     result.push(firstArray[i]);
//     i++
//   }
//   while (j<secondArray.length ){
//     result.push(secondArray[j]);
//     j++
//   }
// return result
// //  console.log(result)
// }
// console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));

// function pivot(arr, start = 0, end = arr.length-1) {
//   let pivot = arr[start];
//   let swapIndex = start;
//   for (let i = start+1; i <=end; i++) {
//     if (pivot > arr[i]) {
//       swapIndex++;
//       temp = arr[i];
//       arr[i] = arr[swapIndex];
//       arr[swapIndex] = temp;
//     }
//   }
//   temp = arr[start];
//   arr[start] = arr[swapIndex];
//   arr[swapIndex] = temp;

//   return swapIndex;
// }
// function quickSort(arr, left = 0, right = arr.length-1) {

//   if (left < right) {

//     let pivotIndex = pivot(arr, left, right);
//      //left
//     quickSort(arr, left, pivotIndex - 1);
//     //right
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr
// }

// console.log(quickSort([4, 8, 2, 1, 5, 6, 3]));
// // [3,2,1,4,5,7,6,8]
//  12345 , 0

// num="12345"
// position=0
// for(let i=num.length; i>=0;i--){
//  console.log(num[i])

// }

// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
//   }
// //   console.log(getDigit(123432,0))
// //   console.log(Math.log10(12345));

//   function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
//   }

//   function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//       maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
//   }
//   function redixSort(nums){
//     let maxDigitCount=mostDigits(nums)
//     for(let k=0; k<maxDigitCount; k++){
//         let arrayBukets=[[],[],[],[],[],[],[],[],[],[]]
//         // let arrayBukets=Array.from({lenght:10},()=>[])

//         for (let i=0;i<nums.length;i++){

//         arrayBukets[getDigit(nums[i],k)].push(nums[i])

//         }
//      console.log(arrayBukets)
// nums=[].concat(...arrayBukets)
// console.log(nums)

//     }

//   }

//   console.log(redixSort([23,345,5467,12,2345,9852]));

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       // console.log(this.tail.next,"thid");
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }

//     // this.tail = newTail;
//     // this.tail.next = null;
//     // this.length--;
//     // if (this.length===0){
//     //   this.head = null;
//     //   this.tail=null
//     // }
//     // return current;

//     console.log(newTail.val,"tail")
//     console.log(current.val)
//   }
// }
// let list = new SinglyLinkedList();
// console.log(list.push("hassnain"));
// console.log(list.push("hi"));
// console.log(list.push("hello"));
// console.log(list.pop(),"this")

// console.log(list.push("qureshi"));

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.lenght = 0;
//   }
//   // method
//   insert(val) {
//     let nextNode = new Node(val);
//     if (!this.head) {
//       this.head = nextNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = nextNode;
//       this.tail = nextNode;
//     }
//     this.lenght++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     console.log(current)
//     console.log(newTail,"t")

//     this.tail = newTail;
//     this.tail.next = null;
//     this.lenght--;
//     if (this.lenght === 1) {
//       this.head = null;
//       this.tail = null;
//     }

//     return current;
//   }
//   shift() {
//     // console.log(this.head.next)
//     if (!this.head) return undefined;
//     let current = this.head;
//     this.head = current.next;
//     this.lenght--;
//     if (this.lenght === 0) {
//       this.tail = null;
//     }
//     return current;
//   }
//   unshift(val) {
//     let newHead = new Node(val);
//     if (!this.head) {
//       this.head = newHead;
//       this.tail = this.head;
//     } else {
//       newHead.next = this.head;
//       this.head = newHead;
//     }

//     this.lenght++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index > this.lenght) return null;
//     let counter = 0;
//     let current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   set(index, value) {
//     let getValue = this.get(index);
//     if (getValue) {
//       getValue.val = value;
//       return true;
//     } else {
//       return false;
//     }
//   }
//   updateBetweenIndex(index, value) {
//     if (index < 0 || index > this.lenght) return false;
//     let newNode = new Node(value);
//     let getValByIndex = this.get(index - 1);

//     if (index === 0) {
//       this.unshift(value);
//     } else if (index === this.lenght) {
//       this.insert(value);
//     } else {
//       let temp = getValByIndex.next;
//       getValByIndex.next = newNode;
//       newNode.next = temp;
//     }
//     this.lenght++;
//     return getValByIndex;
//   }
//   removeByIndex(index) {
//     if (index < 0 || index > this.lenght) return false;
//     let getValByIndex = this.get(index - 1);

//     if (index === 0) {
//       this.shift();
//       return true;
//     }
//     if (index === this.lenght - 1) {
//       this.pop();
//       return true;
//     }
//     let temp = getValByIndex.next.next;
//     // console.log(temp)
//     getValByIndex.next = temp;
//     this.lenght--;
//     return true;
//   }
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let prev = null;
//     while (node !== null) {
//       let temp = node.next;
//       node.next = prev;
//       prev = node;
//       node = temp;
//     }
//     return prev;
//   }
// }

// let li = new SinglyLinkedList();
// console.log(li.insert("new"));
// console.log(li.insert("new2"));
// console.log(li.insert("new3"));
// // console.log(li.insert("imran"));
// // console.log(li.reverse());

// console.log(li.pop());
// // console.log(li.unshift("new4"));
// // console.log(li.shift());
// // console.log(li.get(2));
// // console.log(li.set(1,"hassnain"));
// // console.log(li.updateBetweenIndex(2, "ali"));

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   // remove() {}
//   get(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index <= Math.floor(this.length / 2)) {
//       let counter=0
//       let current=this.head
//       while(counter!==index){
//         current=current.next
//         counter++
//       }
//       return current
//     }else {
//       let counter =this.length-1
//       let current=this.tail
//       while(counter!==index){
//         current=current.prev
//         current--
//       }
//       return current
//     }
//   }
// set(value,index){
//   if (index < 0 || index >= this.length) return undefined;
//   let prev =this.get(value);

// }
// remove(index){
//   let removedVal=this.get(index)

// console.log(removedVal,"remove");
// }

// }
// let li = new DoublyLinkedList();
// console.log(li.push(1));
// console.log(li.push(4));
// console.log(li.push(6));console.log(li.push(7));

// console.log(li.remove(2))
// // console.log(li.get(1));
// // console.log(li.push("hassnian"))
// // console.log((8/3))

// class Node{
//   constructor(val){
//     this.val=val;
//     this.next=null;
//   }
// }
// class Queue{
//   constructor(){
//     this.first=null;
//     this.last=null;
//     this.size=0
//   }
//   enqueue(val){
//     let newNode = new Node(val);
//     if (!this.first){
//       this.first=newNode;
//       this.last=newNode

//     }else{
//       this.last.next=newNode;
//       this.last=newNode

//     }
//     this.size++
//     return this
//   }
//   dequeue(){
//     if (!this.head)return undefined;
// let val =this.first
//      if (this.head===this.last) return this.last=null;
//      this.first =this.first.next
//      this.size--
//      return val.val

//   }
// }
// let li =new Queue()
// console.log(li.enqueue(1))
// console.log(li.enqueue(2))
// console.log(li.dequeue());

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.right = null;
//     this.left = null;
//   }
// }
// class BST {
//   constructor() {
//     this.root = null;
//   }
//   insert(val) {
//     let newNode = new Node(val);
//     if (!this.root) {
//       this.root = newNode;
//       return this;
//     }
//     let current = this.root;
//     while (true) {
//       if (val < current.val) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }
//   find(val) {
//     if (this.root === null) return false;
//     let current = this.root;

//     while (current) {
//       if (val < current.val) {
//         current = current.left;
//       } else if (val > current.val) {
//         current = current.right;
//       } else {
//         return true;
//       }
//     }
//     return false;
//   }
//   BFS() {
//     let node = this.root;
//     let data = [];
//     let queue = [];
//     queue.push(node);
//     while (queue.length) {
//       node = queue.shift();
//       data.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   }
//   preOrder() {
//     let data = [];
//     function traverse(node) {
//       data.push(node.val);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
//   }
//   postOrder() {
//     let data = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//       data.push(node.val);
//     }
//     traverse(this.root);
//     return data;
//   }
//   inOrder() {
//     let data = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       data.push(node.val);
//       if (node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
//   }
//   // insert(){

// }

// let li = new BST();
// console.log(li.insert(10));
// console.log(li.insert(6));
// console.log(li.insert(15));
// console.log(li.insert(3));
// console.log(li.insert(8));
// console.log(li.insert(20));

// n=[]
// console.log(n.push(44));
// console.log(n.push(2));
// console.log(n.push(1));
// console.log(n);
// console.log(li.BFS());
// console.log(li.preOrder());
// console.log(li.postOrder());
// console.log(li.inOrder());
// console.log(li.find())

// d=[2,4,6,7,8,77]
// console.log(d.shift());

// class maxBinaryTree {
//   constructor() {
//     this.val = [];
//   }

//   insert(element) {
//     this.val.push(element);
//     this.bubbleUp();
//     return this.val;
//   }
//   bubbleUp() {
//     let idx = this.val.length - 1;
//     let element = this.val[idx];
//     while (idx>0) {
//       let parentidx = Math.floor((idx - 1) / 2);

//       let parent = this.val[parentidx];

//       if (element <= parent) break;

//       this.val[idx] = parent;
//       this.val[parentidx] = element;
//       idx = parentidx;
//     }
//   }
// //   extractMax(){
// //     const max=this.val[0]
// //     const end=this.val.pop()
// //     this.val[0]=end
// //     return this.val

// //   }
// }
// let li = new maxBinaryTree();
// console.log(li.insert(41));

// console.log(li.insert(39));
// console.log(li.insert(33));
// console.log(li.insert(18));
// console.log(li.insert(27));
// console.log(li.insert(12));
// console.log(li.insert(55));
// // console.log(li.extractMax());

// class HashTable {
//   constructor(size = 53) {
//     this.keyMap = new Array(size);
//   }

//   _hash(key) {
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96;
//       total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//     }
//     return total;
//   }
//   set(key, value) {
//     let index = this._hash(key);
//     if (!this.keyMap[index]) {
//       this.keyMap[index] = [];
//     }
//     this.keyMap[index].push([key, value]);
//     return this.keyMap;
//   }
//   get(key) {
//     let index = this._hash(key);
//     if (this.keyMap[index]) {
//       for (let i = 0; i < this.keyMap[index].length; i++) {
//         if (this.keyMap[index][i][0] === key) {
//           return this.keyMap[index][i][1];
//         }
//       }
//     }
//     return undefined;
//   }
//   values() {
//     let arr = [];
//     for (let i = 0; i < this.keyMap.length; i++) {
//       if (this.keyMap[i]) {
//         // console.log(i)
//         for (let j = 0; j < this.keyMap[i].length; j++) {
//           // console.log(this.keyMap[i].length)
//           arr.push(this.keyMap[i][j][1]);
//           // console.log(j,"j",i,"i");
//         }
//       }
//     }
//     return arr;
//   }
//   keys() {
//     let arr = [];
//     for (let i = 0; i < this.keyMap.length; i++) {
//       if (this.keyMap[i]) {
//         // console.log(i)
//         for (let j = 0; j < this.keyMap[i].length; j++) {
//           // console.log(this.keyMap[i].length)
//           arr.push(this.keyMap[i][j][0]);
//           // console.log(j,"j",i,"i");
//         }
//       }
//     }
//     return arr;
// }
// }
// let ht = new HashTable(17);
// console.log(ht.set("maroon", "#800000"));
// console.log(ht.set("yellow", "#FFFF00"));
// console.log(ht.set("olive", "#808000"));
// console.log(ht.set("salmon", "#FA8072"));
// console.log(ht.set("lightcoral", "#F08080"));
// console.log(ht.set("mediumvioletred", "#C71585"));
// console.log(ht.set("plum", "#DDA0DD"));
// console.log(ht.set("purple", "#DDA0DD"));
// console.log(ht.set("violet", "#DDA0DD"));
// console.log(ht.values());
// console.log(ht.keys());
// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     return this.adjacencyList;
//   }
//   addEdges(vertex, edge) {
//     if (this.adjacencyList[vertex] || this.adjacencyList[edge]) {
//       this.adjacencyList[vertex].push(edge);

//       this.adjacencyList[edge].push(vertex);
//     }
//     return this.adjacencyList;
//   }

//   removeEdge(index, vertex) {
//     this.adjacencyList[index] = this.adjacencyList[index].filter(
//       (v1) => v1 !== vertex
//     );
//     this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
//       (v1) => v1 !== index
//     );
//     return this.adjacencyList;
//   }
//   removeVertex(index) {
//     while (this.adjacencyList[index].length) {
//       let newAdjacencyList = this.adjacencyList[index].pop();
//       this.removeEdge(index,newAdjacencyList)
//     }

//     return this.adjacencyList;
//   }
//   depthFirstRecursive(start){
//     const result = [];
//     const visited = {};
//     const adjacencyList = this.adjacencyList;

//     (function dfs(vertex){
//         if(!vertex) return null;
//         visited[vertex] = true;
//         result.push(vertex);
//         adjacencyList[vertex].forEach(neighbor => {
//             if(!visited[neighbor]){
//                 return dfs(neighbor)
//             }
//         });
//     })(start);

//     return result;
// }
// }

// let li = new Graph();
// console.log(li.addVertex("A"));
// console.log(li.addVertex("B"));
// console.log(li.addVertex("C"));
// console.log(li.addVertex("D"));

// console.log(li.addEdges("A", "C"));
// console.log(li.addEdges("A", "B"));
// console.log(li.addEdges("B", "D"));
// console.log(li.addEdges("D", "C"));
// console.log(li.removeEdge("B", "D"));
// console.log(li.removeVertex("B"));
// console.log(li.depthFirstRecursive("A"));
// while (2) {
//   // console.log("jsssssss")
// }
// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//       return this.adjacencyList;
//     }
//     addEdges(vertex, edge) {
//       if (this.adjacencyList[vertex] || this.adjacencyList[edge]) {
//         this.adjacencyList[vertex].push(edge);

//         this.adjacencyList[edge].push(vertex);
//       }
//       return this.adjacencyList;
//     }

//     removeEdge(index, vertex) {
//       this.adjacencyList[index] = this.adjacencyList[index].filter(
//         (v1) => v1 !== vertex
//       );
//       this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
//         (v1) => v1 !== index
//       );
//       return this.adjacencyList;
//     }
//     removeVertex(index) {
//       while (this.adjacencyList[index].length) {
//         let newAdjacencyList = this.adjacencyList[index].pop();
//         this.removeEdge(index, newAdjacencyList);
//       }

//       return this.adjacencyList;
//     }
//     depthFirstRecursive(start) {
//       const result = [];
//       const visited = {};
//       const adjacencyList = this.adjacencyList;

//       function dfs(vertex) {
//         if (!vertex) return null;
//         visited[vertex] = true;
//         result.push(vertex);
//         adjacencyList[vertex].forEach((neighbor) => {
//           if (!visited[neighbor]) {
//             return dfs(neighbor);
//           }
//         });
//       }
//       dfs(start);

//       return result;
//     }
//     dfsIterative(start) {
//       const result = [];
//       const visited = {};
//       const stack = [start];
//       let currentVal;
//       visited[start] = true;
//       while (stack.length) {
//         currentVal = stack.pop();
//         result.push(currentVal)
//         this.adjacencyList[currentVal].forEach((neighbor) => {
//           if (!visited[neighbor]) {
//             visited[neighbor] = true;
//             stack.push(neighbor);
//           }
//         });
//       }
//       return result;
//     }
//     bfs(start){
//       const result = [];
//       const visited = {};
//       const queue = [start];
//       let currentVal;
//       visited[start] = true;
//       while (queue.length) {
//         currentVal = queue.shift();
//         result.push(currentVal)
//         this.adjacencyList[currentVal].forEach((neighbor) => {
//           if (!visited[neighbor]) {
//             visited[neighbor] = true;
//             queue.push(neighbor);
//           }
//         });
//       }
//       return result;
//     }
//   }

//   let li = new Graph();
//   console.log(li.addVertex("A"));
//   console.log(li.addVertex("B"));
//   console.log(li.addVertex("C"));
//   console.log(li.addVertex("D"));

//   console.log(li.addEdges("A", "C"));
//   console.log(li.addEdges("A", "B"));
//   console.log(li.addEdges("B", "D"));
//   console.log(li.addEdges("D", "C"));
//   //   console.log(li.removeEdge("B", "D"));
//   //   console.log(li.removeVertex("B"));
//   console.log(li.depthFirstRecursive("A"));
//   console.log(li.dfsIterative("A"));
class Priorityqueue {
  constructor() {
    this.value=[];
  }
  enqueue(value,priority) {
    this.value.push({value,priority});
    this.sort()
  }
  dequeue(){
   return this.value.shift()
  }
  sort(){
    this.value.sort((a,b)=>a.priority-b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }
  addEdges(vertex, edge, weight) {
    if (this.adjacencyList[vertex] || this.adjacencyList[edge]) {
      this.adjacencyList[vertex].push({ node: edge, weight: weight });
      this.adjacencyList[edge].push({ node: vertex, weight: weight });
    }
    return this.adjacencyList;
  }
}
let li = new WeightedGraph();
console.log(li.addVertex("A"));
console.log(li.addVertex("B"));
console.log(li.addVertex("C"));
console.log(li.addVertex("D"));

console.log(li.addEdges("A", "C", 11));
console.log(li.addEdges("A", "B", 34));
console.log(li.addEdges("B", "D", 14));
console.log(li.addEdges("D", "C", 4));
