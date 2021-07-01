<template>
  <CartItemList :items="cartProducts" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import CartItemList from '@/components/cart/CartItemList.vue';
import { CartItem } from '@/models/cart-item';

const shop = namespace('shop');

@Component({
  name: 'Cart',
  components: {
    CartItemList,
  },
})
export default class extends Vue {
  @shop.Getter
  cartProducts!: CartItem[];
}
</script>
