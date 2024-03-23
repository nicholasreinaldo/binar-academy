function Product (productId,productName, price, quantity) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
  
  const productOne = new Product("P001","Product 1", 100, 2);
  const productTwo = new Product("P002","Product 2", 200, 1);
  
  const productList = [productOne,productTwo]
  
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
  
  async function processProducts(productIds) {
    for (let eachProductId of productIds) {
      await processProduct(eachProductId);
    }
  }
  
  const searchProduct = ["P001", "P002", "P003"];
  
  processProducts(searchProduct)
  