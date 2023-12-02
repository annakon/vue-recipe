<template>
        <div class="border shadow-lg">
          <div class="overflow-hidden">
            <img :src="props.recipe.recipe.image" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="p-5">
             <h2 class="text-2xl truncate font-extrabold">
                  {{ props.recipe.recipe.label }}
             </h2>
             <button class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">
               See Recipe
             </button>
          </div>
        </div>
</template>

<script setup>
const props = defineProps(['recipe']);
</script>

<style scoped>

</style>
