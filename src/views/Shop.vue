<template>
  <section>
    <ProductList :products="products" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductList from '@/components/shop/ProductList.vue';
import { ShopProduct } from '@/models/product';

@Component({
  components: {
    ProductList,
  },
})
export default class Home extends Vue {
  products: ShopProduct[] = [];

  async created(): Promise<void> {
    const response = await fetch('/assets/products.json');
    this.products = await response.json();
  }
}
</script>
