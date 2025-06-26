<script setup lang="ts">
import Head from '@/components/head.vue'
import Name from '@/components/name.vue'
function triggerSurprise() {
  console.log('Surprise triggered! owo')
}
</script>

<template>
  <div class="fixed inset-0 flex flex-col justify-center items-center">
    <Head class="m-10 hover:active transform" @mouseover="triggerSurprise" />
    <Name class=""/>
  </div>
</template>
<style scoped>
.active{

}
</style>