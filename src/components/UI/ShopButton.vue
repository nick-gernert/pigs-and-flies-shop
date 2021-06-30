<template>
  <button
    :type="type"
    class="p-2 block w-full text-lg cursor-pointer"
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
