<template>
    <section class="dark:bg-black light:bg-black md:bg-black lg:bg-black">
    <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <div class="w-full md:mt-0 sm:max-w-md xl:p-0 dark:bg-black light:bg-black">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p class="font-sans sm:Roboto mb-4 font-normal text-md text-center sm:text-3xl md:text-2xl lg:text-3xl text-white tracking-widest pb-5">OPRET BRUGER</p>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="font-sans sm:Roboto block mb-2 text-sm font-medium text-white dark:text-white light:text-white">Din email</label>
                        <input type="email" name="email" id="email" v-model="email" class="bg-white border border-white text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:black dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="navn@gmail.com" required="">
                    </div>
                    <div>
                        <label for="password" class="font-sans sm:Roboto block mb-2 text-sm font-medium text-white dark:text-white light:text-white">Kode</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-white text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:black dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                        <p class="text-xs md:text-sm lg:text-sm text-red-500 md:text-red-500 lg:text-red-500">* Kun kantens medlemmer kan oprette bruger</p>
                    <div class="text-center">
                        <button @click="register" type="submit" class="font-sans sm:Roboto text-white hover:text-black bg-black hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm md:text-base lg:text-base px-5 text-center dark:bg-black py-1 border border-white hover:border-orange-400 py-2">Opret bruger</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"; 
import {useRouter} from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter() 

const register = () => {
createUserWithEmailAndPassword(getAuth(),email.value, password.value)
    .then((data) => {
        console.log("successfully registered!");
        router.push('/feed')
        })
        .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
    };


const signInWithGoogle = () => {

}

</script>

<style lang="scss" scoped>

</style>