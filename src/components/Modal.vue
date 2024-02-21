<template>
<transition name="modal-animation">
 <div v-show="modalActive" class="modal">
   <transition name="modal-animation-inner">
     <div v-show="modalActive" class="modal-inner">
       <i class="fa fa-times-circle" aria-hidden="true"></i>
       <slot/>
       <button @click="close" type="button">Close</button>
     </div>
   </transition>
 </div>
</transition>
</template>

<script setup>
const props = defineProps(['modalActive']);
const emit = defineEmits(['close'])
const close= ()=> {
  emit('close');
}
</script>

<style scoped>
 .modal {
   height: 100vh;
   width: 100vw;
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(255,255,255,0.7);
 }
 .modal-inner {
   position: relative;
   max-width: 640px;
   width: 80%;
   background-color: white;
   padding: 64px 16px;
 }

</style>

<style lang="scss" scoped>
 .modal-animation-enter-active,.modal-animation-leave-active {
  transition: opacity .3s cubic-bezier(.52,0.02,.19,1.02);
}
 .modal-animation-enter-from {
   opacity: 0;
 }
 .modal-animation-enter-to {
   opacity: 1;
 }
 .modal-animation-leave-from {
   opacity: 1;
 }
 .modal-animation-leave-to {
   opacity: 0;
 }
</style>
