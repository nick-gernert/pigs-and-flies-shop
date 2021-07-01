<template>
  <main id="app" class="bg-indigo-200 min-h-screen flex flex-col">
    <ShopHeader />
    <router-view />
    <ShopFooter class="mt-auto" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '@/components/layout/ShopHeader.vue';
import ShopFooter from '@/components/layout/ShopFooter.vue';
import { namespace } from 'vuex-class';

const shop = namespace('shop');

@Component({
  components: {
    ShopHeader,
    ShopFooter,
  },
})
export default class extends Vue {
  @shop.Action
  loadProducts!: () => void;

  created(): void {
    console.log('creating!');
    this.loadProducts();
  }
}
</script>
