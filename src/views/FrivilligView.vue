<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-10">
            <div>
              <p class="font-sans sm:Roboto md:block font-sans text-2xl md:text-5xl lg:text-7xl text-black font-semibold mt-5 md:mt-20 lg:mt-20 tracking-widest">KANTEN</p>
              <p class="font-sans sm:Roboto md:block font-sans text-xs md:text-sm lg:text-2xl text-black py-0 md:py-1 lg:py-3 tracking-widest">VIL DU VÆRE EN DEL AF HOLDET ?</p>
            </div>
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="invisible md:invisible lg:visible w-20 h-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/frivillig-2-copy.jpg" alt="">
  </div>


  <div class="box2">
    <p id="spillestedet">Spillestedet Kanten er drevet af Foreningen Kanten, som er et fællesskab af unge esbjergensere og tilflyttere, der med åbningen af Kanten vil skabe en frivilligt drevet foreningen med mulighed for medlemskab. Alle typer er velkommen og vi ønsker gennem musik og kunst-events at løfte det kulturelle liv i Esbjerg.</p>
   
    <div class="inner-box2">
      <h2>HVORFOR BLIVE FRIVILLIG HOS KANTEN?</h2>
      <p id="paragraf"> Som frivillig hos Kanten, vil du få mulighed for at prøve kræfter af med en masse forskellige arbejdsopgaver der relatere sig til kulturaktør og eventbranchen. Hvis du har et felt eller område du er særligt interesseret i, kan du ved hjælp af mesterlære hos vores kyndige folk i Kanten, opnå og mestre den færdighed til det næste niveau og for alvor dygtiggøre dig. Du vil derudover tage del i et helt unikt fællesskab, hvor alle er velkommen præcis som de er og hvor du vil føle dig inkluderet. Efter du har ansøgt som frivillig, vil du blive inviteret ind til en hyggelig samtale, hvor vi vil fortælle dig lidt mere omkring de forskellige arbejdsopgaver og grupper man som frivillig arbejder med/i. Her vil vi også få mulighed for at lære dig lidt bedre at kende og du vil selvfølgelig blive vist rundt i Huset Esbjerg, som er her Kanten holder til.</p>
    </div>

    <div class="box3">
      <h2>LIDT VIGTIG INFORMATION</h2>
      <p id="paragraf">Går du og overvejer at blive en del af Kanten-familien, som frivillig, er det vigtigt for os at understrege vigtigheden af det arbejde du som frivillig vil varetage. Det frivillige arbejde du udfører i sammenhold med de andre frivillige, er dét der er hele essensen af vores forening. Det er dig, og kun dig der vælger hvor meget tid og kræfter du har lyst til at ligge i Kanten, det skal være lige så sjovt for dig, som det er for os at være så heldige at have dig med ombord. Det eneste vi forventer af dig som frivillig er, at du skal komme til bestyrelsen hvis det bliver for hårdt, ubehageligt eller lignende at være frivillig. Så finder vi ud af det sammen.</p>
    </div>
  </div>

  <div class="box4">
    <div>
      <EmailView />
    </div>
  </div>
 

</template>


<script setup>
 import EmailView from '@/views/EmailView.vue'
</script>


<style scoped>
#spillestedet {
  font-size: 16px;
  width: 80%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: auto;
  margin-bottom: 40px;
  color: #e7e7e7;
}

.box2 {
  background-color:rgb(0, 0, 0);
  height: 520px;
  padding-top: 40px;
}
.inner-box2 {
  background-color:rgb(0, 0, 0);
  width: 80%;
  margin: auto;
  padding-top: 0;
  margin-bottom: 40px;
  margin-top: 40px;
}
.box3 {
  background-color:rgb(0, 0, 0);
  width: 80%;
  margin: auto;
  margin-top: 40px;
  padding-top: 40px;
}

#paragraf {
  color: #e7e7e7;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align:justify;
}

h2 {
  color: #e7e7e7;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

.box4 {
  background-color: black;
  height: 600px;
  padding-top: 40px;
}



/*
@media only screen and (min-width: 360px) and (max-width: 767px) {  
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
}

@media only screen and (min-width: 1024px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1535px) {
}

@media only screen and (min-width: 1536px) {
}
*/


/* Small Devices, Phones */ 
@media only screen and (min-width : 375px) {

#spillestedet {
  font-size: 13px;
  width: 90%;
}

.box2 {
  height: 830px;
  padding-top: 25px;
}
.inner-box2 {
  width: 90%;
  padding-top: 0;
  margin-bottom: 40px;
}
.box3 {
  width: 90%;
  margin-top: 40px;
  padding-top: 10px;
}

#paragraf {
  font-size: 13px;
}

h2 {
  font-size: 14px;
  padding-bottom: 4px;
}


/*Tailwind*/
#email {
  color: black;
  background-color: #e7e7e7;
  width: 80%;
  margin:auto;
}

#subject {
  color: black;
  background-color: #e7e7e7;
  width: 80%;
  margin:auto;
}

#message {
  color: black;
  background-color: #e7e7e7;
  width: 80%;
  margin:auto;
}
}



/* Medium Devices, Tablets/laptops*/
@media only screen and (min-width : 810px) {

#spillestedet {
  font-size: 15px;
}

.box2 {
  height: 580px;
  padding-top: 20px;
}
.inner-box2 {
  width: 90%;
  padding-top: 0;
  margin-bottom: 30px;
}
.box3 {
  width: 90%;
  margin-top: 40px;
  padding-top: 20px;
}

#paragraf {
  font-size: 15px;
}

h2 {
  font-size: 18px;
}



/*Tailwind*/
#email {
  color: black;
}

#subject {
  color: black;
}

#message {
  color: black;
}
}


/* Large Devices, Desktop */
@media only screen and (min-width : 1200px) {

#spillestedet {
  font-size: 18px;
  width: 80%;
}

.box2 {
  height: 620px;
  padding-top: 40px;
}
.inner-box2 {
  width: 80%;
  padding-top: 0;
  margin-bottom: 40px;
}
.box3 {
  width: 80%;
  margin-top: 40px;
  padding-top: 40px;
}

#paragraf {
  font-size: 16px;
}

h2 {
  font-size: 22px;
}




/*Tailwind*/
#email {
  color: black;
}

#subject {
  color: black;
}

#message {
  color: black;
}
}
</style>
