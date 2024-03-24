function Product (productId,productName, price, quantity) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
  
const productOne = new Product("P001","Product 1", 100, 2);
const productTwo = new Product("P002","Product 2", 200, 1);
const productThree = new Product("P003","Product 3", 1000, 10);

const productList = [productOne,productTwo,productThree]

async function fetchProductData(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const product of productList) {
        if (product.productId === productId) {
          resolve(product);
        }
      }
      reject(`Product not found: Product with ID '${productId}' not found.`);
    }, 1000); 
  });
}
  
async function processProduct(productId) {
  try {
    const productData = await fetchProductData(productId); 
    console.log(productData);   
  } catch (err) {
    console.log(err.toString()); 
  }
}
 
async function calculateTotalValue(products) {
  let totalValue = 0;
  for (const product of products) {
    totalValue += product.price * product.quantity;
  }
  return totalValue;
}

async function applyDiscount(products) {
    for (const product of products) {
        if (product.price >= 500) {
            product.price *= 0.9; 
        }
    }
}

async function processProducts(productIds) {
  for (let eachProductId of productIds) {
    await processProduct(eachProductId);
  }
  const totalValue = await calculateTotalValue(productList);
    console.log("Total inventory value: $" + totalValue);
    if (totalValue > 5000) {
      console.log("Restock Required: Inventory Value exceeds $5000");
    } else {
      console.log("Restock is not Required: Inventory Value is less than $5000.");
    }
    await applyDiscount(productList);
    console.log("Updated product list with discounts applied:", productList);
}

const searchProduct = ["P001", "P002", "P003","P004","P005"];
  
processProducts(searchProduct)
  