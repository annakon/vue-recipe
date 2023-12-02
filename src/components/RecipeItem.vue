<template>
        <div class="border shadow-lg mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-md lg:px-8">
          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-72 lg:w-72">
            <img :src="props.recipe.recipe.image" alt="Front of men&#039;s Basic Tee in black." class="hover:scale-125 h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="p-5 sm:w-72">
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
