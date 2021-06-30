<template>
  <div class="flex">
    <div class="w-1/2 flex">
      <img :src="product.image" class="m-auto w-1/2" :alt="product.name" />
    </div>
    <div class="flex w-1/2">
      <ShopCard class="m-auto bg-pink-200 border-2 border-indigo-500">
        <ShopCardTitle>
          {{ product.name }}
          <template #price>
            {{ product.price | shopCurrency }}
          </template>
        </ShopCardTitle>
        <p class="max-w-xl my-8">{{ product.description }}</p>
        <button class="p-2 text-lg cursor-pointer bg-blue-200 text-right">
          Add to Cart
        </button>
        <!-- <ShopButton
          type="button"
          label="Add to Cart"
          colorClass="bg-green-200"
          hoverClass="hover:bg-green-300"
          @click="addToCart"
        /> -->
      </ShopCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopCard from '@/components/UI/ShopCard.vue';
import ShopCardTitle from '@/components/UI/ShopCardTitle.vue';
import ShopButton from '@/components/UI/ShopButton.vue';

const PRODUCT = {
  id: '1',
  name: 'Beautiful Butterfly',
  price: 10,
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veritatis necessitatibus distinctio rerum totam ad fugit voluptate eligendi. Eaque laboriosam animi sed. Ut sapiente est, corrupti alias debitis voluptate amet.',
  image: '/img/butterfly.svg',
};

@Component({
  name: 'ProductDetails',
  components: {
    ShopCard,
    ShopCardTitle,
    ShopButton,
  },
})
export default class ProductDetails extends Vue {
  product = PRODUCT;
}
</script>

<style scoped>
</style>
