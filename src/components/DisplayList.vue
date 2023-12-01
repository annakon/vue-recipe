<template>
  <RecipeItem v-for="item in props.recipeList" :key="item.id" :recipe="item"> </RecipeItem>
</template>

<script setup>
import RecipeItem from '@/components/RecipeItem.vue';

const props = defineProps(['recipeList']);
</script>

<style scoped></style>
