<script setup lang="ts">
const intrestPoints = [
    {name: 'Coding', icon: 'code', color: '#4CAF50'},
    {name: 'Gaming', icon: 'gamepad', color: '#FFC107'},
    {name: 'Music', icon: 'headphones', color: '#2196F3'},
]
import { useWindowStore } from '@/stores/windowStore';
import interestStuff from '@/components/interestStuff.vue';
const windowStore = useWindowStore();

const sampleDescription = `
# About Me

Hello! I'm a **furry enthusiast** who loves *coding* and *gaming*. 

Here's what I enjoy:
- Creating amazing projects with \`Vue.js\` and \`TypeScript\`
- Playing video games with friends
- Listening to music while coding

![Furry Avatar](https://via.placeholder.com/300x200?text=Furry+Avatar)

Check out my [GitHub profile](https://github.com) for more projects!

**Fun fact:** I can code for hours with just coffee and good music! ☕🎵
`;

</script>
<template>
  <div class="flex flex-wrap gap-2">
    <div
      v-for="point in intrestPoints"
      :key="point.name"
      class="flex items-center space-x-2 bg-slate-300 p-2 rounded-lg my-4"
    >
      <span
        class="material-icons"
        :style="{ color: point.color }"
      >{{ point.icon }}</span>
      <span>{{ point.name }}</span>
    </div>
    <button 
      @click="windowStore.toggleDescription()"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      {{ windowStore.descriptionOpen ? 'Hide' : 'Show' }} Description
    </button>
    <interestStuff v-if="windowStore.descriptionOpen" :description="sampleDescription" />
  </div>
</template>