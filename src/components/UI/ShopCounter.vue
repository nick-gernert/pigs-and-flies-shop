<template>
  <div class="h-10 w-32">
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      <button
        type="button"
        class="
          bg-gray-300
          text-gray-600
          hover:text-gray-700
          hover:bg-gray-400
          h-full
          w-20
          rounded-l
        "
        @click="handleDecrement"
      >
        <span class="m-auto text-2xl font-thin" v-if="count > 1">−</span>
        <span v-else>
          <img src="../../assets/trash.svg" class="m-auto h-6" alt="trash">
        </span>
      </button>
      <span
        class="
          w-full
          bg-gray-300
          text-md
          flex
          items-center
          justify-center
          text-gray-700
        "
      >
        {{ count }}
      </span>
      <button
        type="button"
        class="
          bg-gray-300
          text-gray-600
          hover:text-gray-700
          hover:bg-gray-400
          h-full
          w-20
          rounded-r
        "
        @click="handleIncrement"
      >
        <span class="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ShopCounter extends Vue {
  @Prop({ required: true, type: Number, default: 0 }) count!: number;

  handleIncrement(): void {
    this.$emit('increment');
  }

  handleDecrement(): void {
    this.$emit('decrement');
  }
}
</script>
