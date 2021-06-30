<template>
  <ShopCard class="bg-pink-200 hover:shadow-lg border-2 border-indigo-500 relative">
    <div class="absolute top-2 left-2 text-3xl font-bold text-gray-500">
      {{ productPrice }}
    </div>
    <div class="flex flex-col h-full text-center cursor-pointer" @click="navigateToDetails">
      <img :src="product.image" class="my-auto" :alt="product.name" />
      <div class="mt-auto">
        <h4 class="text-3xl text-gray-500 font-bold my-4">{{ product.name }}</h4>
        <ShopButton
          type="button"
          label="Add to Cart"
          colorClass="bg-green-200"
          hoverClass="hover:bg-green-300"
          @click="addToCart"
        />
      </div>
    </div>
  </ShopCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ShopCard from '@/components/UI/ShopCard.vue';
import ShopButton from '@/components/UI/ShopButton.vue';
import { ShopProduct } from '@/models/product';

@Component({
  components: {
    ShopCard,
    ShopButton,
  },
})
export default class ProductItem extends Vue {
  @Prop() product!: ShopProduct;

  get detailsLink(): string {
    return `/details/${this.product.id}`;
  }

  get productPrice(): string {
    return `$${this.product.price}`;
  }

  navigateToDetails(): void {
    this.$router.push(`${this.detailsLink}`);
  }

  addToCart(e: Event): void {
    e.stopPropagation();

    console.log(this.product);
  }
}
</script>
