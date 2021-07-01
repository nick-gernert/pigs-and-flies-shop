<template>
  <ShopCard class="bg-pink-200 border-2 border-indigo-500 my-2">
    <div class="flex">
      <img :src="product.image" class="w-24" :alt="product.name" />
      <div class="my-auto ml-8 w-full flex">
        {{ product.name }}
        <span class="ml-8">
          <ShopCounter
            :count="item.productCount"
            @increment="handleIncrement"
            @decrement="handleDecrement"
          />
        </span>
        <span class="ml-auto">{{ (item.productCount * product.price) | shopCurrency }}</span>
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
