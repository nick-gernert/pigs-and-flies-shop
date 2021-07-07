import ShopModule, { ShopState } from '@/store/modules/shop';
import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import * as MutationTypes from '@/store/mutation-types';

const PRODUCT = {
  id: '1',
  name: 'Guinea Pig',
  description: '',
  price: 100,
  image: '',
};

const CART_ITEMS = [{
  productCount: 1,
  product: PRODUCT,
}];

describe('mutations', () => {
  let store: Store<{ shop: ShopState }>;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store({ modules: { shop: ShopModule } });
  });

  it('should add item to cart', () => {
    store.commit(`shop/${MutationTypes.ADD_TO_CART}`, PRODUCT);
    expect(store.state.shop.cartItems).toStrictEqual(CART_ITEMS);
  });
});
