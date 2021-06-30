<template>
  <div class="h-full flex">
    <div class="h-full">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ShopProduct } from '@/models/product';

@Component
export default class Cart extends Vue {
  @Prop({ required: true }) product!: ShopProduct;
}
</script>

<style scoped>
</style>
