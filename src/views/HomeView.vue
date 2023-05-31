<template>        
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-20">
            <p class="font-sans sm:Roboto hidden md:block font-sans text-8xl text-white font-semibold mt-20 tracking-widest">KANTEN</p>
            <p class="font-sans sm:Roboto hidden md:block font-sans text-2xl text-white font-normal mt-3 mb-6 tracking-widest">KULTUR | MUSIK | FÆLLESSKAB</p>
            <button class="text-md font-bold bg-black hover:bg-black text-white font-bold hover:text-white py-2 px-6 border-2 border border-black hover:border-white tracking-widest">
            <RouterLink to="/events">SE EVENTS</RouterLink>
            </button>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/kanten-kollage-done.jpg" alt="">
  </div>


<!--Dette område er Mailchimp-signup-->
<div class="mailchimp-område">
  <div class="tilmelding">TILMELD DIG VORES NYHEDSBREV</div>
<div id="mc_embed_signup">
<form action="https://gmail.us21.list-manage.com/subscribe/post?u=4647b8b842810351f756a5c6d&amp;id=322f56a61f&amp;f_id=003354e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <div class="indicates-required"><span class="asterisk">*</span> Påkrævet</div>
<div class="mc-field-group">
	<label for="mce-FNAME">Fornavn<span class="asterisk">*</span>
  </label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Efternavn</label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email adresse<span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4647b8b842810351f756a5c6d_322f56a61f" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Tilmeld dig" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
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
  font-weight: 600;
  font-size: 30px;
  color: #e6e6e6;
  padding-bottom: 20px;
  padding-top: 40px;
  text-align: center;
}

#mc_embed_signup {
  background-color: black;
  margin: auto;
}

.mc-field-group {
  color: #e6e6e6;
}

.indicates-required {
  color: #e94e00;
}

#mce-FNAME {
  color: #e6e6e6;
  border: #e6e6e6;
  background-color: #303030;
  border-radius: 0%;
}

#mce-LNAME {
  color: #e6e6e6;
  border: #e6e6e6;
  background-color: #303030;
  border-radius: 0%;
}

#mce-EMAIL {
  color: #e6e6e6;
  border: #e6e6e6;
  background-color: #303030;
  border-radius: 0%;
}

#mc-embedded-subscribe {
  color: #e6e6e6;
  background-color: black;
  border:solid #e6e6e6;
  font-weight: 600;
  border-radius: 0%;
}

#mc-embedded-subscribe:hover {
  color: black;
  background-color: #fb923c;
  border-color: #fb923c;
}



/* Custom, iPhone Retina */ 
@media only screen and (min-width : 320px) {
.mailchimp-område {
  background-color: rgb(0, 0, 0);
  height: 450px;
}

.tilmelding {
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 15px;
}

#mc_embed_signup {
  background-color: black;
  margin: auto;
}

.mc-field-group {
  color: #e6e6e6;
}

.indicates-required {
  color: #e94e00;
}

#mce-FNAME {
  color: #e6e6e6;
  border: #e6e6e6;
  background-color: #303030;
  border-radius: 0%;
}

#mce-LNAME {
  color: #e6e6e6;
  border: #e6e6e6;
  background-color: #303030;
  border-radius: 0%;
}

#mce-EMAIL {
  color: #e6e6e6;
  border: #e6e6e6;
  background-color: #303030;
  border-radius: 0%;
}

#mc-embedded-subscribe {
  color: #e6e6e6;
  background-color: black;
  border:solid #e6e6e6;
  font-weight: 600;
  border-radius: 0%;
}
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