<script setup lang="ts">
const currentYear = new Date().getFullYear();

document.body.className = 'articles';
</script>

<template>
  <!-- https://github.com/dothexa/classroom-web -->
  <div class="mx-auto w-[85%] lg:h-screen lg:flex select-none bg-[#222222] text-[#ece7e1]">
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
        <div class="lg:h-20 lg:w-[1px] w-[2em] border  bg-[#ece7e1]" />
      </div>
      <span class="lg:transform lg:-rotate-90 text-sm tracking-wider"
        >&copy;{{ currentYear }}</span
      >
    </div>
    <div class="lg:ms-[10em] flex flex-col">
      <div class="flex flex-col  gap-[1.2em]">
        <p class="lg:text-[6.813rem]  text-[3.7rem] leading-[3rem] lg:leading-none font-grandslang capitalize mt-[1em] mb-[0.5em]">Coming soon...</p>
        <p class="text-[0.875rem] font-montserrat lg:mt-[4em] mb-[1.2em] lg:w-[60%]">
          Need an aesthetic, well structured website that you can own and
          maintain yourself? Get in touch.
        </p>

        <p class="text-[0.875rem]">
          Email:
          <a
            href="mailto:lombardia@gmail.com"
            class="  hover:line-through transition duration-300"
            >lombardia241@gmail.com</a
          >
        </p>
        <p class="text-[0.875rem]">
          On the Internet:
          <a
            href="https://bit.ly/4fuewK8"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-[5px] hover:line-through transition duration-300"
            >Linkedin</a
          > /
          <a
            href="https://www.instagram.com/eberedaniel241/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-[5px] hover:line-through transition duration-300"
            >Instagram</a
          > / 
          <a
          href="https://github.com/Damndaniel241"
          target="_blank"
          rel="noopener noreferrer"
            class="underline underline-offset-[5px] hover:line-through transition duration-300"
            >Github</a
          >
        </p>
      </div>
    </div>
  </div>
</template>


<style>
/* body{
    background-color:#222222 !important ;
    color:#ece7e1 !important;
} */

</style>
