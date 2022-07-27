// function Twosum(sum, target, nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       sum = nums[i] + nums[j];
//       if (sum === target) {
//         return [i,j]
//       }
//     }
//   }
// }

// console.log(Twosum(0,6,[3,2,4]))

// function median(nums1, nums2) {
//   sortedArray = nums1.concat(nums2).sort((a, b) => a - b);

//   console.log(sortedArray);
//   if (sortedArray.length % 2 !== 0) {
//     arr = Math.floor(sortedArray.length / 2);
//     return sortedArray[arr];
//   } else {
//     arr = sortedArray.length / 2;
//     console.log(arr);
//     return (sortedArray[arr - 1] + sortedArray[arr]) / 2;
//   }
// }

// console.log(median([1, 2], [3, 4]));

// function containerWater(nums) {
//   let result = 0;
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       result = Math.max(result, Math.min(nums[j], nums[i]) * (j - i));
//     }
    
//   }
//   return result;
// }
// console.log(containerWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// function sum(nums){
//     sorted=nums.sort((a,b)=>a-b)
//     let l=0 
//     let r=nums.length-1
//     while (l<r) {
//         if (nums[l] + nums[r]!==0) {
//             if (nums[l] + nums[r]<0){
//                 l++ 
//             }else{
//                 r--
//             }
//     }else{
//         return [nums[l],nums[r]]
//     }
//     // console.log(sorted);

//     }
// }
// // console.log(sum([-1,0,1,2,-1,-4]));
// class HashTable {
//     constructor(size=53){
//       this.keyMap = new Array(size);
//     }
  
//     _hash(key) {
//       let total = 0;
//       let WEIRD_PRIME = 31;
//       for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//       }
//       return total;
//     }
//     set(key,value){
//       let index = this._hash(key);
//       if(!this.keyMap[index]){
//         this.keyMap[index] = [];
//       }
//       this.keyMap[index].push([key, value]);
//       return this.keyMap
//     }
//     get(key){
//       let index = this._hash(key);
//       if(this.keyMap[index]){
//         for(let i = 0; i < this.keyMap[index].length; i++){
//           if(this.keyMap[index][i][0] === key) {
//             return this.keyMap[index][i][1]
//           }
//         }
//       }
//       return undefined;
//     }
//     keys(){
//       let keysArr = [];
//       for(let i = 0; i < this.keyMap.length; i++){
//         if(this.keyMap[i]){
//           for(let j = 0; j < this.keyMap[i].length; j++){
//             if(!keysArr.includes(this.keyMap[i][j][0])){
//               keysArr.push(this.keyMap[i][j][0])
//             }
//           }
//         }
//       }
//       return keysArr;
//     }
//     values(){
//       let valuesArr = [];
//       for(let i = 0; i < this.keyMap.length; i++){
//         if(this.keyMap[i]){
//           for(let j = 0; j < this.keyMap[i].length; j++){
//             if(!valuesArr.includes(this.keyMap[i][j][1])){
//               valuesArr.push(this.keyMap[i][j][1])
//             }
//           }
//         }
//       }
//       return valuesArr;
//     }
//   }
  
//   let ht = new HashTable(17);
  
//  console.log( ht.set("maroon","#800000")) 
//  console.log(ht.set("yellow","#FFFF00"))  
//  console.log(ht.set("olive","#808000")) 
//  console.log(ht.set("salmon","#FA8072")) 
//  console.log( ht.set("lightcoral","#F08080"))
//  console.log(ht.set("mediumvioletred","#C71585")) 
//  console.log( ht.set("plum","#DDA0DD"))
//  console.log(ht.set("purple","#DDA0DD")) 
//  console.log(ht.set("violet","#DDA0DD")) 
  
  
// //   ht.keys().forEach(function(key){
// //     console.log(ht.get(key));
//   })






arr=[5,4,-1,7,8]

let sum=0
for(var i=0; i<arr.length; i++) {
  for (let  j=i+1; j<arr.length; j++) {
    sum+=arr[i]+arr[j]
console.log(sum)


  }    
}
