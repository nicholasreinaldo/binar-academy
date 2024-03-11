/* Buatlah sebuah fungsi yang menerima 1 parameter yang berupa angka. 
Fungsi tersebut akan mengecek apakah nilai yang dimasukkan itu merupakan 
bilang ganjil atau genap. Jika ganji maka akan mengeluarkan nilai "ganjil" 
kalua genap maka akan mengeluarkan nilai "genap" */


const hitungGanjilGenap = (x) => {if (x % 2 === 1){ 
return "Ganjil";
} return "Genap";
}

console.log(hitungGanjilGenap(5))
