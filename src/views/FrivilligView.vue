<template>
  <div class="container1">
    <div class="item1">
      <img id="community" src="../assets/community.jpg" alt="">
      <div class="centered">
        <h1>BLIV EN DEL AF KANTEN</h1>
        <p>Spillestedet Kanten er drevet af Foreningen Kanten, som er et fællesskab af unge esbjergensere og tilflyttere, der med åbningen af Kanten vil skabe en frivilligt drevet foreningen med mulighed for medlemskab. Alle typer er velkommen og vi ønsker gennem musik og kunst-events at løfte det kulturelle liv i Esbjerg.</p>
      </div>
    </div>
  </div>

  <div class="container2">
    <div class="item2">
      <h2>HVORFOR BLIVE FRIVILLIG HOS KANTEN?</h2>
      <p>Som frivillig hos Kanten, vil du få mulighed for at prøve kræfter af med en masse forskellige arbejdsopgaver der relatere sig til kulturaktør og eventbranchen. Hvis du har et felt eller område du er særligt interesseret i, kan du ved hjælp af mesterlære hos vores kyndige folk i Kanten, opnå og mestre den færdighed til det næste niveau og for alvor dygtiggøre dig. Du vil derudover tage del i et helt unikt fællesskab, hvor alle er velkommen præcis som de er og hvor du vil føle dig inkluderet. Efter du har ansøgt som frivillig, vil du blive inviteret ind til en hyggelig samtale, hvor vi vil fortælle dig lidt mere omkring de forskellige arbejdsopgaver og grupper man som frivillig arbejder med/i. Her vil vi også få mulighed for at lære dig lidt bedre at kende og du vil selvfølgelig blive vist rundt i Huset Esbjerg, som er her Kanten holder til.</p>
    </div>

    <div class="item3">
      <h2>LIDT VIGTIG INFORMATION</h2>
      <p>Går du og overvejer at blive en del af Kanten-familien, som frivillig, er det vigtigt for os at understrege vigtigheden af det arbejde du som frivillig vil varetage. Det frivillige arbejde du udfører i sammenhold med de andre frivillige, er dét der er hele essensen af vores forening. Det er dig, og kun dig der vælger hvor meget tid og kræfter du har lyst til at ligge i Kanten, det skal være lige så sjovt for dig, som det er for os at være så heldige at have dig med ombord. Det eneste vi forventer af dig som frivillig er, at du skal komme til bestyrelsen hvis det bliver for hårdt, ubehageligt eller lignende at være frivillig. Så finder vi ud af det sammen.</p>
    </div>
  </div>



  <section class="bg-white dark:bg-black">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">VIL DU VÆRE MED PÅ HOLDET?</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Kunne du tænke dig at blive en del af holdet og indgå i et kæmpe fællesskab hvor alle er velkommen og kan føle sig inkluderet? Så tøv endelig ikke med at udfylde formularen herunder. Vi glæder os til at høre fra dig.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Navn</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dit navn..." required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Email</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Din email..." required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Skriv lidt om dig selv</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Fortæl om dig selv..."></textarea>
          </div>
          <button type="submit" class="py-2 px-5 text-sm lg:text-medium font-semibold text-center text-white bg-black border-2 border-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SEND</button>
      </form>
  </div>
</section>

</template>

<script>

</script>

<style scoped>
.container1 {
  background-color: black;
  height: 500px;
  position: relative;
  text-align: center;
  color: white;
}

#community {
  opacity: 0.3;
}

.centered {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}


p {
  color: white;
}

</style>