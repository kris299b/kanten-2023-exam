<template>
<div class="boks1">
    <div class="inner-boks1">
        <h1>MERCHANDISE</h1>
        <p id="paragraf">Her på siden kan du købe merch i form af t-shirt, hoodies og sweatshirts, som alle vil have et unikt design. Ikke nok med at det giver et cool udtryk med en "Kanten"-t-shirt, du støtter også op om Foreningen Kanten og hjælper med at sprede budskabet om Kanten.</p>
    </div>
</div>


<div class="boks2">
    <div class="inner-boks2">
        <img id="t-shirt" src="../assets/t-shirt.png" alt="">
        <img id="hoodie" src="../assets/hoodie-kopi.png" alt="">
        <img id="sweatshirt" src="../assets/sweatshirt-kopi.png" alt="">
    </div>
</div>
</template>


<script setup>
</script>


<style scoped>
.boks1 {
    background-color: rgb(0, 0, 0);
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
    background-color: rgb(0, 0, 0);
    height: 450px;
}

.inner-boks2 {
    background-color: rgb(0, 0, 0);
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#t-shirt{
    height: 90%;
    margin-right: 40px;
}

#hoodie{
    height: 90%;
    margin-right: 40px;
}

#sweatshirt{
    height: 90%;
}


.inner-boks3 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.button {
  background-color: rgb(0, 0, 0);
  color: #e6e6e6;
  border: 2px solid #e6e6e6;
}
</style>