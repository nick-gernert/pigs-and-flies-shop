<template>
  <main id="app" class="bg-indigo-200 h-screen flex flex-col">
    <ShopHeader />
    <router-view />
    <ShopFooter class="mt-auto" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '@/components/layout/ShopHeader.vue';
import ShopFooter from '@/components/layout/ShopFooter.vue';

@Component({
  components: {
    ShopHeader,
    ShopFooter,
  },
})
export default class extends Vue {}
</script>
