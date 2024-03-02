// //Task 1
// const today = new Date();

// // Buat salinan tanggal hari ini, karena dayAgo akan berubah
// let daysAgo = new Date(today);

// // Kurangi 18 hari dari tanggal hari ini
// daysAgo.setDate(today.getDate() - 18);

// const dayString = daysAgo.toLocaleString('id-id', {  weekday: 'long' });
// console.log(dayString);

// Task 2
// Tulislah kode untuk melihat hari dan tanggal lahir seseorang hanya dengan memasukkan umur

const today = new Date();
let age = 26;
let birthDate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate())
let formattedBirthdate = birthdate.toLocaleDateString('en-US', options);

console.log(`Tanggal Lahirmu: ${birthDate}`)
