<template>
  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    <RecipeItem v-for="item in props.recipeList" :key="item.id" :recipe="item"> </RecipeItem>
  </div>
</template>

<script setup>
import RecipeItem from '@/components/RecipeItem.vue';

const props = defineProps(['recipeList']);
</script>

<style scoped></style>
