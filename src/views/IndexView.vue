<script setup lang="ts">

const currentYear = new Date().getFullYear();
document.body.className = 'index';

</script>

<template>

    <!-- desktop view -->
  <div id="container-1" class="hidden h-screen lg:flex selection:bg-[#222222] selection:text-[#ECE7E1]">
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
      <span class="transform -rotate-90 text-sm tracking-wider">&copy;/{{ currentYear }}</span>
    </div>

    <div class="lg:flex  px-12 py-6">
    <div class=" flex flex-col justify-end w-1/3 pr-12 mx-[4.188em]" >
      <div class="flex flex-col  gap-[1.2em]">
        <p
        id="ebere-1"
          class="m-0 uppercase text-[0.938rem] tracking-widest text-[#222222] font-semibold"
        >
          daniel ebere
        </p>
        <p class="m-0 text-[0.813rem]">
        Software Developer / Writer / Artist
        </p>
        <p class="m-0 text-[0.813rem]">
          Currently working full-time as a Software Developer at <a href="https://github.com/dothexa" class="underline underline-offset-[3px] font-medium">dothexa</a>
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
  <div id="container-2" class=" mx-[auto] w-[85%] sm:w-[90%] lg:hidden  selection:bg-[#222222] selection:text-[#ECE7E1] ">
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
        <div class=" w-[2em] border  bg-black" />
      </div>

      <span class=" text-[0.7em]   tracking-wider">&copy; / {{ currentYear }}</span>

    </div>

    <div id="main" class="flex flex-col mt-[4em] gap-[2em]">
        <div class=" flex flex-col" >
      <div class="flex flex-col  gap-[1.2em]">
        <p
        id="ebere-2"
          class="m-0 uppercase text-[0.938rem] tracking-widest text-[#222222] font-semibold"
        >
          daniel ebere
        </p>
        <p class="m-0 text-[0.813rem]">
        Software Developer / Writer / Artist
        </p>
        <p class="m-0 text-[0.813rem]">
          Currently working full-time as a Software Developer at <span class="underline underline-offset-[3px] font-medium">dothexa</span>
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

#container-1,#container-2{
    animation: swoosh-in-bottom 1.2s ease-out forwards;
    background-color: #ece7e1;
    position: relative;
  
    transition: all 0.8s ease;
  }


  #ebere-1{
    opacity:0;
    transform: translateY(100px); /* Start from below */
    animation: slide-in-up 1s ease forwards 1.2s; /* Bottom-to-top swoosh */
  }
  #ebere-2{
    opacity:0;
    transform: translateY(50px); /* Start from below */
    animation: slide-in-down 1s ease forwards 1.2s; /* Bottom-to-top swoosh */
  }


  
  @keyframes swoosh-in-bottom {
  0% {
    transform: translateY(100%); /* Start from off-screen bottom */
  }
  100% {
    transform: translateY(0); /* End in its normal position */
  }
}



  /* Keyframes */
  
  /* Main container top-to-bottom swoosh */
  @keyframes swoosh-in {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  /* Bottom-to-top swoosh for container_content_inner */
  @keyframes slide-in-up {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* Top-to-bottom slide-in for other elements */
  @keyframes slide-in-down {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* Fade-in effect for images and other elements */
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


</style>
