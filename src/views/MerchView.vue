<template>
<div class="boks1">
    <div class="inner-boks1">
        <h1>MERCHANDISE</h1>
        <p id="paragraf">Her på siden kan du købe merch i form af t-shirt, hoodies og sweatshirts, som alle vil have et unikt design. Ikke nok med at det giver et cool udtryk med en "Kanten"-t-shirt, du støtter også op om Foreningen Kanten og hjælper med at sprede budskabet om Kanten.</p>
    </div>
</div>


<div class="flex flex-row justify-center bg-black">
    <div class="max-w-sm lg:w-80 shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="h-80 mx-auto" src="../assets/t-shirt.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                SE T-SHIRTS
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>

    <div class="max-w-sm lg:w-80 bg-black shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="h-80 mx-auto" src="../assets/hoodie.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                SE HOODIES
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>

    <div class="max-w-sm lg:w-80 bg-black shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="h-80 mx-auto" src="../assets/sweatshirt.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-base md:text-base lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">HOODIES</h5>
            </a>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                SE SWEATSHIRTS
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>

</template>

<script setup>

</script>

<style scoped>
.boks1 {
    background-color: rgb(0, 179, 27);
    height: 250px;
}

.inner-boks1 {
    background-color: rgb(0, 0, 0);
    height: 200px;
    padding-top: 30px;
    width: 70%;
    margin: auto;
    text-align: center;
}

h1 {
    font-size: 45px;
    color: #e7e7e7;
    font-weight: 600;
    letter-spacing: 15px;
    padding-bottom: 20px;
}

#paragraf {
    font-size: 16px;
    color: #e7e7e7;
}

.boks2 {
    height: 500px;
}
</style>