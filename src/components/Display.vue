<template>
  <section v-if="storeCatalog.errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="storeCatalog.loading">Loading...</div>
    <display-list :recipeList="storeCatalog.recipes"></display-list>
  </section>
</template>

<script setup>
import DisplayList from '@/components/DisplayList.vue';
import { onMounted } from 'vue';
import {useCatalogStore} from "@/stores/catalog";

const storeCatalog = useCatalogStore();
onMounted(storeCatalog.requestRecipes);
</script>

<style scoped></style>
