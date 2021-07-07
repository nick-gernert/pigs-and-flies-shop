import { mount } from '@vue/test-utils';
import ProductList from '@/components/shop/ProductList.vue';

describe('ProductList.vue', () => {
  it('filters displayProducts when user changes input', () => {
    const products = [{
      id: '1',
      name: 'Guinea Pig',
      description: '',
      price: 100,
    }, {
      id: '2',
      name: 'Butterfly',
      description: '',
      price: 99,
    }];

    const wrapper = mount(ProductList, {
      propsData: { products },
    });

    expect((wrapper.vm as any).displayProducts.length).toBe(2);

    wrapper.setData({ searchText: 'fly' });
    expect((wrapper.vm as any).displayProducts.length).toBe(1);
  });
});
