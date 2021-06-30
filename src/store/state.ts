import { ShopProduct } from '@/models/product';
import { CartItem } from '@/models/cart-item';

export interface State {
  products: ShopProduct[],
  cart: CartItem[],
}
