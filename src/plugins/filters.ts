import { VueConstructor } from 'vue/types/umd.d';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('shopCurrency', (value: string) => `$${value}`);
  },
};
