<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="bg-[url('src/assets/conscious-design-3D43SBDDkAc-unsplash.jpg')] bg-left bg-cover grid grid-rows-2">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
      </nav>
      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg space-y-6">
        <div class="space-y-4">
          <label>Name or ingredients</label>
          <input/>
        </div>
        <div class="space-y-4">
          <label>Category</label>
          <select>
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
