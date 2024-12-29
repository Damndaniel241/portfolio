<script setup lang="ts">

import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { nextTick } from "vue"


const currentBackgroundColor = ref("#ece7e1"); // Default background color
const currentTextColor = ref("#222222"); // Default text color

const route = useRoute();

// Watch the route to update colors
watch(
  () => route.path,
  async (newPath) => {

    await nextTick();
    // Define background and text colors for different routes
    const routeStyles:any = {
      "/": { backgroundColor: "#ece7e1", textColor: "#222222" },
      "/about": { backgroundColor: "#ece7e1", textColor: "#222222" },
      "/contact": { backgroundColor: "#222222", textColor: "#ece7e1" },
      "/articles": { backgroundColor: "#222222", textColor: "#ece7e1" },
      "/work": { backgroundColor: "#222222", textColor: "#ece7e1" },
    };
// Update the colors based on the route or fallback to defaults
const style = routeStyles[newPath];
    currentBackgroundColor.value = style.backgroundColor;
    currentTextColor.value = style.textColor;
  },
  { immediate: true } // Trigger immediately for initial load
);
// import { motion } from '@vueuse/motion';


</script>

<template>
  <!-- <div :style="{ backgroundColor: currentBackgroundColor , color: currentTextColor }"> -->
<RouterView />
<!-- </div> -->
     

</template>