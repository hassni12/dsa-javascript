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
