<template>
<nav class="sticky top-0 z-30 flex items-center justify-between flex-wrap bg-black p-2">
  <div class="flex items-center flex-shrink-0 text-white">
    <RouterLink to="/">
    <img alt="Vue logo" class="logo ml-5" src="./assets/Logo Standart neg.png" width="50" height="50" />
    </RouterLink>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center">
    <div class="text-sm font-normal lg:flex-grow">
      <RouterLink to="/events">
      <a href="#responsive-header" class="font-sans sm:Roboto block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        EVENTS
      </a>
      </RouterLink>
      <RouterLink to="/program">
      <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        PROGRAM
      </a>
      </RouterLink>
      <RouterLink to="/frivillig">
      <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        FRIVILLIG
      </a>
      </RouterLink>
      <RouterLink to="/merch">
      <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        MERCH
      </a>
      </RouterLink>
      <RouterLink to="/about">
      <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        OM
      </a>
      </RouterLink>
      <RouterLink to="/admin">
      <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        ADMIN
      </a>
      </RouterLink>
      <RouterLink to="/kontakt">
      <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
        KONTAKT
      </a>
      </RouterLink>
    </div>
  </div>
  <img alt="Login icon" class="icon mr-5" src="./assets/login-icon.png" width="17" height="17" />
</nav>
<RouterView/>

<!--Footer container-->
<footer class="bg-black text-center text-white dark:bg-black">
  <div class="container pt-1">
    <div class="mb-5 mt-5 flex justify-center">
      <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>
      <a href="#!" class="text-neutral-800 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </div>
  </div>

  <!--Copyright section-->
  <div
    class="bg-black p-3 text-center text-neutral-700 dark:bg-black dark:text-neutral-200">
    © 2023 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >KANTEN</a
    >
  </div>
</footer>


</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>

.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 2px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .3s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))
	}

	.link-underline:hover {
		background-size: 100% 2px;
		background-position: 0 100%
	}
</style>
