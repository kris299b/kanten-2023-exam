<template>

<div class="boks1">
    <div class="inner-boks1">
        <h1>MERCHANDISE</h1>
        <p id="paragraf">Her på siden kan du købe merch i form af t-shirt, hoodies og sweatshirts, som alle vil have et unikt design. Ikke nok med at det giver et cool udtryk med en "Kanten"-item, du støtter også op om Foreningen Kanten og hjælper med at sprede budskabet om Kanten.</p>
    </div>
</div>


<div class="boks2">
    <div class="inner-boks2">
        <img id="t-shirt" src="../assets/t-shirt.png" alt="">
        <button class="button">SE T-SHIRTS</button>
    </div>

    <div class="inner-boks3">
        <img id="hoodie" src="../assets/hoodie-kopi.png" alt="">
        <button class="button">SE HOODIES</button>
    </div>

    <div class="inner-boks4">
        <img id="sweatshirt" src="../assets/sweatshirt-kopi.png" alt="">
        <button class="button">SE SWEATSHIRTS</button>
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
    width: 60%;
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
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.boks2 {
    background-color: rgb(0, 0, 0);
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
}

.inner-boks2 {
    background-color: rgb(0, 0, 0);
    height: 400px;
    width: 33.3%;
    margin: auto;
    text-align: center;
}

#t-shirt{
    height: 90%;
    margin: auto;
}

.inner-boks3 {
    background-color: rgb(0, 0, 0);
    height: 400px;
    width: 33.3%;
    text-align: center;
}

#hoodie{
    height: 90%;
    margin: auto;
}

.inner-boks4 {
    background-color: rgb(0, 0, 0);
    height: 400px;
    width: 33.3%;
    text-align: center;
}

#sweatshirt{
    height: 90%;
    margin: auto;
}


.inner-boks3 {
    background-color: rgb(0, 0, 0);
    height: 400px;
}
.button {
  background-color: rgb(0, 0, 0);
  color: #e6e6e6;
  font-weight: 600;
  border: 2px solid #e6e6e6;
  margin-top: 10px;
  padding: 5px;
}

.button:hover {
    background-color: #fb923c;
    border-color: #fb923c;
    color: black;
}



/* Small Devices, Phones */ 
@media only screen and (min-width : 375px) {
    .boks1 {
        height: 200px;
    }

    .inner-boks1 {
        height: 200px;
        padding-top: 30px;
        width: 70%;
    }

    h1 {
        font-size: 18px;
        letter-spacing: 10px;
        padding-bottom: 10px;
    }

    #paragraf {
        font-size: 12px;
    }
    .boks2 {
        height: 1300px;
        width: 100%;
        display: grid;
        padding-bottom: 40px;
    }
    .inner-boks2 {
        height: 400px;
        width: 100%;
    }

    #t-shirt{
        height: 80%;
    }
    .inner-boks3 {
        height: 400px;
        width: 100%;
    }

    #hoodie{
        height: 80%;
    }
    .inner-boks4 {
        height: 400px;
        width: 100%;
    }

    #sweatshirt{
        height: 80%;
    }
    .inner-boks3 {
        height: 400px;
    }
    .button {
        margin-top: 20px;
        margin-bottom: 40px;
        padding: 5px;
        font-size: 15px;
    }
}



/* Medium Devices, Tablets */
@media only screen and (min-width : 768px) {
    .boks1 {
        height: 200px;
    }

    .inner-boks1 {
        height: 200px;
        padding-top: 30px;
        width: 70%;
    }

    h1 {
        font-size: 30px;
        letter-spacing: 10px;
        padding-bottom: 20px;
    }

    #paragraf {
        font-size: 13px;
    }
    .boks2 {
        height: 500px;
        width: 100%;
        display: flex;
        padding-bottom: 40px;
    }
    .inner-boks2 {
        height: 400px;
        width: 33.3%;
    }

    #t-shirt{
        height: 80%;
    }
    .inner-boks3 {
        height: 400px;
        width: 33.3%;
    }

    #hoodie{
        height: 80%;
    }
    .inner-boks4 {
        height: 400px;
        width: 33.3%;
    }

    #sweatshirt{
        height: 80%;
    }
    .inner-boks3 {
        height: 400px;
    }
    .button {
        margin-top: 20px;
        padding: 5px;
    }
}



/* Large Devices, Desktops */
    @media only screen and (min-width : 1024px) {
    .boks1 {
        height: 250px;
    }

    .inner-boks1 {
        height: 200px;
        padding-top: 30px;
        width: 60%;
    }

    h1 {
        font-size: 45px;
        letter-spacing: 15px;
        padding-bottom: 20px;
    }

    #paragraf {
        font-size: 16px;
    }
    .boks2 {
        height: 500px;
        width: 100%;
        display: flex;
        padding-bottom: 40px;
    }
    .inner-boks2 {
        height: 400px;
        width: 33.3%;
    }

    #t-shirt{
        height: 90%;
    }
    .inner-boks3 {
        height: 400px;
        width: 33.3%;
    }

    #hoodie{
        height: 90%;
    }
    .inner-boks4 {
        height: 400px;
        width: 33.3%;
    }

    #sweatshirt{
        height: 90%;
    }
    .inner-boks3 {
        height: 400px;
    }
    .button {
        margin-top: 10px;
        padding: 5px;
    }
}
</style>