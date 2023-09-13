<template>
    <section>
        <div class="font-sans Roboto tracking-widest font-normal text-lg md:text-2xl lg:text-2xl pb-10 md:pb-10 lg:pb-5 text-white text-center">
            ANSØG HER
        </div>
        <div class="form-container">
            <form class="form" ref="form" @submit.prevent="sendMail">
                <div class="pt-0 md:pt-0 lg:pt-0">
                    <div class="form-group">
                    <label for="" class="block mb-2 text-sm font-medium text-neutral-200 md:text-neutral-200 lg:text-neutral-200 dark:text-neutral-200 light:text-neutral-200 text-gray-900 dark:text-gray-300">Navn</label>
                    <input name="from_name" placeholder="Dit navn" class="text-sm" type="text" :value="inputFieldReset" required>
                    </div>
                </div>
                <div class="pt-5 md:pt-5 lg:pt-5">
                    <div class="form-group">
                    <label for="" class="block mb-2 text-sm font-medium text-neutral-200 md:text-neutral-200 lg:text-neutral-200 dark:text-neutral-200 light:text-neutral-200 text-gray-900 dark:text-gray-300">Email</label>
                    <input name="email" placeholder="Din e-mail" class="text-sm" type="email" :value="inputFieldReset" required>
                    </div>
                </div>
                <div class="pt-5 md:pt-5 lg:pt-5">
                    <div class="form-group">
                    <label for="" class="block mb-2 text-sm font-medium text-neutral-200 md:text-neutral-200 lg:text-neutral-200 dark:text-neutral-200 light:text-neutral-200 text-gray-900 dark:text-gray-300">Om dig</label>
                    <textarea class="text-area text-sm" name="message" placeholder="Skriv lidt om dig selv" type="text" :value="inputFieldReset"
                    required></textarea>
                    </div>
                </div>
                <div class="flex flex-col items-center py-5 md:pt-5 lg:pt-5">
                    <button class="text-xs md:text-xs lg:text-xs font-base tracking-widest py-2 px-4 text-center hover:text-black text-white border cursor-pointer focus:ring-4 dark:hover:bg-orange-400 hover:border-orange-400">
                        TILMELD DIG
                    </button>
                    <input class="submit" type="submit" name="Send">
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';
import { ref } from 'vue';

export default {
    setup() {
        const form = ref(null);
        const inputFieldReset = ref(null);

        const sendMail = () => {
            emailjs.sendForm('service_jv6g74d', 'template_hdi5k0q', form.value, 'f-nYe_mvYmAEk1A5P')
                .then(() => {
                    alert('Besked sendt!')
                    inputFieldReset.value = " ";
                }, (error) => {
                    alert('Besked ikke sendt', error);
                });
        }

        return {
            form,
            inputFieldReset,
            sendMail
        }
    }
}
</script>

<style scoped>

html, body {
    font-size: 12px;
    overflow: hidden;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

p{
    font-size: 30px;
    padding: 10px;
    font-weight: bold;
    color: rgb(255, 255, 255);
}

.form-container {
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 10px;
    background-color: #000000;
    width: 500px;
}

.form-group{
 color: #000000;
}

.form-group input{
    padding: 10px 10px 10px 10px;
    border: none;
    width: 400px;
    outline: none;
    font-family: 'Roboto', sans-serif;
    color: rgb(0, 0, 0);
}

.text-area {
    height: 150px;
    width: 400px;
    border: none;
    padding: 10px;
    outline: none;
    font-family: 'Roboto', sans-serif;
    color: #000000;
}

#knap {
    margin-left: 15px;
}




/* Small Devices, Phones */ 
@media only screen and (min-width : 375px) {
    html, body {
        font-size: 11px;
    }

    p{
        font-size: 18px;
        padding: 5px;
    }

    .form-container {
        height: 370px;
        display: flex;
        margin: auto;
        padding: 5px;
        background-color: #000000;
        width: 340px;
    }

    .form-group{
        color: #000000;
    }

    .form-group input{
        padding: 5px 5px 5px 5px;
        width: 300px;
    }

    .text-area {
        height: 140px;
        width: 300px;
        padding: 10px;
    }

}



/* Medium Devices, Tablets/laptops*/
@media only screen and (min-width : 810px) {
    p {
        font-size: 20px;
        padding: 10px;
    }

    .form-container {
        height: 400px;
        width: 420px;
    }


    .form-group input{
        padding: 5px 5px 5px 5px;
        width: 360px;
        outline: none;
    }

    .text-area {
        height: 150px;
        width: 360px;
        border: none;
        padding: 5px;
    }

}



/* Large Devices, Desktop*/
@media only screen and (min-width : 1200px) {
    html, body {
        font-size: 12px;
        overflow: hidden;
    }

    p{
        font-size: 26px;
        padding: 10px;
        font-weight: bold;
    }

    .form-container {
        height: 480px;
        margin: auto;
        padding: 10px;
        width: 500px;
    }

    .form-group{
        color: #000000;
    }

    .form-group input{
        padding: 10px 10px 10px 10px;
        width: 400px;
        outline: none;
    }

    .text-area {
        height: 150px;
        width: 400px;
        padding: 10px;
        outline: none;
    }

    
}


</style>