<template>
  <header class="py-8 flex">
    <div class="mx-auto flex cursor-pointer" @click="navigateToHome">
      <img src="../../assets/heart.svg" class="h-16 my-auto ml-32" alt="Heart Logo" />
      <span class="text-6xl my-auto mx-4 great-vibes">Pigs & Flies</span>
      <img src="../../assets/heart.svg" class="h-16 my-auto" alt="Heart Logo" />
    </div>
    <router-link
      to="/cart"
      class="rounded-full bg-red-300 h-16 w-16 flex hover:bg-red-400 cursor-pointer mx-8 my-auto">
      <img src="../../assets/basket.svg" class="h-8 m-auto" alt="basket" />
    </router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShopHeader extends Vue {
  navigateToHome(): void {
    this.$router.push('/').catch((err) => err);
  }
}
</script>
