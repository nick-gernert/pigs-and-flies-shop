<template>
  <ShopCard class="bg-pink-200 hover:shadow-lg border-2 border-indigo-500">
    <div class="flex flex-col h-full text-center cursor-pointer" @click="navigateToDetails">
      <img :src="product.image" class="my-auto" :alt="product.name" />
      <div class="mt-auto">
        <h4 class="text-xl font-bold my-4">{{ product.name }}</h4>
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

  navigateToDetails(): void {
    this.$router.push(`${this.detailsLink}`);
  }

  addToCart(e: Event): void {
    e.stopPropagation();

    console.log(this.product);
  }
}
</script>

<style scoped>
</style>
