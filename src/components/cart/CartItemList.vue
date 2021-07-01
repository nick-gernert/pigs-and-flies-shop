<template>
  <div class="h-full flex flex-col container w-1/2 mx-auto">
    <div v-if="items.length > 0">
      <CartCard v-for="item in items" :key="item.product.id" :item="item" />
    </div>
    <div v-else>
      No items in cart!
    </div>
    <div class="mt-8">

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
  @Prop({ required: true }) items!: CartItem[];
}
</script>

<style scoped>
</style>
