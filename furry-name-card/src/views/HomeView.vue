<script setup lang="ts">
import Head from '@/components/head.vue'
import Name from '@/components/name.vue'
function triggerSurprise() {
  console.log('Surprise triggered! owo')
}
import Introduction from '@/components/Introduction.vue';
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <Head class="m-10 flip-animation transform" @mouseover="triggerSurprise" />
    <Name class="mb-10"/>
    <Introduction class="text-black"/>
  </div>
</template>
<style scoped>
.flip-animation:hover {
  animation: doFlip 0.6s ease-in-out;
}

@keyframes doFlip {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
</style>