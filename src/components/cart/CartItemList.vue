<template>
  <div class="h-full flex flex-col container md:w-1/2 mx-auto">
    <div class="text-3xl mx-auto my-4" v-if="cartTitle">{{ cartTitle }}</div>
    <div v-if="items.length > 0">
      <CartCard v-for="item in items" :key="item.product.id" :item="item" />
    </div>
    <div class="text-center my-8" v-else>
      <span class="text-3xl text-gray-500">No items in cart!</span>
    </div>
    <div class="my-8 ml-auto mr-4 text-3xl text-gray-500" v-if="totalPrice > 0">
      Total: {{ totalPrice | shopCurrency }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CartItem } from '@/models/cart-item';
import CartCard from './CartCard.vue';

@Component({
  name: 'CartItemList',
  components: {
    CartCard,
  },
})
export default class CartItemList extends Vue {
  @Prop({ required: true, type: Array }) items!: CartItem[];

  @Prop() cartTitle!: string;

  get totalPrice(): number {
    return this.items.reduce(
      (accumulator, value): number => accumulator + value.product.price * value.productCount,
      0,
    );
  }
}
</script>
