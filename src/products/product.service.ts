import { Product } from './product.model'

export const product: Product[] = [];

export const addProduct = (product: Product) => {
  product.push(product);
}

export const calculateTotal = (products: Product[]) => {
  return products.reduce((acc, product) => acc + product.price, 0);
}
