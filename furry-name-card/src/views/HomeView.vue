<script setup lang="ts">
import Head from '@/components/head.vue'
import Name from '@/components/name.vue'
function triggerSurprise() {
  console.log('Surprise triggered! owo')
}import Introduction from '@/components/Introduction.vue';
</script>

<template>
  <div class="fixed inset-0 flex flex-col justify-center items-center">
    <Head class="m-10 hover:active transform" @mouseover="triggerSurprise" />
    <Name class=""/>
  <div class="w-screen h-screen flex justify-center items-center">
      <Introduction class="text-black"/>
  </div>
</template>
<style scoped>
.active{

}
</style>