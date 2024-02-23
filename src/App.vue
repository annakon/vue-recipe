<template>
  <header>
    <div class="bg-[url('src/assets/conscious-design-IMMHJRp4dcM-unsplash.jpg')] bg-center bg-cover grid">
      <div class="container mx-auto py-5 px-16">
        <nav class="justify-end flex gap-4 text-white">
          <RouterLink :class='{"text-orange-500":route.name==="home"}' class="uppercase font-bold" to="/">Home</RouterLink>
          <RouterLink :class='{"text-orange-500":route.name==="favorites"}' class="uppercase font-bold" to="/favorites">Favorites</RouterLink>
        </nav>
        <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 p-10 rounded-lg space-y-6" onsubmit="return false">
          <div class="space-y-4">
            <label class="block text-white uppercase font-extrabold text-lg">Name or ingredients</label>
            <input placeholder="Name or ingredient: eg. chicken, egg, etc.." type="text"
                   class="p-3 w-full rounded-lg focus:outline-none" v-model="queryStr"/>
          </div>
          <div class="space-y-4">
            <label class="block text-white uppercase font-extrabold text-lg">Category</label>
            <select class="p-3 w-full rounded-lg focus:outline-none" v-model="typeDish">
              <option>--Select--</option>
              <option value="Biscuits and cookies"> Biscuits and cookies  </option>
              <option value="Bread"> Bread  </option>
              <option value="Cereals"> Cereals  </option>
              <option value="Condiments and sauces"> Condiments and sauces  </option>
              <option value="Desserts"> Desserts  </option>
              <option value="Drinks"> Drinks  </option>
              <option value="Main course"> Main course  </option>
              <option value="Pancake"> Pancake  </option>
              <option value="Preps"> Preps  </option>
              <option value="Preserve"> Preserve  </option>
              <option value="Salad"> Salad  </option>
              <option value="Sandwiches"> Sandwiches  </option>
              <option value="Side dish"> Side dish  </option>
              <option value="Soup"> Soup  </option>
              <option value="Starter"> Starter  </option>
              <option value="Sweets"> Sweets  </option>
            </select>
          </div>
          <button
              class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
              @click="doQuery">
            Search Recipes
          </button>
        </form>
      </div>
    </div>
  </header>
  <RouterView/>
</template>

<script setup>
function doQuery() {
  storeCatalog.requestRecipes(queryStr,typeDish)
}

import {RouterLink, RouterView, useRoute} from 'vue-router'
const route = useRoute()
import {useCatalogStore} from "@/stores/catalog";
import {ref} from "vue";
const queryStr=ref('');
const typeDish=ref('');
const storeCatalog = useCatalogStore();
</script>

<style scoped>

</style>
