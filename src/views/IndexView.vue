<script setup lang="ts">
// import { onMounted,onUnmounted } from 'vue';
const currentYear = new Date().getFullYear();

// onMounted(()=>{
// document.body.style.backgroundColor = '#ece7e1 !important';
// document.body.style.color = '#222222 !important';
// });

// onUnmounted(()=>{
//   document.body.style.backgroundColor = null;
//   document.body.style.color = null;
// });
</script>

<template>

    <!-- desktop view -->
  <div class="hidden h-screen lg:flex selection:bg-[#222222] selection:text-[#ECE7E1]">
    <div id="sidebar" class="lg:flex flex-col items-center justify-between py-6 w-[4rem] hidden">
      <div id="links" class="flex flex-col items-center gap-4">
        <a
          class="relative group transform -rotate-90 text-[0.6em] tracking-wider"
          href="https://www.linkedin.com/in/daniel-ebere-3a6642228/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3zuk32aKQhKRq0OwsV0T4w%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Li
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </a>
        <a
          class="relative group transform -rotate-90 text-[0.6em] tracking-wider"
          href="https://www.instagram.com/eberedaniel241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IN
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </a>
        <a
          class="relative group transform -rotate-90 text-[0.6em] tracking-wider"
          href="https://github.com/Damndaniel241"
          target="_blank"
          rel="noopener noreferrer"
        >
          GH
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </a>
      </div>
      <div class="h-20 w-[1px] bg-[#222222]" />
      <span class="transform -rotate-90 text-sm tracking-wider">&copy;{{ currentYear }}</span>
    </div>

    <div class="lg:flex  px-12 py-6">
    <div class=" flex flex-col justify-end w-1/3 pr-12 mx-[4.188em]" >
      <div class="flex flex-col  gap-[1.2em]">
        <p
          class="m-0 uppercase text-[0.938rem] tracking-widest text-[#222222] font-semibold"
        >
          daniel ebere
        </p>
        <p class="m-0 text-[0.813rem]">
        Software Developer / Writer / Artist
        </p>
        <p class="m-0 text-[0.813rem]">
          Currently working full-time as a Software Developer at <span class="underline font-medium">dothexa</span>
        </p>
      </div>
    </div>


<div class="flex-1 overflow-y-scroll overflow-auto scrollbar-hide no-scrollbar">
    <div
      class="font-grandslang uppercase  leading-[7rem]"
    >
      <div>
        <RouterLink :to="{name:'Work'}" class="text-[8.5rem] hover:italic">work</RouterLink>
      </div>
      <div>
        <RouterLink :to="{name:'About'}" class="text-[8.5rem] hover:italic">about</RouterLink>
      </div>
      <div>
        <RouterLink :to="{name:'Articles'}" class="text-[8.5rem] hover:italic"
          >Articles</RouterLink
        >
      </div>
      <div>
        <RouterLink :to="{name:'Contact'}" class="text-[8.5rem] hover:italic">contact</RouterLink>
      </div>
    </div>
</div>
</div>
  </div>



  <!-- mobile view -->
  <div class=" mx-[auto] w-[85%] sm:w-[90%] lg:hidden  selection:bg-[#222222] selection:text-[#ECE7E1] ">
    <div id="sidebar" class="mt-[1.3em]  flex uppercase justify-between items-center ">
        <div id="links" class="flex items-center gap-5">
        <a
          class="relative group   text-[0.7em] tracking-[0.4em]"
          href="https://www.linkedin.com/in/daniel-ebere-3a6642228/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3zuk32aKQhKRq0OwsV0T4w%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Li
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </a>
        <a
          class="relative group  text-[0.7em] tracking-[0.4em]"
          href="https://www.instagram.com/eberedaniel241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IN
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </a>
        <a
          class="relative group text-[0.7em] tracking-[0.4em]"
          href="https://github.com/Damndaniel241"
          target="_blank"
          rel="noopener noreferrer"
        >
          GH
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </a>
        <div class=" w-[2em] border text-black bg-black" />
      </div>

      <span class=" text-[0.7em]   tracking-wider">&copy; / {{ currentYear }}</span>

    </div>

    <div id="main" class="flex flex-col mt-[4em] gap-[2em]">
        <div class=" flex flex-col" >
      <div class="flex flex-col  gap-[1.2em]">
        <p
          class="m-0 uppercase text-[0.938rem] tracking-widest text-[#222222] font-semibold"
        >
          daniel ebere
        </p>
        <p class="m-0 text-[0.813rem]">
        Software Developer / Writer / Artist
        </p>
        <p class="m-0 text-[0.813rem]">
          Currently working full-time as a Software Developer at <span class="underline font-medium">dothexa</span>
        </p>
      </div>
    </div>
    <div
      class="font-grandslang uppercase leading-[4em]"
    >
      <div>
        <RouterLink :to="{name:'Work'}" class="text-[3.7rem] hover:italic">work</RouterLink>
      </div>
      <div>
        <RouterLink :to="{name:'About'}" class="text-[3.7rem] hover:italic">about</RouterLink>
      </div>
      <div>
        <RouterLink :to="{name:'Articles'}" class="text-[3.7rem] hover:italic"
          >Articles</RouterLink
        >
      </div>
      <div>
        <RouterLink :to="{name:'Contact'}" class="text-[4rem] hover:italic">contact</RouterLink>
      </div>
    </div>
    </div>
  </div>
</template>

<style >
body {

  color:#222222 !important; 
  background-color: #ece7e1 !important;

}



</style>
