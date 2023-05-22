<template>        
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-20">
            <p class="font-sans sm:Roboto hidden md:block font-sans text-8xl text-white font-semibold mt-20 tracking-widest">KANTEN</p>
            <p class="font-sans sm:Roboto hidden md:block font-sans text-2xl text-white font-normal mt-3 mb-6 tracking-widest">KULTUR | MUSIK | FÆLLESSKAB</p>
            <button class="text-md font-bold bg-black hover:bg-black text-white font-bold hover:text-white py-3 px-6 border-2 border border-white hover:border-white tracking-widest">
            <RouterLink to="/events">SE EVENTS</RouterLink>
            </button>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/kanten-kollage-done.jpg" alt="">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>