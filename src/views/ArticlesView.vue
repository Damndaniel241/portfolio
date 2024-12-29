<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <!-- https://github.com/dothexa/classroom-web -->
  <div class="h-screen flex select-none bg-[#222222] text-[#ece7e1]">
    <div
      id="sidebar"
      class="flex flex-col items-center justify-between py-6 fixed top-0 left-0 h-full"
    >
      <div id="links" class="flex flex-col items-center gap-[3em]">
        <RouterLink
          :to="{ name: 'Index' }"
          class="relative group transform -rotate-90 text-[0.6em] tracking-[0.6em] uppercase"
        >
          Home
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#ece7e1] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </RouterLink>
        <div class="h-20 w-[1px] bg-[#ece7e1]" />
      </div>
      <span class="transform -rotate-90 text-sm tracking-wider"
        >&copy;{{ currentYear }}</span
      >
    </div>
    <div class="flex flex-col justify-end">
      <div class="flex flex-col mx-[4em] gap-[1.2em]">
        <p class="m-0 uppercase text-[0.938rem] tracking-widest font-semibold">
          work
        </p>
        <p class="m-0 text-[0.813rem]">
          Here are a few of my recent projects, showcasing my skills and
          creativity. From solving complex problems to crafting seamless user
          experiences, each project reflects my dedication to building impactful
          solutions. Take a look and explore the work I’m most proud of!
        </p>
        <p class="m-0 text-[0.813rem]">
         The world of software engineering and development is constantly evolving and so has my role over the past 4 years.
         I'm still learning and gaining new skills everyday.
        </p>
      </div>
    </div>
    <div
      class="font-grandslang uppercase flex flex-col justify-between overflow-visible mt-[4em] me-[0.9em]"
    >
      <div>
        <RouterLink :to="{name:'Work'}" class="text-[5.906rem] hover:italic">classrooms</RouterLink>
      </div>
      <div>
        <RouterLink :to="{name:'About'}" class="text-[5.906rem] hover:italic">cinemascope</RouterLink>
      </div>
      <div>
        <RouterLink :to="{name:'Articles'}" class="text-[5.906rem] hover:italic"
          >camper</RouterLink
        >
      </div>
      <div>
        <RouterLink :to="{name:'Contact'}" class="text-[5.906rem] hover:italic">firekat</RouterLink>
      </div>
    </div>
  </div>
</template>


<style>
body{
    background-color:#222222 !important ;
}

</style>
