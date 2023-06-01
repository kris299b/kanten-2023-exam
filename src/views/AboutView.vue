<template>
    <div class="container1">
      <div class="item1">
        <img id="collage-aboutpage" src="../assets/collage-for-aboutpage.png" alt="">
        <div class="centered">
          <h1>KANTEN</h1>
          <h1 id="unge">- En ungdomsforening drevet af unge</h1>
          <p id="kanten">Kanten bliver Esbjergs nye kulturfællesskab, drevet af Foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på - dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie. </p>
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

    <div class="container3">
      <img id="kraftværket" src="../assets/krafværket-studio.jpg" alt="">
    </div>


    <div class="container4">
      <div class="item4">
        <h3>KANTENS</h3>
        <h4>samarbejdspartnere</h4>
      </div>

      <div class="item5">
        <div class="inner-item1">
          <a id="ss" href="https://sexogsamfund.dk/">Sex & Samfund</a><br>
          <a href="https://www.esbjerg.dk/">Esbjerg Kommune</a><br>
          <a href="https://www.copenhagenpride.dk/">Copenhagen Pride</a>
        </div>

        <div class="inner-item2">
          <a href="https://royalties.dk/">Royalties</a><br>
          <a href="https://www.roskilde-festival.dk/da/">Roskilde Festival</a><br>
          <a href="https://www.minoung.dk/">Mino Ung</a>
        </div>
      </div>
    </div>
</template>
  
<style scoped>
.container1 {
  background-color: rgb(0, 0, 0);
  height: 570px;
}

.item1 {
  background-color: rgb(0, 0, 0);
  position: relative;
  text-align: center;
  color: #e7e7e7;
  height: 570px;
}

#collage-aboutpage {
  opacity: 0.3;
}

.centered {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-10%, -50%);
}

h1 {
  font-size: 45px;
  font-weight: 600;
  padding-bottom: 20px;
  letter-spacing: 8px;
}

#unge {
  font-size: 20px;
  letter-spacing: 0px;
  padding-bottom: 40px;
  font-style: italic;
}

#kanten {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  font-size: 16px;
}


.container2 {
  background-color: rgb(0, 0, 0);
  margin: 0;
}
.item2 {
  background-color: rgb(0, 0, 0);
  height: 280px;
  width: 80%;
  margin: auto;
  padding: 20px;
  padding-top: 30px;
  margin-bottom: 40px;

}
.item3 {
  background-color: rgb(0, 0, 0);
  height: 270px;
  width: 80%;
  margin: auto;
  padding: 20px;
  padding-top: 50px;
}

h2 {
  font-size: 22px;
  font-weight: bold;
  color: #e7e7e7;
  padding-bottom: 0px;
}

p {
  color: #e7e7e7;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align:justify;
}


.container3 {
  background-color: #000000;
  padding-bottom: 40px;
}

#kraftværket {
  width: 90%;
  margin: auto;
}


.container4 {
  background-color: rgb(0, 0, 0);
  height: 500px;
  padding-top: 40px;
}

.item4 {
  background-color: rgb(0, 0, 0);
  width: 50%;
  margin: auto;
  margin-top: 40px;
  padding-top: 20px;
  border-top: solid 2px;
  border-left: solid 2px;
  border-right: solid 2px;
  color: #e7e7e7;
}

h3 {
  color: #e7e7e7;
  text-align: center;
  font-weight: bold;
  letter-spacing: 20px;
  font-size: 40px;
}

h4 {
  font-size: 23px;
  color: #e7e7e7;
  text-align: center;
}

.item5 {
  height: 180px;
  width: 50%;
  display: flex;
  margin: auto;
  border-bottom: solid 2px;
  border-left: solid 2px;
  border-right: solid 2px;
  color: #e7e7e7;
}

.inner-item1 {
  background-color: #000000;
  width: 190px;
  height: 80px;
  margin: auto;
}


.inner-item2 {
  width: 150px;
  height: 80px;
  margin: auto;
}

a:hover {
  color: #fb923c;
}



/* Extra Small Devices, Phones */ 
@media only screen and (min-width : 480px) {
  .container1 {
    height: auto;
  }
  .item1 {
    height: auto;
  }

  .centered {
    top: 20%;
    left: 15%;
    transform: translate(-8%, -50%);
  }

  h1 {
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 5px;
  }

  #unge {
    font-size: 17px;
    padding-bottom: 12px;
  }

  #kanten {
    font-size: 14px;
  }
  .item2 {
    height: 320px;
    width: 95%;
    padding: 5px;
    padding-top: 30px;
    margin-bottom: 5px;
  }
  .item3 {
    height: 250px;
    width: 95%;
    padding: 5px;
    padding-top: 20px;
  }

  h2 {
    font-size: 17px;
    padding-bottom: 4px;
  }

  p {
    font-size: 14px;
  }

  #kraftværket {
    width: 95%;
  }

  .container4 {
    height: 400px;
    padding-top: 40px;
  }

  .item4 {
    width: 90%;
  }

  h3 {
    font-size: 20px;
    padding-left: 17px;
  }

  h4 {
    font-size: 18px;
  }

  .item5 {
    height: 150px;
    width: 90%;
    display: flex;
  }

  .inner-item1 {
    width: 190px;
    height: 80px;
    margin: auto;
  }


  .inner-item2 {
    width: 150px;
    height: 80px;
    margin: auto;
  }
}



/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
  .container1 {
    height: auto;
  }

  .centered {
    top: 50%;
    left: 17%;
    transform: translate(-10%, -50%);
  }
  .item1 {
    height: auto;
  }
  .item2 {
    height: 260px;
  }
  .item3 {
    height: 240px;
  }

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }

}



/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
  .container1 {
    height: auto;
  }
  .item1 {
    height: auto;
  }
  
  .centered {
    transform: translate(-12%, -50%);
  }

  h1 {
    font-size: 45px;
  }

  #unge {
    font-size: 20px;
  }

  #kanten {
    font-size: 16px;
  }

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
  .item4 {
    width: 50%;
    margin-top: 40px;
    padding-top: 20px;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 23px;
  }

  .item5 {
    height: 180px;
    width: 50%;
  }
  .inner-item1 {
    width: 150px;
    height: 80px;
  }
  .inner-item2 {
    width: 150px;
    height: 80px;
  }
}



/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
  .container1 {
    height: auto;
  }
  .item1 {
    height: auto;
  }
  
  .centered {
    top: 50%;
    left: 20%;
    transform: translate(-10%, -50%);
  }

  h1 {
    font-size: 45px;
    padding-bottom: 20px;
    letter-spacing: 8px;
  }

  #unge {
    font-size: 20px;
    letter-spacing: 0px;
    padding-bottom: 40px;
  }

  #kanten {
    font-size: 16px;
  }
  .container2 {
    margin: 0;
  }
  .item2 {
    height: 280px;
    width: 80%;
    padding: 20px;
    padding-top: 30px;
    margin-bottom: 40px;
  }
  .item3 {
    height: 270px;
    width: 80%;
    padding: 20px;
    padding-top: 50px;
  }

  h2 {
    font-size: 22px;
    padding-bottom: 0px;
  }

  p {
    font-size: 16px;
  }
  .container3 {
    padding-bottom: 40px;
  }
  .container4 {
    height: 500px;
    padding-top: 40px;
  }

  .item4 {
    width: 50%;
    margin-top: 40px;
    padding-top: 20px;
  }

  h3 {
    letter-spacing: 20px;
    font-size: 40px;
  }

  h4 {
    font-size: 23px;
  }

  .item5 {
    height: 180px;
    width: 50%;
    display: flex;
    margin: auto;
  }

  .inner-item1 {
    background-color: #000000;
    width: 190px;
    height: 80px;
    margin: auto;
  }


  .inner-item2 {
    width: 150px;
    height: 80px;
    margin: auto;
    padding: 0;
  }
}
</style>
  