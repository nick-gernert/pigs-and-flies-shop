<template>
  <ProductList :products="shopProducts" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import ProductList from '@/components/shop/ProductList.vue';
import { ShopProduct } from '@/models/product';

const shop = namespace('shop');

@Component({
  name: 'Shop',
  components: {
    ProductList,
  },
})
export default class Home extends Vue {
  @shop.Getter
  shopProducts!: ShopProduct[];
}
</script>
