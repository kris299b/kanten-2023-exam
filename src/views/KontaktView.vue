<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-10">
            <div>
              <p class="font-sans sm:Roboto md:block font-sans text-2xl md:text-5xl lg:text-7xl text-black font-semibold mt-5 md:mt-20 lg:mt-20 tracking-widest">KANTEN</p>
              <p class="font-sans sm:Roboto md:block font-sans text-xs md:text-sm lg:text-2xl text-black py-0 md:py-1 lg:py-3 tracking-widest">VIL DU I KONTAKT MED OS ?</p>
            </div>
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="invisible md:invisible lg:visible w-20 h-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img class="image" src="../assets/kontakt.jpg" alt="">
  </div>

  <section class="dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black px-10 columns-1 grid md:grid-cols-1 lg:grid-cols-2">
    <div class="py-8 lg:py-16 px-2 md:px-4 lg:px-8">
      <h2 class="font-sans roboto mb-4 text-md text-lg md:text-2xl lg:text-2xl font-normal text-center text-neutral-200 dark:text-neutral-200 tracking-widest">KONTAKT OS</h2>
      <p class="font-sans arial mb-8 lg:mb-16 font-light text-center text-neutral-200 dark:text-neutral-200 text-base md:text-base lg:text-base text-justify">Du er altid mere end velkommen til at tage kontakt til os, hvis du skulle ligge inde med spørgsmål. Udfyld formularen herunder eller kontakt os direkte, vi er klar til at hjælpe og give dig svar på dine spørgsmål.</p>
      <form action="#" class="space-y-8">
          <div class="w-full md:w-2/4 lg:w-2/4">
              <label for="email" class="block mb-2 text-sm font-medium text-neutral-200 md:text-neutral-200 lg:text-neutral-200 dark:text-neutral-200 light:text-neutral-200">Navn</label>
              <input type="email" id="email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dit Navn" required>
          </div>
          <div class="w-full md:w-2/4 lg:w-2/4">
              <label for="subject" class="block mb-2 text-sm font-medium text-neutral-200 md:text-neutral-200 lg:text-neutral-200 dark:text-neutral-200 light:text-neutral-200">Email</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Din Email" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-neutral-200 md:text-neutral-200 lg:text-neutral-200 dark:text-neutral-200 light:text-neutral-200">Spørgsmål</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Dit Spørgsmål"></textarea>
          </div>
          <button type="submit" class="text-xs md:text-xs lg:text-xs tracking-widest py-2 px-4 text-center hover:text-black text-white border cursor-pointer focus:ring-4 dark:bg-primary-600 dark:hover:bg-orange-400 hover:border-orange-400">SEND BESKED</button>
      </form>  
    </div>
    <div class="ml-2 md:ml-5 lg:ml-60 py-4 md:py-4 lg:py-12 lg:px-10">
      <div class="py-3">
        <p class="mb-1 md:mb-1 lg:mb-1 text-left text-neutral-200 dark:text-neutral-200 text-base md:text-base lg:text-base font-normal">Mobil :</p>
        <p class="text-left text-neutral-200 dark:text-neutral-200 text-sm font-light">45+ 28 97 11 85</p>
      </div>
      <div class="py-3">
        <p class="mb-1 md:mb-1 lg:mb-1 text-left text-neutral-200 dark:text-neutral-200 text-base md:text-base lg:text-base font-normal">Addresse :</p>
        <p class="text-left text-neutral-200 dark:text-neutral-200 text-sm font-light ">Gl Novrupvej 14, 6705 Esbjerg Ø</p>
      </div>
      <div class="py-3">
        <p class="mb-1 md:mb-1 lg:mb-1 text-left text-neutral-200 dark:text-neutral-200 text-base md:text-base lg:text-base font-normal">Email :</p>
        <p class="text-left text-neutral-200 dark:text-neutral-200 text-sm font-light ">musikforeningenkanten@gmail.com</p>
      </div>
    </div>
</section>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>