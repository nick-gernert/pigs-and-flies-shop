<template>
  <button
    :type="type"
    class="
      p-2 block w-full text-lg bg-gradient-to-tr rounded from-pink-300 via-purple-300 to-indigo-400
      hover:text-gray-500 hover:shadow-sm
    "
    @click="handleClick"
    :class="[colorClass, hoverClass]">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ShopButton extends Vue {
  @Prop() type!: string;

  @Prop() label!: string;

  @Prop() colorClass!: string;

  @Prop() hoverClass!: string;

  handleClick(e: Event):void {
    this.$emit('click', e);
  }
}
</script>
