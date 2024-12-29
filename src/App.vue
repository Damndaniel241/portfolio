<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { motion } from '@vueuse/motion';

// Access the current route
const route = useRoute();
// Dynamically compute the background color based on route meta
const currentBackgroundColor = computed(() => route.meta.backgroundColor || "#ece7e1");
</script>

<template>
  
<RouterView />
     

</template>