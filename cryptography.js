function cryptographic(pattern, A, B) {
  let arr = [];
  for (let i = 0; i < pattern.length; i++) {
    arr.push(pattern.charCodeAt(i));
  }
  let arrayChuks = [];
  while (arr.length) arrayChuks.push(arr.splice(0, 3));
  let filledArray = [];
  for (let i = 0; i < arrayChuks.length; i++) {
    if (arrayChuks[i].length !== 3) {
      arrayChuks[i].push(32);
    }
    filledArray.push(arrayChuks[i]);
  }
  console.log(filledArray);
  let res = [];
  for (let i = 0; i < filledArray.length; i++) {
    res[i] = [];
    for (let j = 0; j < A.length; j++) {
      var sum = 0;
      for (let z = 0; z < A.length; z++) {
        sum += filledArray[i][z] * A[z][j];
      }
      res[i][j] = sum;
    }
    // console.log(a1);
  }
  console.log(res,"encrypted");
  let Inverse = [];
  for (let i = 0; i < res.length; i++) {
    Inverse[i] = [];
    for (let j = 0; j < B.length; j++) {
      var sum = 0;
      for (let z = 0; z < B.length; z++) {
        sum += res[i][z] * B[z][j];
      }
      Inverse[i][j] = sum;
    }
    // console.log(a1);
  }
  console.log(Inverse,"decrypted");
  let finalResult=[]
  for (let i = 0; i < Inverse.length; i++) {
   
    for (let j = 0; j < B.length; j++) {
      // console.log(res[i][j])
      //  console.log(finalResult.push(String.fromCharCode(Inverse[i][j]))); 
       console.log(String.fromCharCode(Inverse[i][j]));
    }
  }
// console.log(finalResult);
}
console.log(
  cryptographic("meet me monday", [
    [1, -2, 2],
    [-1, 1, 3],
    [1, -1, -4],
  ],
  [[-1,-10,-8],
  [-1,-6,-5],
  [0,-1,-1]]
  )

);
