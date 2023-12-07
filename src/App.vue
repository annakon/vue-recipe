<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="bg-[url('src/assets/conscious-design-IMMHJRp4dcM-unsplash.jpg')] bg-center bg-cover grid">
      <nav class="text-right">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
      </nav>
      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg space-y-6">
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg">Name or ingredients</label>
          <input placeholder="Name or ingredient: eg. chicken, egg, etc.." type="text" class="p-3 w-full rounded-lg focus:outline-none"/>
        </div>
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg">Category</label>
          <select class="p-3 w-full rounded-lg focus:outline-none">
            <option>--Select--</option>
          </select>
        </div>
      </form>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

</style>
