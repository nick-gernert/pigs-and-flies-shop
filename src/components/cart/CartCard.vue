<template>
  <ShopCard class="bg-pink-200 border-2 border-indigo-500 my-2 mx-4">
    <div class="flex">
      <img :src="product.image" class="w-16 md:w-24" :alt="product.name" />
      <div class="my-auto ml-8 w-full flex flex-col md:flex-row text-3xl text-gray-500">
        <span class="great-vibes">{{ product.name }}</span>
        <span class="mx-auto my-4 md:my-auto md:ml-8">
          <ShopCounter
            :count="item.productCount"
            @increment="handleIncrement"
            @decrement="handleDecrement"
          />
        </span>
        <span class="mx-auto md:ml-auto">
          {{ (item.productCount * product.price) | shopCurrency }}
        </span>
      </div>
    </div>
  </ShopCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import ShopCard from '@/components/UI/ShopCard.vue';
import ShopCounter from '@/components/UI/ShopCounter.vue';
import { CartItem } from '@/models/cart-item';
import { ShopProduct } from '@/models/product';

const shop = namespace('shop');

@Component({
  name: 'CartCard',
  components: {
    ShopCard,
    ShopCounter,
  },
})
export default class extends Vue {
  @Prop({ required: true }) item!: CartItem;

  @shop.Action
  addToCart!: (product: ShopProduct) => void;

  @shop.Action
  removeFromCart!: (product: ShopProduct) => void;

  get product(): ShopProduct {
    return this.item.product;
  }

  handleIncrement(): void {
    this.addToCart(this.product);
  }

  handleDecrement(): void {
    this.removeFromCart(this.product);
  }
}
</script>
