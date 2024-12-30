<script setup lang="ts">
const currentYear = new Date().getFullYear();
document.body.className = 'about';
</script>

<template>
  <div id="container-about" class="mx-auto w-[85%] lg:w-full lg:h-screen  lg:flex selection:bg-[#222222] selection:text-[#ECE7E1]">
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
            class="absolute top-1/2 left-0 w-full h-[1px] bg-[#222222] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
          ></span>
        </RouterLink>
        <div class="lg:h-20 lg:w-[1px] w-[2em] border lg:border-none bg-[#222222]" />
      </div>
      <span class="lg:transform lg:-rotate-90 text-sm tracking-wider"
        >&copy; / {{ currentYear }}</span
      >
    </div>

    <div class="lg:ms-[10em] flex flex-col ">
      <div class="lg:flex lg:flex-col  gap-[1.2em] ">
        <!-- <div class="flex"> -->
            <p id="about" class="lg:text-[11.813rem] text-[3.7rem] font-grandslang capitalize mt-[1em] mb-[0.5em] ">about</p>
            <!-- <div class=""><img src="/src/assets/avatar-1.webp" class="w-[em]"></div> -->
        <!-- </div> -->
        
        <p
          class="text-[1.9rem] lg:text-[2.875rem]  lg:mb-[1.2em] font-grandslang lg:w-[60%] leading-[3rem]"
        >
          Hi, I'm Daniel. A developer and lifelong problem solver.
        </p>
        <p class="text-[0.875rem] font-montserrat mt-5 lg:w-[60%]">
          From the moment I wrote my first "Hello, World!" program, I was
          captivated by the magic of building solutions from scratch. I thrive
          on challenges and enjoy the process of turning complex problems into
          simple, effective, and elegant solutions.
        </p>

        <p class="text-[0.875rem] font-montserrat mt-5  lg:w-[60%]">
          The intersection of logic and creativity has always intrigued me, and
          I've never hesitated to dive in and explore. My journey started with
          tinkering with basic HTML and CSS, which quickly evolved into
          experimenting with JavaScript, Python, and more advanced frameworks
          like React,vue and Django.
        </p>

        <p class="text-[0.875rem] font-montserrat mt-5 lg:w-[60%]">
          Over the years, I’ve worked on a variety of projects—from simple
          portfolio websites to full-stack applications, APIs, and scalable
          backend systems. Each project, no matter how small, has contributed to
          my growth, shaping me into the developer I am today.
        </p>

        <p class="text-[0.875rem] font-montserrat mt-5 lg:w-[60%]">
          Fast forward to 2024, and I’ve dabbled in everything from web
          development and cloud computing to software architecture and agile
          methodologies. These experiences have been invaluable stepping stones,
          enabling me to tackle increasingly complex challenges and make a
          meaningful impact through technology.
        </p>
        <p class="text-[0.875rem] font-montserrat mt-5 lg:w-[60%]">
          What excites me most about being a software developer is the ability
          to create meaningful solutions that solve real-world problems. For me,
          it's not just about writing clean code but also about understanding
          the "why" behind what I'm building. Whether it's helping businesses
          optimize their workflows, developing user-friendly applications, or
          creating tools that empower individuals, I believe in crafting
          software that has purpose and impact. I’m passionate about
          understanding user needs, finding the most pressing problems,
          delivering solutions iteratively, and continuously refining them based
          on feedback. This cycle of learning and improvement is what drives me
          every day.
        </p>
      </div>

      <p
        class="text-[1.25rem] font-grandslang uppercase font-extralight tracking-[0.4em] my-[1.5em]"
      >
        experience
      </p>
      <p class="text-[0.875rem]">- Degree in Computer Science</p>
      <p class="text-[0.875rem]">- Diploma in fullstack web development</p>
      <p class="text-[0.875rem]">- 4 years experience in web development</p>
      <p
        class="text-[1.25rem] font-grandslang uppercase font-extralight tracking-[0.4em] my-[1.9em]"
      >
        skills
      </p>

      <p class="text-[0.875rem] font-montserrat lg:w-[60%]">
        Vue / React / Django / Flask / CSS / MySQL / PostgreSQL / Git / RESTful
        APIs / Insomnia / Docker / Tailwind / Bootstrap
      </p>
      <a href="/src/assets/Daniel_Chukwuebuka_Ebere_CV.pdf"
      target="_blank"
        class="text-[#ece7e1] text-center bg-[#222222] font-grandslang py-4 my-[1.5em] rounded-[3em] cursor-pointer transition-all duration-500 ease-in-out w-[9rem] lg:hover:w-[12.5rem] hover:w-[10.5rem] text-[1.5rem]"
      >
        My CV
    </a>
    <RouterLink :to="{name:'Contact'}"  class="text-[#ece7e1] text-center bg-[#222222] font-grandslang py-4 my-[0.5em] rounded-[3em] cursor-pointer transition-all duration-500 ease-in-out w-[11.5rem] lg:hover:w-[14.5rem] hover:w-[12.9rem] text-[1.5rem]">Contact me</RouterLink>
    </div>
    <div class="hidden lg:block"><img src="/src/assets/avatar-1.webp" class="mt-[2em]"></div>
  </div>
</template>


<style >


.bc-reset{
  border-color:black;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: -10;
    background-color: #222222;
  }

  #container-about{
    animation: swoosh-in-bottom 1.2s ease-out forwards;
    background-color: #ece7e1;
    position: relative;
  
    transition: all 0.8s ease;
  }


  #about{
    opacity:0;
    transform: translateY(-100px); /* Start from below */
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