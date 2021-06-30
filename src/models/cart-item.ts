import { ShopProduct } from './product';

export interface CartItem {
  product: ShopProduct;
  productCount: number;
}
