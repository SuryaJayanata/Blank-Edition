export interface Product {
  id: string;
  name: string;
  tag: string;
  category: string;
  price: number;
  originalPrice?: number;
  size: string;
  condition: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PageType = 'home' | 'shop' | 'about' | 'contact';
