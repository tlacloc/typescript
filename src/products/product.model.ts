export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  name: string;
  price: number;
  stock: number;
  size?: Sizes;
}
