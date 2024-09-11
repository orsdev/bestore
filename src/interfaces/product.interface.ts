export interface IProduct {
  product_id: number;
  name: string;
  description?: string;
  price: number;
  unit: string;
  image: string;
  discount?: number;
  availability?: boolean;
  brand: string;
  category?: string;
  rating?: number;
}
