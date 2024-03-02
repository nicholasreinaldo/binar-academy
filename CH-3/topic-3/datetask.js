// Dapatkan tanggal hari ini. Kalau semisalnya ada yg berubah pakai let
// const kalau tidak berubah
const today = new Date();

// Buat salinan tanggal hari ini, karena dayAgo akan berubah
let daysAgo = new Date(today);

// Kurangi 18 hari dari tanggal hari ini
daysAgo.setDate(today.getDate() - 18);

const dayString = daysAgo.toLocaleString('id-id', {  weekday: 'long' });
console.log(dayString);