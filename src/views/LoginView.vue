<template>
    <section class="dark:bg-black">
  <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0 dark:bg-black">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p class="font-sans sm:Roboto mb-4 font-normal text-md text-center sm:text-3xl md:text-2xl lg:text-2xl text-white tracking-widest">LOG IND</p>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="font-sans sm:Roboto block mb-2 text-sm font-medium text-gray-900 dark:text-white">Din Email</label>
                      <input type="email" name="email" id="email" v-model="email" class="bg-white border border-white text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:black dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="navn@gmail.com" required="">
                      <p v-if="errMsg">{{errMsg}}</p>
                  </div>
                  <div>
                      <label for="password" class="font-sans sm:Roboto block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode</label>
                      <input type="password" name="password" id="password" v-model="password" placeholder="••••••••" class="bg-white border border-white text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:black dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="font-sans sm:Roboto text-gray-500 dark:text-gray-300">Husk mig</label>
                          </div>
                      </div>
                  </div>
                  <div>
                    <button @click.prevent="register" type="submit" class="font-sans sm:Roboto w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 py-2">Log ind</button>
<!--                         <button @click="signInWithGoogle" type="submit" class="font-sans sm:Roboto w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log ind med Google</button>
 -->              </div>
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

const register = () => {
signInWithEmailAndPassword(getAuth(),email.value, password.value)
    .then((data) => {
        
        console.log(data)
        console.log("successfully signed in!");
      //  router.push('/feed')
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