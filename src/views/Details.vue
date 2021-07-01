<template>
  <ProductDetails :product="product" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductDetails from '@/components/details/ProductDetails.vue';
import { ShopProduct } from '@/models/product';

@Component({
  name: 'Details',
  components: {
    ProductDetails,
  },
})
export default class extends Vue {
  product: ShopProduct = {
    id: '1',
    name: 'tem',
    description: '',
    price: 0,
    image: '',
  };

  async created(): Promise<void> {
    const response = await fetch('/assets/products.json');
    const products = await response.json();

    const { id } = this.$route.params;

    this.product = products.find((val: ShopProduct) => val.id === id);
  }
}
</script>
