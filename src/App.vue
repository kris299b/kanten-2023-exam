<template>
<header class="bg-black sm:flex sm:justify-between">
  <div class="flex items-center justify-between ml-3 mr-3">
    <div>
      <RouterLink to="/">
      <img alt="Vue logo" class="logo sm:ml-3 py-3" src="./assets/Logo Standart neg.png" width="50" height="50" />
      </RouterLink>
    </div>
    <div class="sm:invisible flex items-center gap-3">
      <button @click="isOpen = !isOpen" type="button" class="block text-white hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" class="block h-4 w-4 fill-current">
          <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
  </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="items-center justify-between py-5 pt-3 mx-auto sm:flex text-xs md:text-xs lg:text-xs">
      <RouterLink to="/events">
        <a href="#responsive-header" class="sm:visible font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          EVENTS
        </a>
        </RouterLink>
        <RouterLink to="/frivillig">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          FRIVILLIG
        </a>
        </RouterLink>
        <RouterLink to="/merch">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          MERCH
        </a>
        </RouterLink>
        <RouterLink to="/about">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          OM
        </a>
        </RouterLink>
        <RouterLink to="/admin">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          ADMIN
        </a>
        </RouterLink>
        <RouterLink to="/kontakt">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          KONTAKT
        </a>
        </RouterLink>
        <RouterLink to="/register">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          OPRET BRUGER 
        </a>
        </RouterLink>
    </div>
    <div class="py-5 md:py-4 lg:py-3 ">
      <button class="font-sans sm:Roboto bg-transparent text-neutral-200 text-sm px-5 py-2 sm:mr-3 text-xs md:text-xs lg:text-xs">
        <RouterLink to="/login">LOG IND</RouterLink>
      </button>
    </div>
    <div class="md:py-4 lg:py-3 ">
      <button class="font-sans sm:Roboto bg-transparent text-neutral-200 text-sm px-5 py-2 sm:mr-3 text-xs md:text-xs lg:text-xs" @click="logOut" >LOG UD</button>
    </div>
    <div>
  </div>
</header>
<RouterView/>


<!--Footer container-->
<footer class="bg-black text-white"> 
  <div class="container pt-1 w-1/2 ml-10">
    <div class="flex justify-end gap-x-6 mb-1 mt-3">
      <a href="#!" class="text-neutral-800 dark:text-neutral-200">
        <a href="https://www.facebook.com/kanten.esbjerg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
      </a>
      <a href="#!" class="text-neutral-800 dark:text-neutral-200">
        <a href="https://www.instagram.com/kanten_esbjerg/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </a>
    </div>
  </div>

  <!--Copyright section-->
  <div
    class="bg-black p-3 text-center text-neutral-700 dark:bg-black dark:text-neutral-200">
    © 2023 Copyright: Kanten
  </div>
</footer>

</template>

<script>
export default{
  data() {
    return {
      isOpen: false, 
    }
  }
}
</script> 

<script setup>

import { RouterLink, RouterView, routerKey } from 'vue-router'
import { onMounted } from 'vue';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { ref } from 'vue';

import { db } from "@/firebase";
const auth = getAuth();
const logOut = () => {
  console.log("test")
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('user logged out', auth.currentUser)
   // router.push('/login')
  }).catch((error) => {
    console.log(error)
    // An error happened.
  });
}

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
