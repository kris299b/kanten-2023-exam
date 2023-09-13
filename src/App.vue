<template>
<header class="sticky top-0 z-30 bg-black sm:flex sm:justify-between py-1">
  <div class="flex items-center justify-between ml-3 mr-3">
    <div>
      <RouterLink to="/">
      <img alt="Vue logo" class="logo sm:ml-3 py-3 md:py-0 lg:py-0" src="./assets/Logo-Standart-neg.png" width="35" height="35" />
      </RouterLink>
    </div>
    <div class="visible md:invisible lg:invisible flex items-center gap-3">
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
    <div :class="isOpen ? 'block' : 'hidden'" class="font-sans roboto items-center justify-between mx-auto sm:flex text-xs md:text-xs lg:text-xs tracking-widest">
      <RouterLink to="/events">
        <a href="#responsive-header" class="block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          EVENTS
        </a>
        </RouterLink>
        <RouterLink to="/frivillig">
        <a href="#responsive-header" class="block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          FRIVILLIG
        </a>
        </RouterLink>
        <RouterLink to="/merch">
        <a href="#responsive-header" class="block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          MERCH
        </a>
        </RouterLink>
        <RouterLink to="/about">
        <a href="#responsive-header" class="block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          OM
        </a>
        </RouterLink>
        <RouterLink to="/admin">
        <a href="#responsive-header" class="block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          ADMIN
        </a>
        </RouterLink>
        <RouterLink to="/kontakt">
        <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
          KONTAKT
        </a>
        </RouterLink>
      </div>
      <div v-if="isLoggedIn" class="py-0 md:py-4 lg:py-3">
        <button  class="font-sans sm:Roboto bg-transparent text-neutral-200 text-sm px-5 py-2 md:py-0 lg:py-1 sm:mr-3 text-xs md:text-xs lg:text-xs tracking-widest" @click="logOut" >LOG UD</button>
      </div>
        <div v-else class="py-0 md:py-4 lg:py-3">
        <button  class="font-sans sm:Roboto bg-transparent text-neutral-200 text-sm px-5 py-2 md:py-0 lg:py-1 sm:mr-3 text-xs md:text-xs lg:text-xs tracking-widest">
          <RouterLink to="/login">LOG IND</RouterLink>
        </button>
      </div>
    <div>
  </div>
</header>
<RouterView/>


<footer class="bg-black dark:bg-black">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo sm:ml-3 py-3 md:py-0 lg:py-0" src="./assets/Logo-Standart-neg.png" width="35" height="35" />
          </RouterLink>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-neutral-200 sm:mb-0 dark:text-neutral-200">
                <li>
                  <RouterLink to="/about">
                    <a href="#" class="mr-4 md:mr-6 ">Om</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/frivillig">
                    <a href="#" class="mr-4  md:mr-6">Frivillig</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/kontakt">
                    <a href="#" class="mr-4 md:mr-6 ">Kontakt</a>
                  </RouterLink>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-neutral-200 sm:mx-auto dark:border-neutral-200 lg:my-8" />
        <div class="flex mt-4 space-x-3 justify-center md:justify-center lg:justify-center sm:mt-0">
            <a href="#">
              <a href="https://www.facebook.com/kanten.esbjerg">
                <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
              </a>
            </a>
            <a href="#">
              <a href="https://www.instagram.com/kanten_esbjerg/">
                <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
              </a>
            </a>
            <a href="#">
              <a href="https://discord.com/login">
                <svg
                class="h-5 w-5"
                fill="white"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd">
                <path
                  d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
              </a>
            </a>
        </div>
        <div class="bg-black text-sm md:text-sm lg:text-sm pt-4 md:pt-4 lg:pt-4 text-center text-white md:text-white lg:text-white dark:bg-black light:bg-black dark:text-white light:text-white">
          © 2023 Copyright: Kanten
        </div>
    </div>
</footer>

</template>


<script setup>

import { RouterLink, RouterView, routerKey } from 'vue-router'
import { onMounted } from 'vue';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { ref } from 'vue';

import { db } from "@/firebase";

let isOpen = ref(false)


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


let isLoggedIn = ref(false); 



onMounted(() => {
  onAuthStateChanged(auth, (user) =>{
    if (user) {
      isLoggedIn.value = true
      console.log('user logged in', auth.currentUser)
    } else {
      isLoggedIn.value = false
      console.log('user logged out', auth.currentUser)
    }
  })
})


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
