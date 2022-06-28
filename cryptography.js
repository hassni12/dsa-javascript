pattern = prompt("PLEASE ENTER TEXT THAT YOU WANT TO ENCRYPT");
input = prompt("enter yes if you want to encrypt your sentence else press any key");
if (input==="yes"||input==="YES") {
  key = [
    [1, -2, 2],
    [-1, 1, 3],
    [1, -1, -4],
  ];
  inverse_Of_Key = [
    [-1, -10, -8],
    [-1, -6, -5],
    [0, -1, -1],
  ];

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
  let encrypted = [];
  for (let i = 0; i < filledArray.length; i++) {
    encrypted[i] = [];
    for (let j = 0; j < key.length; j++) {
      var sum = 0;
      for (let z = 0; z < key.length; z++) {
        sum += filledArray[i][z] * key[z][j];
      }
      encrypted[i][j] = sum;
    }
  }
  console.log(encrypted, "encrypted");
  let decrypted = [];
  for (let i = 0; i < encrypted.length; i++) {
    decrypted[i] = [];
    for (let j = 0; j < inverse_Of_Key.length; j++) {
      let sum = 0;
      for (let z = 0; z < inverse_Of_Key.length; z++) {
        sum += encrypted[i][z] * inverse_Of_Key[z][j];
      }
      decrypted[i][j] = sum;
    }
  }
  console.log(decrypted, "decrypted");
  for (let i = 0; i < decrypted.length; i++) {
    for (let j = 0; j < inverse_Of_Key.length; j++) {
      let result = String.fromCharCode(decrypted[i][j]);
      console.log(result);
    }
  }
} 
