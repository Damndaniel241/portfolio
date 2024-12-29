<script setup lang="ts">
import NewPill from "@/components/NewPill.vue";
// import { onBeforeMount } from "vue";
const currentYear = new Date().getFullYear();


  document.body.className = 'work';

</script>

<template>
  <!-- desktop view -->
  <div class="lg:flex hidden h-screen bg-[#222222] text-[#ece7e1]">
    <!-- Sidebar -->
    <div
      class="w-[4rem] flex flex-col justify-between py-6 items-center border-r border-gray-700"
    >
      <RouterLink
        :to="{ name: 'Index' }"
        class="relative group transform -rotate-90 tracking-widest text-xs"
        >HOME<span
          class="absolute top-1/2 left-0 w-full h-[1px] bg-[#ece7e1] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
        ></span
      ></RouterLink>
      <div class="w-[1px] h-20 bg-gray-700"></div>
      <div class="-rotate-90 tracking-widest text-xs">@/{{ currentYear }}</div>
    </div>

    <!-- Main Content -->
    <div class="flex px-12 py-6">
      <!-- Work Section -->
      <div class="w-1/3 pr-12 flex flex-col justify-end mx-[4.188rem]">
        <h1 class="text-lg font-bold tracking-widest mb-4">WORK</h1>
        <p class="text-sm leading-relaxed mb-4 text-[0.875rem]">
          Here are a few of my recent projects, showcasing my skills and
          creativity. From solving complex problems to crafting seamless user
          experiences, each project reflects my dedication to building impactful
          solutions. Take a look and explore the work I’m most proud of!
        </p>
        <p class="text-sm leading-relaxed text-[0.875rem]">
          The world of software engineering and development is constantly
          evolving and so has my role over the past 4 years. I'm still learning
          and gaining new skills everyday.
        </p>
      </div>

      <!-- Projects List -->
      <div
        class="flex-1 overflow-y-scroll overflow-auto scrollbar-hide no-scrollbar"
      >
        <div class="space-y-8 leading-[5rem] uppercase">
          <!-- Project Item -->
          <div>
            <a
              href="https://www.nairaland.com"
              class="block text-[5.906rem] hover:italic cursor-pointer font-grandslang"
              >classrooms</a
            >
            <span class="block text-sm tracking-widest mt-1 text-gray-400">
              — learning management system
            </span>
          </div>
          <!-- Project Item -->
          <div>
            <a
              href="https:nairalnd.com"
              class="block text-[5.906rem] hover:italic cursor-pointer font-grandslang"
              >cinemascope</a
            >
            <div class="flex items-center gap-2 text-sm tracking-widest mt-1">
              <span class="text-gray-400">— moviereview platform</span>
              <NewPill />
            </div>
          </div>
          <!-- Project Item -->
          <div>
            <a
              href="https:nairalnd.com"
              class="block text-[5.906rem] hover:italic cursor-pointer font-grandslang"
              >camper</a
            >
            <div class="flex items-center gap-2 text-sm tracking-widest mt-1">
              <span class="text-gray-400"
                >— steganographic password manager</span
              >
              <NewPill />
            </div>
          </div>
          <!-- Project Item -->
          <div>
            <a
              href="https:nairalnd.com"
              class="block text-[5.906rem] hover:italic cursor-pointer font-grandslang"
              >firekat</a
            >
            <span class="block text-sm tracking-widest mt-1 text-gray-400">
              — web forum
            </span>
          </div>
          <div>
            <a
              href="https:nairalnd.com"
              class="block text-[5.906rem] hover:italic cursor-pointer font-grandslang"
              >snackr</a
            >
            <span class="block text-sm tracking-widest mt-1 text-gray-400">
              — snack store
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile view -->
  <div
    class="mx-auto lg:hidden w-[85%] lg:h-screen select-none bg-[#222222] text-[#ece7e1]"
  >
    <div
      id="sidebar"
      class="mt-[1.3em] flex lg:flex-col items-center justify-between lg:py-6 lg:fixed lg:top-0 lg:left-0 lg:h-full"
    >
      <div id="links" class="flex lg:flex-col items-center gap-5 lg:gap-[3em]">
        <RouterLink
          :to="{ name: 'Index' }"
          class="relative group lg:transform lg:-rotate-90 text-[0.6em] tracking-[0.6em] uppercase"
        >
          Home
          <span
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#ece7e1] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </RouterLink>
        <div class="lg:h-20 lg:w-[1px] w-[2em] border bg-[#ece7e1]" />
      </div>
      <span class="lg:transform lg:-rotate-90 text-sm tracking-wider"
        >&copy; / {{ currentYear }}</span
      >
    </div>

    <div id="main" class="flex flex-col mt-[4em] gap-[2em]">
      <div class="flex flex-col">
        <h1 class="text-lg font-bold tracking-widest mb-4">WORK</h1>
        <p class="leading-relaxed mb-4 text-[0.875rem]">
          Here are a few of my recent projects, showcasing my skills and
          creativity. From solving complex problems to crafting seamless user
          experiences, each project reflects my dedication to building impactful
          solutions. Take a look and explore the work I’m most proud of!
        </p>
        <p class="text-sm leading-relaxed text-[0.875rem]">
          The world of software engineering and development is constantly
          evolving and so has my role over the past 4 years. I'm still learning
          and gaining new skills everyday.
        </p>
      </div>

      <div class="font-grandslang uppercase leading-[4em]">
        <div>
          <a
            href="https://www.nairaland.com"
            class="block text-[2.506rem] hover:italic cursor-pointer font-grandslang"
            >classrooms</a
          >
          <span
            class="hidden lg:block text-sm tracking-widest mt-1 text-gray-400"
          >
            — learning management system
          </span>
        </div>
        <!-- Project Item -->
        <div>
          <a
            class="block text-[2.506rem] hover:italic cursor-pointer font-grandslang"
          >
            cinemascope
        </a>
          <div
            class="lg:flex hidden items-center gap-2 text-sm tracking-widest mt-1"
          >
            <span class="text-gray-400">— moviereview platform</span>
            <NewPill />
          </div>
        </div>
        <!-- Project Item -->
        <div>
          <a
            class="block text-[2.506rem] hover:italic cursor-pointer font-grandslang"
          >
            camper
        </a>
          <div
            class="lg:flex hidden items-center gap-2 text-sm tracking-widest mt-1"
          >
            <span class="text-gray-400">— steganographic password manager</span>
            <NewPill />
          </div>
        </div>
        <!-- Project Item -->
        <div>
          <a
            class="block text-[2.506rem] hover:italic cursor-pointer font-grandslang"
          >
            firekat
        </a>
          <span
            class="lg:block hidden text-sm tracking-widest mt-1 text-gray-400"
          >
            — web forum
          </span>
        </div>
        <div>
          <a
            class="block text-[2.506rem] hover:italic cursor-pointer font-grandslang"
          >
            snackr
        </a>
          <span
            class="lg:block hidden text-sm tracking-widest mt-1 text-gray-400"
          >
            — snack store
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* body {
  background-color: #222222 !important;
  color: #ece7e1 !important;
} */

.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
</style>
