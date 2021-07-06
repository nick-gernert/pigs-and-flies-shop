import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/shop/ProductList.vue';

describe('ProductList.vue', () => {
  it('renders props.products when passed', () => {
    const products = [{
      id: '1',
      name: 'Guinea Pig',
      description: '',
      price: 100,
    }];
    const wrapper = shallowMount(ProductList, {
      propsData: { products },
    });
    // expect(wrapper.).toMatch(products);
  });
});
