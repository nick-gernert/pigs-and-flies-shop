import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
// eslint-disable-next-line import/no-cycle
import { ShopProduct } from '@/models/product';
import { CartItem } from '@/models/cart-item';
import * as mutationTypes from '../mutation-types';

export interface ShopState {
  products: ShopProduct[];
  cartItems: CartItem[];
}

@Module({
  namespaced: true,
})
export default class ShopModule extends VuexModule implements ShopState {
  products: ShopProduct[] = [];

  cartItems: CartItem[] = [];

  @Mutation
  private [mutationTypes.LOAD_PRODUCTS](products: ShopProduct[]): void {
    this.products = [...products];
  }

  @Mutation
  private [mutationTypes.ADD_TO_CART](product: ShopProduct): void {
    const index = this.cartItems.findIndex((value) => value.product.id === product.id);
    if (index !== -1) {
      this.cartItems[index].productCount += 1;
    } else {
      this.cartItems = [...this.cartItems, { productCount: 1, product }];
    }
  }

  @Mutation
  private [mutationTypes.REMOVE_FROM_CART](product: ShopProduct): void {
    const index = this.cartItems.findIndex((value) => value.product.id === product.id);

    if (this.cartItems[index].productCount === 1) {
      this.cartItems = this.cartItems.splice(index, 1);
    } else {
      this.cartItems[index].productCount -= 1;
    }
  }

  @Action
  public async loadProducts(): Promise<void> {
    const response = await fetch('/assets/products.json');
    const products = await response.json();
    this.context.commit(mutationTypes.LOAD_PRODUCTS, products);
  }

  @Action
  public addToCart(product: ShopProduct): void {
    this.context.commit(mutationTypes.ADD_TO_CART, product);
  }

  @Action
  public removeFromCart(product: ShopProduct): void {
    this.context.commit(mutationTypes.REMOVE_FROM_CART, product);
  }

  get shopProducts(): ShopProduct[] {
    return this.products;
  }

  get cartProducts(): CartItem[] {
    return this.cartItems;
  }

  get totalItemsInCart(): number {
    return this.cartItems.reduce(
      (accumulator, value): number => accumulator + value.productCount,
      0,
    );
  }
}
