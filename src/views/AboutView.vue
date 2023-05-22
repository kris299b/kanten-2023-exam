<template>
    <div class="container">
      <div class="item1">
        <img id="collage-aboutpage" src="../assets/collage-for-aboutpage.png" alt="">
        <div class="centered">
          <h1>HVEM ER VI?</h1>
          <p>Kanten bliver Esbjergs nye kulturfællesskab, drevet af Foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på - dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie. </p>
        </div>
      </div>
    </div>

    <div class="container2">
      <div class="item2">
        <h2>SPILLESTEDET, KANTEN</h2>
        <p>Spillestedet Kanten åbnede d. 12 maj på 1. Sal på Huset Esbjerg. Det kommer til at være Esbjergs nye brændpunkt for det lokale musikalske vækstlag, samt ungdommen. Spillestedet, der primært beskæftiger sig med vækstlaget i undergroundmusik, kommer til at huse alt fra kunst ferniseringer og DJ skole, til elektroniske fester og koncerter med plads til mangfoldighed. Esbjerg mangler flere spillesteder og kulturtiltag, og her vil Kanten være et trygt alternativ, med en safe-space politik som vil gøre Esbjergs natteliv mere trygt. På samme måde er det vores ambition at skabe en alternativ platform for ungdomsmiljøet i Esbjerg, hvor musikprogrammet er præget af et alsidigt udvalg af subgenrer på tværs af køn og identiteter. På første sal i Huset Esbjergs lokaler, skaber vi et ungekulturhus og kulturfællesskab blandt unge. </p>
      </div>

      <div class="item3">
        <h2>KRAFTVÆRKET</h2>
        <p>Esbjerg har i flere år manglet gængse øvelokaler med mulighed for indspilning, og her vil Kanten give muligheden for at benytte sig af et lydstudie samt et øvelokale af høj kvalitet. I kraft af Kantens vision om at hjælpe det musikalske vækstlag med at skabe musik, så vil der tilbydes en lydtekniker som ifølge aftale kan undervise i lydstudieteknik - alt efter behov. Med Kraftværkets placering i Østerbyen vil vi løfte interessen for musik, særligt for de lokale unge. Det vil vi f.eks. gøre med undervisning i øjenhøjde og med kendskab til unge i området. Kraftværket kan benyttes af alle der spiller, eller gerne vil spille musik.</p>
      </div>
    </div>

    <div class="item4">
      <img id="kraftværket" src="../assets/krafværket-studio.jpg" alt="">
    </div>


    <div class="container3">
      <div class="item5">
        <h3>KANTENS</h3>
        <h4>samarbejdspartnere</h4>
      </div>

      <div class="item6">
        <div class="inner-item1">
          <p>Sex & Samfund</p>
          <p>Esbjerg Kommune</p>
          <p>Copenhagen Pride</p>
          <p>Volcano</p>
        </div>

        <div class="inner-item2">
          <p>Royalties</p>
          <p>Roskilde Festival</p>
          <p>Mino Ung</p>
        </div>
      </div>
    </div>
</template>
  
<style>
body {
  background-color: black;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

#collage-aboutpage {
  opacity: 0.5;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 50px;
  padding-bottom: 20px;
}

.p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}



.item2 {
  height: 280px;
  width: 80%;
  margin: auto;
  border: solid 3px;
  border-color: white;
  padding: 20px;
  padding-top: 30px;
  margin-top: 50px;
  margin-bottom: 40px;

}


.item3 {
  height: 270px;
  width: 80%;
  margin: auto;
  border: solid 3px;
  border-color: white;
  padding: 20px;
  padding-top: 50px;
  margin-bottom: 30px;
  
}

h2 {
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding-bottom: 10px;
}

p {
  color: white;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#kraftværket {
  width: 90%;
  margin: auto;
}


.container3 {
  height: 500px;
  margin-top: 40px;
  padding-top: 40px;
}

.item5 {
  width: 45%;
  margin: auto;
  margin-top: 40px;
  padding-top: 20px;
  border-top: solid 2px;
  border-left: solid 2px;
  border-right: solid 2px;
  border-color: white;
}

h3 {
  font-size: 45px;
  color: white;
  text-align: center;
  font-weight: bold;
  letter-spacing: 15px;
}

h4 {
  font-size: 25px;
  color: white;
  text-align: center;
}

.item6 {
  height: 180px;
  width: 45%;
  display: flex;
  margin: auto;
  border-bottom: solid 2px;
  border-left: solid 2px;
  border-right: solid 2px;
  border-color: white;
}

.inner-item1 {
  width: 150px;
  margin: auto;
}

.inner-item2 {
  width: 150px;
  margin: auto;
}


</style>
  