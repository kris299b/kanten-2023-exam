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




/* @media (width < 640px) {
    .boks1 {
        background-color: rgb(0, 0, 0);
        height: 220px;
    }

    .inner-boks1 {
        background-color: #000000;
        height: 200px;
        padding-top: 30px;
        width: 90%;
    }

    h1 {
        font-size: 22px;
        letter-spacing: 10px;
        padding-bottom: 10px;
    }

    #paragraf {
        font-size: 11px;
    }

    .boks2 {
        background-color: rgb(0, 0, 0);
        height: 1300px;
        width: 100%;
        display: grid;
        padding-bottom: 40px;
    }

    .inner-boks2 {
        background-color: rgb(0, 0, 0);
        height: 400px;
        width: 100%;
        margin-bottom: 30px;
    }

    #t-shirt{
        height: 80%;
    }

    .inner-boks3 {
        background-color: rgb(0, 0, 0);
        height: 400px;
        width: 100%;
        margin-bottom: 30px;
    }

    #hoodie{
        height: 80%;
    }

    .inner-boks4 {
        background-color: rgb(0, 0, 0);
        height: 400px;
        width: 100%;
        text-align: center;
    }

    #sweatshirt{
        height: 80%;
    }


    .inner-boks3 {
        background-color: rgb(0, 0, 0);
        height: 400px;
    }
    .button {
        margin-top: 15px;
        padding: 5px;
        font-size: 15px;
    }
}




@media (min-width: 768px) {

.inner-boks1 {
    width: 70%;
}

h1 {
    font-size: 30px;
}

#paragraf {
    font-size: 16px;
}

#t-shirt{
    height: 80%;
}

#hoodie{
    height: 80%;
}

#sweatshirt{
    height: 80%;
}
.button {
  margin-top: 20px;
}
}



@media (min-width: 992px) {
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
} */



/* Custom, iPhone Retina */ 
@media only screen and (min-width : 320px) {

}



/* Extra Small Devices, Phones */ 
@media only screen and (min-width : 480px) {

}



/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {

}



/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {

}



/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
  
}
</style>