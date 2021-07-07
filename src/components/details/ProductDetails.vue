<template>
  <div class="flex flex-col md:flex-row my-auto" v-if="product">
    <div class="md:w-1/2 flex">
      <img :src="product.image" class="m-auto w-1/2" :alt="product.name" />
    </div>
    <div class="flex md:w-1/2 m-4">
      <ShopCard class="m-auto bg-pink-200 border-2 border-indigo-500">
        <ShopCardTitle>
          {{ product.name }}
          <template #price>
            {{ product.price | shopCurrency }}
          </template>
        </ShopCardTitle>
        <p class="max-w-xl my-8">{{ product.description }}</p>
        <ShopButton
          type="button"
          label="Add to Cart"
          @click="handleAddToCart"
        />
      </ShopCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import ShopCard from '@/components/UI/ShopCard.vue';
import ShopCardTitle from '@/components/UI/ShopCardTitle.vue';
import ShopButton from '@/components/UI/ShopButton.vue';
import { ShopProduct } from '@/models/product';

const shop = namespace('shop');

@Component({
  name: 'ProductDetails',
  components: {
    ShopCard,
    ShopCardTitle,
    ShopButton,
  },
})
export default class ProductDetails extends Vue {
  @Prop() product!: ShopProduct;

  @shop.Action
  addToCart!: (product: ShopProduct) => void;

  handleAddToCart(e: Event): void {
    e.stopPropagation();

    this.addToCart(this.product);
  }
}
</script>
