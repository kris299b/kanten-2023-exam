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
<div id="mc_embed_signup">
  <form action="https://gmail.us21.list-manage.com/subscribe/post?u=4647b8b842810351f756a5c6d&amp;id=322f56a61f&amp;v_id=110&amp;f_id=003354e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <div class="indicates-required"><span class="asterisk">*</span> Påkrævet</div>
<div class="mc-field-group">
	<label for="mce-FNAME">Fornavn<span class="asterisk">*</span>
  </label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>
	<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Efternavn</label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
	<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email adresse<span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
</div>
<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
    <div class="content__gdpr">
        <p>Du kan til enhver tid afmelde medlemsskabet ved at klikke på linket i footeren i bunden af vores mails.</p>
    </div>
    <div class="content__gdprLegal">
        <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
    </div>
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4647b8b842810351f756a5c6d_322f56a61f" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/irZaUM" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>