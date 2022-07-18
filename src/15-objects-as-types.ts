(() => {
  type Product = {
    name: string;
    price: number;
    stock: number;
    size?: number;
  };

  const products: Product[] = [];

  const addProduct = (product: Product) => {
    products.push(product);
  };

  addProduct({ name: 'Product 1', price: 10, stock: 10 });

})();
