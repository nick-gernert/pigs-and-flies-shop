<template>
  <div class="container mx-auto my-4 flex flex-col flex-grow">
    <div class="flex relative md:w-1/3 my-8 mx-4 md:mx-auto">
      <input
        ref="searchInput"
        class="p-2 text-xl rounded w-full flex-grow"
        type="text"
        placeholder="Search"
        v-model="searchText"
      />
      <button
        type="button"
        class="absolute right-0 m-2 text-3xl"
        v-if="searchText"
        @click="clearSearch"
      >
        &times;
      </button>
    </div>
    <div class="my-4 md:my-auto mx-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4"
        v-if="displayProducts.length > 0">
        <ProductItem v-for="product in displayProducts" :key="product.id" :product="product" />
      </div>
      <div class="text-center my-8 text-3xl text-gray-500" v-else>
        No products to display.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Ref,
} from 'vue-property-decorator';
import ProductItem from '@/components/shop/ProductItem.vue';
import { ShopProduct } from '@/models/product';

@Component({
  name: 'ProductList',
  components: {
    ProductItem,
  },
})
export default class ProductList extends Vue {
  @Prop({ type: Array }) products!: ShopProduct[];

  @Ref('searchInput') readonly searchInput!: HTMLFormElement;

  searchText = '';

  get displayProducts(): ShopProduct[] {
    return this.products.filter((val) => val.name
      .toLowerCase()
      .includes(this.searchText.toLowerCase()));
  }

  clearSearch(): void {
    this.searchText = '';
    this.searchInput.focus();
  }
}
</script>
