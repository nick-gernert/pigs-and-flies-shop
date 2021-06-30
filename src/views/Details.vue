<template>
  <ProductDetails />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductDetails from '@/components/details/ProductDetails.vue';

@Component({
  name: 'Details',
  components: {
    ProductDetails,
  },
})
export default class extends Vue {}
</script>

<style scoped>
</style>
