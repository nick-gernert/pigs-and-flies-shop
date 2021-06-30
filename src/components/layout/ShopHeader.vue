<template>
  <header class="py-8 flex">
    <div class="mx-auto flex pl-32">
      <img src="../../assets/heart.svg" class="h-16 my-auto" alt="Heart Logo" />
      <span class="text-6xl my-auto mx-4 logo-text">Pigs & Flies</span>
      <img src="../../assets/heart.svg" class="h-16 my-auto" alt="Heart Logo" />
    </div>
    <button
      class="rounded-full bg-red-300 h-16 w-16 flex hover:bg-red-400 cursor-pointer mx-8 my-auto"
    >
      <img src="../../assets/basket.svg" class="h-8 m-auto" alt="basket" />
    </button>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShopHeader extends Vue {

}
</script>

<style scoped>
.logo-text {
  font-family: 'Great Vibes', cursive;
}
</style>
