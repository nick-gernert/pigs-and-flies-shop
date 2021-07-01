<template>
  <div class="container mx-auto flex flex-col h-full">
    <div class="text-center my-8">
      <input
        class="p-2 text-xl w-1/4 rounded"
        type="text"
        placeholder="Search"
        v-model="searchText" />
    </div>
    <div class="my-auto">
      <div class="grid grid-cols-4 gap-4">
        <ProductItem v-for="product in displayProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ProductItem from '@/components/shop/ProductItem.vue';
import { ShopProduct } from '@/models/product';

@Component({
  name: 'ProductList',
  components: {
    ProductItem,
  },
})
export default class ProductList extends Vue {
  @Prop() products!: ShopProduct[];

  searchText = '';

  get displayProducts(): ShopProduct[] {
    return this.products.filter((val) => val.name
      .toLowerCase()
      .includes(this.searchText.toLowerCase()));
  }
}
</script>
