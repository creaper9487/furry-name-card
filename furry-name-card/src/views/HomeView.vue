<script setup lang="ts">
import { ref } from 'vue'
import Head from '@/components/head.vue'
import Name from '@/components/name.vue'
import Introduction from '@/components/Introduction.vue';
import Tags from '@/components/tags.vue'

const isAnimating = ref(false)

function triggerSurprise() {
  if (isAnimating.value) return
  
  console.log('Surprise triggered! owo')
  isAnimating.value = true
  
  setTimeout(() => {
    isAnimating.value = false
  }, 600) // Animation duration is 0.6s
}
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center ">
    <Head 
      class="m-10 flip-animation transform" 
      :class="{ 'animating': isAnimating }"
      @mouseover="triggerSurprise" 
    />
    <Name class="mb-10"/>
    <Introduction class="text-black"/>
    <Tags></Tags>
  </div>
</template>
<style scoped>
.flip-animation:hover {
  animation: doFlip 0.6s ease-in-out;
}

.flip-animation.animating {
  animation: doFlip 0.6s ease-in-out;
  pointer-events: none; /* Prevent additional hovers during animation */
}

@keyframes doFlip {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
</style>