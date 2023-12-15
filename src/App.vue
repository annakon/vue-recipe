<script setup>
import {RouterLink, RouterView, useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
  <header>
    <div class="bg-[url('src/assets/conscious-design-IMMHJRp4dcM-unsplash.jpg')] bg-center bg-cover grid">
      <div class="container mx-auto py-5 px-16">
        <nav class="justify-end flex gap-4 text-white">
          <RouterLink :class='{"text-orange-500":route.name==="home"}' class="uppercase font-bold" to="/">Home</RouterLink>
          <RouterLink :class='{"text-orange-500":route.name==="favorites"}' class="uppercase font-bold" to="/favorites">Favorites</RouterLink>
        </nav>
        <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 p-10 rounded-lg space-y-6">
          <div class="space-y-4">
            <label class="block text-white uppercase font-extrabold text-lg">Name or ingredients</label>
            <input placeholder="Name or ingredient: eg. chicken, egg, etc.." type="text"
                   class="p-3 w-full rounded-lg focus:outline-none"/>
          </div>
          <div class="space-y-4">
            <label class="block text-white uppercase font-extrabold text-lg">Category</label>
            <select class="p-3 w-full rounded-lg focus:outline-none">
              <option>--Select--</option>
            </select>
          </div>
          <button
              class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase">
            Search Recipes
          </button>
        </form>
      </div>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

</style>
