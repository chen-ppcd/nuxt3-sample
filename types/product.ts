export type Product = {
  title: string;
  description: string;
  price: number;
  image: string;
  id?: number
}

export type Products = {
  data: Array<Product>
}