const CryptoJS = require('crypto-js');
// const encrypt = (text) => {
//   return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
// };

// var he=encrypt(2);
// console.log("ENCRYPT VALUE : ",he);

// const decrypt = (data) => {
//   return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
// };

// var de=decrypt("Mg======12345");
// console.log("DECRYPT VALUE : ",de);




//using secret key

// Encrypt

const encryptedText= (input)=>{
  return CryptoJS.AES.encrypt(input, 'V6JltrwUisW6BNhg03IgpRxjxBncj0YU').toString();
}

const deCryptedText= (input)=>{
  return CryptoJS.AES.decrypt(input, 'V6JltrwUisW6BNhg03IgpRxjxBncj0YU').toString(CryptoJS.enc.Utf8);
}

// var ciphertext = CryptoJS.AES.encrypt("1", 'V6JltrwUisW6BNhg03IgpRxjxBncj0YU').toString();
console.log(encryptedText("anupahlawat@gmail.com"))
var test1=encryptedText("anupahlawat");
var test2=encryptedText("2");
var test3=encryptedText("3");

var test4=encryptedText("4");
var test5=encryptedText("5");



console.log(deCryptedText(test1))
console.log(deCryptedText(test2))
console.log(deCryptedText(test3))
console.log(deCryptedText(test4))
console.log(deCryptedText(test5))


// console.log(ciphertext);
// var bytes  = CryptoJS.AES.decrypt("U2FsdGVkX19m8RAvi91bOVTEQZUP+jfHRyNetNDaVSY=", 'V6JltrwUisW6BNhg03IgpRxjxBncj0YU');
// Decrypt
// var bytes  = CryptoJS.AES.decrypt("U2FsdGVkX19m8RAvi91bOVTEQzUP+jfHRyNetNDaVSY=", 'V6JltrwUisW6BNhg03IgpRxjxBncj0YU');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText); // 'my message'


// //if in terms of json



// var data = [{id: 1}, {id: 2}]

// Encrypt
// var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// console.log(decryptedData); // [{id: 1}, {id: 2}]
