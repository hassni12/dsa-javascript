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

function maxsum(arr,num){
    max=0
    for(let i=0; i<=arr.length-1;  i++){
        // console.log(i<arr.length-num+1,"i")
        console.log(i)
        temp=0
        for(let j=0; j<num; j++){
            temp+=arr[i+j]
        }
        if(temp>max){
            max=temp
        }
        // console.log(temp,max);
    }
    return max 
}
console.log(maxsum([1,2,5,2,8,1,5],3));


