<template>
  <div class="flex text-gray-500 text-3xl">
    <h3 class="great-vibes my-auto mr-4">
      <slot />
    </h3>
    <img src="../../assets/heart.svg" class="h-16 my-auto" alt="Heart Logo" />
    <div class="ml-auto my-auto">
      <slot name="price" />
    </div>
  </div>
</template>
