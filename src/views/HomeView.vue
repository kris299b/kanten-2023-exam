<template>   
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-10">
            <div>
              <p class="font-sans Roboto md:block font-sans text-4xl sm:text-7xl md:text-6xl lg:text-8xl text-black font-semibold mt-5 md:mt-10 lg:mt-20 tracking-widest">KANTEN</p>
              <p class="font-sans Roboto md:block font-sans text-xs sm:text-2xl md:text-lg lg:text-2xl text-white font-normal mt-1 md:mt-1 lg:mt-2 mb-4 tracking-widest">KULTUR | MUSIK | FÆLLESSKAB</p>
            </div>
            <button class="invisible sm:visible text-sm md:text-xs lg:text-xs font-bold bg-black hover:bg-black text-white font-bold hover:text-white py-1 px-4 sm:py-2 mr-5 border-2 border border-black hover:border-blak tracking-widest">
            <RouterLink to="/events">SE EVENTS</RouterLink>
            </button>
            <button class="invisible sm:visible text-sm md:text-xs lg:text-xs font-bold bg-transparent hover:bg-orange-400 text-black font-bold hover:text-white py-1 px-4 sm:py-2 sm:px-4 border-2 border border-black hover:border-orange-400 tracking-widest">
            <RouterLink to="/frivillig">BLIV FRIVILLIG</RouterLink>
            </button>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/kanten-farver1.jpg" alt="">
  </div>


<!--Dette område er Mailchimp-signup-->
<div class="mailchimp-område py-10 md:py-10 lg:py-10 px-10 md:px-5 lg:px-4">
    <div class="font-sans Roboto tracking-widest font-normal text-lg md:text-2xl lg:text-2xl py-3 md:py-5 lg:py-5 text-white text-center"> NYHEDSBREV<div>
      <p class="font-sans arial tracking-widest font-light text-xs md:text-sm lg:text-md text-white text-center pt-2 md:pt-3 lg:pt-3 px-3 md:px-40 lg:px-40">Tilmeld dig vores nyhedsbrev, og hold dig opdateret. </p>
    </div>
</div>
<div id="mc_embed_signup">
<form action="https://gmail.us21.list-manage.com/subscribe/post?u=4647b8b842810351f756a5c6d&amp;id=322f56a61f&amp;f_id=003354e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
  <div class="mc-field-group md:ml-2 text-white">
    <div class="text-sm pt-0 md:pt-0 lg:pt-0">
      <label for="mce-FNAME">Navn *</label>
      <input type="text" value="" name="FNAME" class="required text-sm" placeholder="Dit navn" id="mce-FNAME" required>
    </div>
    <div class="text-sm pt-6 md:pt-6 lg:pt-6">
      <label for="mce-LNAME">Efternavn</label>
      <input type="text" value="" name="LNAME" class="text-sm" placeholder="Dit efternavn" id="mce-LNAME">
    </div>
    <div class="text-sm pt-5 md:pt-6 lg:pt-5">
      <label for="mce-EMAIL">Email *</label>
      <input type="email" value="" name="EMAIL" class="required email text-sm" placeholder="Din email" id="mce-EMAIL" required>
    </div>
  </div>
  <div class="indicates-required pb-5 md:pb-5 lg:pb-5 text-red-500 w-full px-2 md:px-1 lg:px-3"><span class="text-white">* Påkrævet</span></div>
    <div id="mce-responses" class="clear foot">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4647b8b842810351f756a5c6d_322f56a61f" tabindex="-1" value=""></div>
        <div class="flex flex-col items-center">
          <button class="text-xs font-base tracking-widest py-2 px-4 text-center hover:text-black text-white border cursor-pointer focus:ring-4 dark:bg-primary-600 dark:hover:bg-orange-400 hover:border-orange-400">
            TILMELD DIG
          </button>
        </div>
    </div>
</form>
</div>
</div>
</template>

<script setup>
</script>

<style scoped>
.mailchimp-område {
  background-color: rgb(0, 0, 0);
  height: 450px;
}

.tilmelding {
  font-weight: 300;
  font-size: 20px;
  color: #e5e5e5;
  padding-bottom: 20px;
  padding-top: 40px;
  text-align: center;
}

#mc_embed_signup {
  background-color: black;
  height: 350px;
  margin: auto;
}

#mce-FNAME {
  color: black;
  border: #e5e5e5;
  background-color: #e5e5e5;
  border-radius: 0%;
}

#mce-LNAME {
  color: black;
  border: #e5e5e5;
  background-color: #e5e5e5;
  border-radius: 0%;
}

#mce-EMAIL {
  color: black;
  border:  #e5e5e5;
  background-color: #e5e5e5;
  border-radius: 0%;
}


/* Small Devices, Phones */ 
@media only screen and (min-width : 375px) {
  .mailchimp-område {
    height: 520px;
  }

  .tilmelding {
    font-size: 18px;
    padding-bottom: 20px;
    padding-top: 40px;
  }

  #mc_embed_signup {
    background-color: rgb(0, 0, 0);
    width: 100%;
    margin-left: 5px;
  }

  #mc-embedded-subscribe {
    font-size: 15px;
    margin-top: 10px;
  }
}



/* Medium Devices, Tablets */
@media only screen and (min-width : 768px) {
  .mailchimp-område {
    height: 600px;
  }

  .tilmelding {
    font-size: 20px;
    padding-bottom: 0;
    padding-top: 40px;
  }

  #mc_embed_signup {
    background-color: rgb(0, 0, 0);
    width: 50%;
    margin: auto;
    font-size: 16px;
  }

  .mc-field-group {
    color: #e6e6e6;
    font-size: 16px;
    padding-top: 10px;
  }

  #mc-embedded-subscribe {
    font-size: 16px;
    margin-top: 10px;
  }
}




/* Large Devices, Desktops */
@media only screen and (min-width : 1024px) {
  .mailchimp-område {
    height: 600px;
  }

  .tilmelding {
    font-size: 30px;
    padding-bottom: 20px;
    padding-top: 40px;
  }

  #mc_embed_signup {
    background-color: rgb(0, 0, 0);
    width: 40%;
    margin: auto;
    font-size: 16px;
  }


  #mc-embedded-subscribe {
    font-size: 16px;
  }
}
</style>