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
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};  

const age = 26;
const birthDate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate());
const formattedBirthdate = birthDate.toLocaleDateString('id-id', options);

console.log(`Tanggal Lahirmu adalah ${formattedBirthdate}`);