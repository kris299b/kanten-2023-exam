<template>
  <div class="box1">
    <div class="inner-box1">
      <img id="community" src="../assets/community.jpg" alt="">
      <div class="centered">
        <h1>FRIVILLIGT ARBEJDE HOS KANTEN</h1>
        <p id="spillestedet">Spillestedet Kanten er drevet af Foreningen Kanten, som er et fællesskab af unge esbjergensere og tilflyttere, der med åbningen af Kanten vil skabe en frivilligt drevet foreningen med mulighed for medlemskab. Alle typer er velkommen og vi ønsker gennem musik og kunst-events at løfte det kulturelle liv i Esbjerg.</p>
      </div>
    </div>
  </div>

  <div class="box2">
    <div class="inner-box2">
      <h2>HVORFOR BLIVE FRIVILLIG HOS KANTEN?</h2>
      <p>Som frivillig hos Kanten, vil du få mulighed for at prøve kræfter af med en masse forskellige arbejdsopgaver der relatere sig til kulturaktør og eventbranchen. Hvis du har et felt eller område du er særligt interesseret i, kan du ved hjælp af mesterlære hos vores kyndige folk i Kanten, opnå og mestre den færdighed til det næste niveau og for alvor dygtiggøre dig. Du vil derudover tage del i et helt unikt fællesskab, hvor alle er velkommen præcis som de er og hvor du vil føle dig inkluderet. Efter du har ansøgt som frivillig, vil du blive inviteret ind til en hyggelig samtale, hvor vi vil fortælle dig lidt mere omkring de forskellige arbejdsopgaver og grupper man som frivillig arbejder med/i. Her vil vi også få mulighed for at lære dig lidt bedre at kende og du vil selvfølgelig blive vist rundt i Huset Esbjerg, som er her Kanten holder til.</p>
    </div>

    <div class="box3">
      <h2>LIDT VIGTIG INFORMATION</h2>
      <p>Går du og overvejer at blive en del af Kanten-familien, som frivillig, er det vigtigt for os at understrege vigtigheden af det arbejde du som frivillig vil varetage. Det frivillige arbejde du udfører i sammenhold med de andre frivillige, er dét der er hele essensen af vores forening. Det er dig, og kun dig der vælger hvor meget tid og kræfter du har lyst til at ligge i Kanten, det skal være lige så sjovt for dig, som det er for os at være så heldige at have dig med ombord. Det eneste vi forventer af dig som frivillig er, at du skal komme til bestyrelsen hvis det bliver for hårdt, ubehageligt eller lignende at være frivillig. Så finder vi ud af det sammen.</p>
    </div>
  </div>


  <section class="bg-white dark:bg-black">
  <div class="py-8 md:pt-32 lg:pt-16 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-base md:text-xl lg:text-3xl tracking-tight 0.1em; font-bold font-sans text-center text-gray-900 dark:text-white">SKAL DU VÆRE MED PÅ HOLDET?</h2>
      <p class="pl-5 pr-5 mb-8 lg:mb-16 font-light font-serif text-center text-gray-500 dark:text-gray-400 text-sm md:text-base lg:text-base">Kunne du tænke dig at blive en del af holdet og indgå i et kæmpe fællesskab, hvor alle er velkommen og kan føle sig inkluderet? Så tøv endelig ikke med at udfylde formularen herunder. Vi glæder os til at høre fra dig.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-xs md:text-base font-semibold text-gray-900 dark:text-gray-300 ml-4 md:ml-24 lg:ml-5">Navn</label>
              <input type="email" id="email" class="shadow-sm sm:bg-neutral-200 md:bg-neutral-200 lg:bg-neutral-200 border border-gray-300 text-gray-900 text-xs md:text-base focus:ring-primary-500 focus:border-primary-500 block w-9/12 lg:w-full p-2.5 ml-4 md:ml-24 lg:ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-xs md:text-base font-semibold text-gray-900 dark:text-gray-300 ml-4 md:ml-24 lg:ml-5">Email</label>
              <input type="text" id="subject" class="w-9/12 block p-3 lg:w-full ml-4 md:ml-24 lg:ml-5 text-xs md:text-base text-gray-900 sm:bg-neutral-200 md:bg-neutral-200 lg:bg-neutral-200 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-xs md:text-base font-semibold text-gray-900 dark:text-gray-300 ml-4 md:ml-24 lg:ml-5">Skriv lidt om dig selv</label>
              <textarea id="message" rows="6" class="w-9/12 lg:w-full block p-2.5 ml-4 md:ml-24 lg:ml-5 text-xs md:text-base text-gray-900 sm:bg-neutral-200 md:bg-neutral-200 lg:bg-neutral-200 shadow-sm border border-gray-300 focus:ring-slate-50 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=""></textarea>
          </div>
          <button type="submit" class="py-1 px-5 ml-4 md:ml-24 lg:ml-5 text-sm md:text-base lg:text-base font-semibold text-center text-white bg-black border-2 border-slate-300 sm:w-fit hover:bg-orange-400 hover:text-black hover:font-semibold hover:border-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SEND</button>
      </form>
  </div>
  </section>
</template>


<script setup>
</script>


<style scoped>
.box1 {
  background-color: black;
}

.inner-box1 {
  height: auto;
  position: relative;
  text-align: center;
  color: white;
}

#community {
  opacity: 0.3;
  max-width: 100%;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 45px;
  font-weight: 600;
  padding-bottom: 20px;
  color: #e7e7e7;
}

#spillestedet {
  font-size: 16px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
}
.box3 {
  background-color:rgb(0, 0, 0);
  width: 80%;
  margin: auto;
  margin-top: 40px;
  padding-top: 40px;
}

p {
  color: #e7e7e7;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align:justify;
}

h2 {
  color: #e7e7e7;
  font-size: 22px;
  font-weight: 600;
}




/* Small Devices, Phones */ 
@media only screen and (min-width : 375px) {
.inner-box1 {
  height: auto;
}

.centered {
  top: 50%;
  left: 10%;
  transform: translate(-6%, -50%);
}

h1 {
  font-size: 17px;
  padding-bottom: 5px;
}

#spillestedet {
  font-size: 11px;
}

.box2 {
  height: 600px;
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
  padding-top: 40px;
}

p {
  font-size: 12px;
}

h2 {
  font-size: 14px;
  padding-bottom: 5px;
}
}



/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
.inner-box1 {
  height: auto;
  width: 100%;
}

h1 {
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 20px;
  letter-spacing: 5px;
}
.centered {
  top: 50%;
  left: 30%;
  transform: translate(-22%, -50%);
}

#spillestedet {
  font-size: 15px;
}

.box2 {
  height: 480px;
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

p {
  font-size: 15px;
}

h2 {
  font-size: 18px;
}
}



/* Medium Devices, Desktops */
@media only screen and (min-width : 1024px) {
.inner-box1 {
  height: auto;
}

h1 {
  font-size: 40px;
}

#spillestedet {
  font-size: 18px;
}

#community {
  opacity: 0.3;
  max-width: 100%;
}

.centered {
  top: 50%;
  left: 30%;
  transform: translate(-21%, -50%);
}

.box2 {
  height: 520px;
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

p {
  font-size: 16px;
}

h2 {
  font-size: 22px;
}
}



/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
.inner-box1 {
  height: auto;
}

.centered {
  top: 50%;
  left: 30%;
  transform: translate(-21%, -50%);
}

h1 {
  font-size: 45px;
  padding-bottom: 20px;
}

#spillestedet {
  font-size: 18px;
}

.box2 {
  height: 520px;
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

p {
  font-size: 16px;
}

h2 {
  font-size: 22px;
}
}
</style>