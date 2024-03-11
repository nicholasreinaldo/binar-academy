z5 = "5000" < "10000";

// String pada javascript dibandingkan dengan urutan huruf, 
// karena 5 adalah setelah 1 (1,2,3,4,5), maka 5 lebih besar 
// daripada 1.

// Maka dari itu "5000" < "10000" adalah false karena 2 
// lebih besar daripada 1


// dont use else keyword

function buyHouse(balance) {
	const housePrice = 30000000;
  if (balance >= housePrice) {
  	return "Gaspol"
  } 
  	return "Sabar ya"
}

console.log(buyHouse(10000000))

// di bagian If, meski tidak pakai === true, 
// dia otomatis bisa cek apakah true / tidak
let isShoppingDone = false;
let childsAllowance;

if (isShoppingDone) {
childsAllowance = 10;
} else {childsAllowance =5;
}

console.log(childsAllowance)
