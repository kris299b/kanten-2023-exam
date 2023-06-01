<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-10">
            <p class="font-sans sm:Roboto md:block font-sans text-md sm:text-7xl md:text-4xl lg:text-5xl text-black font-semibold mt-10 sm:mt-40 md:mt-20 lg:mt-40 tracking-wide">VIL DU I KONTAKT MED OS ?</p>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/kanten.jpg" alt="">
  </div>

  <section class="dark:bg-black">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-md sm:text-2xl md:text-2xl lg:text-3xl tracking-tight font-normal text-center text-gray-900 dark:text-white tracking-widest">KONTAKT OS</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Du er altid mere end velkommen til at tage kontakt til os, hvis du skulle ligge inde med spørgsmål. Udfyld formularen herunder eller kontakt os direkte, vi er klar til at hjælpe og give dig svar på dine spørgsmål.</p>
      <form action="#" class="space-y-8 px-3">
          <div class="w-full md:w-2/4 lg:w-2/4">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Navn</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dit Navn" required>
          </div>
          <div class="w-full md:w-2/4 lg:w-2/4">
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Din Email" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Spørgsmål</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Dit Spørgsmål"></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white border cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send besked</button>
      </form>
      
  </div>
</section>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>