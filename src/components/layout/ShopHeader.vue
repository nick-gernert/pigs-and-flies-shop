<template>
  <header class="py-8 flex">
    <div class="mx-auto flex cursor-pointer" @click="navigateToHome">
      <img src="../../assets/heart.svg" class="h-16 my-auto ml-32" alt="Heart Logo" />
      <span class="text-6xl my-auto mx-4 great-vibes">Pigs & Flies</span>
      <img src="../../assets/heart.svg" class="h-16 my-auto" alt="Heart Logo" />
    </div>
    <router-link
      to="/cart"
      class="
        rounded-full bg-pink-300 h-16 w-16 flex hover:bg-pink-400
        cursor-pointer mx-8 my-auto relative">
      <img src="../../assets/basket.svg" class="h-8 m-auto" alt="basket" />
      <span class="rounded-full absolute top-0 right-0 h-5 w-5 flex bg-purple-300">
        <span class="m-auto">{{ totalItemsInCart }}</span>
      </span>
    </router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const shop = namespace('shop');

@Component
export default class ShopHeader extends Vue {
  @shop.Getter
  totalItemsInCart!: number;

  navigateToHome(): void {
    this.$router.push('/').catch((err) => err);
  }
}
</script>
