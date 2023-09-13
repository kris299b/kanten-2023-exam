<template>
<section class="dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black">
  <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0 dark:bg-black">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p class="font-sans sm:Roboto md:roboto lg:roboto mb-4 font-normal text-md text-center sm:text-3xl md:text-2xl lg:text-3xl text-white tracking-widest pb-5">LOG IND</p>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="font-sans sm:Roboto block mb-2 text-sm font-medium text-white md:text-white lg:text-white dark:text-white light:text-white">Din Email</label>
                      <input type="email" name="email" id="email" v-model="email" class="bg-white border border-white text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-white light:border-white dark:placeholder-black dark:text-black light:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="navn@gmail.com" required="">
                      <p v-if="errMsg">{{errMsg}}</p> <!--v-if og v-else bruges til loop, og den vil retunere dataen tilbage (at eksempelvis kodeordet er for langt, eller forkert.)-->
                  </div>
                  <div>
                      <label for="password" class="font-sans sm:Roboto block mb-2 text-sm font-medium text-white md:text-white lg:text-white dark:text-white light:text-white">Kode</label>
                      <input type="password" name="password" id="password" v-model="password" placeholder="••••••••" class="bg-white border border-white text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:black dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="font-sans sm:Roboto text-white md:text-white lg:text-white dark:text-white light:text-white">Husk mig</label>
                          </div>
                      </div>
                  </div>
                  <div class="text-center">
                    <button @click.prevent="register" type="submit" class="font-sans sm:Roboto text-white hover:text-black bg-black hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm md:text-base lg:text-base px-5 text-center dark:bg-black py-1 border border-white hover:border-orange-400">Log ind</button>
<!--                         <button @click="signInWithGoogle" type="submit" class="font-sans sm:Roboto w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log ind med Google</button>
 -->              </div>
                  <div class="bg-black text-center">
                    <RouterLink to="/register">
                    <a href="#responsive-header" class="font-sans sm:Roboto block ml-5 mt-2 lg:inline-block lg:mt-0 text-neutral-200 hover:text-white mr-5 [&.active]:text-black/90 lg:p-2 link link-underline link-underline-black">
                      Opret bruger 
                    </a>
                    </RouterLink>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script setup>
import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"; 
import { useRouter } from 'vue-router'
import { db } from "@/firebase";
const email = ref("");
const password = ref("");
const errMsg = ref ()
const router = useRouter() 

//constant = variabel (man vil ikke kunne ændre den.)

const register = () => {
signInWithEmailAndPassword(getAuth(),email.value, password.value)
    .then((data) => {
        
        console.log(data)
        console.log("successfully signed in!");
      //  router.push('/feed')

      // console.log sender data ud til browseren (hvis man vil teste om funktionen kommer ud på hjemmesiden)

        })
        .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "no account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "incorrect password";
                break;
            default:
                errMsg.value = "email or password was incorrect";
                break;
        }
    });
    };


const signInWithGoogle = () => {

}
</script>

<style lang="scss" scoped>

</style>