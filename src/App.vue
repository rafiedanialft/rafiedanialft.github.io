<template>
  <div class="header">
    <button><h2>🇺🇸 Welcome!</h2></button>
    <button><h2>🇯🇵 ようこそ!</h2></button>
    <button><h2>🇮🇩 Selamat Datang!</h2></button>
    <button><h2>🇮🇩 ꦱꦸꦒꦼꦁꦫꦮꦸꦃ!</h2></button>
  </div>
  <div class="banner">
    <h1>@rafiedanialft</h1>
  </div>
  <div class="article">
    <div class="textground">
      <h2>Welcome!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at expedita nostrum vel? Beatae voluptatibus, minima recusandae natus sunt reprehenderit officiis dicta quisquam ipsam inventore consequatur rerum eligendi, magnam perspiciatis?</p>
      <br>
      <h2>Check out my stuff!</h2>
    </div>
    <div class="galleryground">
      <Splide
        ref="splideRef"
        :options="{
          type: 'loop',
          perPage: 1,
          arrows: true,
          pagination: false,
        }"
        class="my-splide"
      >
        
        <SplideSlide>
          <div class="galleryflex">
            <div class="emptyflex">

            </div>
            <div class="gallerybox">
              <div class="imagebox">
                <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
              </div>
              <div class="textbox">
                <h2>Papercut!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam libero id quas non quaerat quasi qui inventore dolore consequatur. Quae maxime ipsa incidunt est cum maiores fugit reprehenderit minima. lorem</p>
              </div>
            </div>
            <div class="emptyflex">
              
            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="galleryflex">
            <div class="emptyflex">

            </div>
            <div class="gallerybox">
              <div class="imagebox">
                <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
              </div>
              <div class="textbox">
                <h2>Papercut!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam libero id quas non quaerat quasi qui inventore dolore consequatur. Quae maxime ipsa incidunt est cum maiores fugit reprehenderit minima. lorem</p>
              </div>
            </div>
            <div class="emptyflex">
              
            </div>

          </div>
        </SplideSlide>
      </Splide>
      <div class="galleryflex">
        <div class="emptyflex">

        </div>
        <div class="my-slider-progress">
          <div class="my-slider-progress-bar" ref="progressBarRef"></div>
        </div>
        <div class="emptyflex"> 

        </div>
      </div>
    </div>
    <br><br>
    <div class="textground">
      <h2>My certificates!</h2>
    </div>
    <div class="certificateground">
      <div class="switchgallery">
        <button class="shortbtn"><img src="./assets/leftarrow.svg"></button>
      </div>
      <div class="certificateslide">
        <div class="certificatesection">
          <div class="certificateheader">
            <span>Company Name</span>
          </div>
          <div class="certificatefiles">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
          </div>
        </div>
        <div class="certificatesection">
          <div class="certificateheader">
            <span>Company Name</span>
          </div>
          <div class="certificatefiles">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
            <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
          </div>
        </div>
      </div>
      <div class="switchgallery">
        <button class="shortbtn"><img src="./assets/rightarrow.svg"></button>
      </div>
    </div>
    <br>
    <div class="textground">
      <h2>Contact me here!</h2>
      <div class="contactlist">
        <button><img src="./assets/mail.svg" alt="Email"></button>
        <button><img src="./assets/instagram.svg" alt="Instagram"></button>
        <button><img src="./assets/discord.svg" alt="Discord"></button>
        <button><img src="./assets/github.svg" alt="Github"></button>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>@rafiedanialft - 2025</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { Splide, SplideSlide } from '@splidejs/vue-splide';

polyfillCountryFlagEmojis();

const splideRef = ref(null);
const progressBarRef = ref(null);

onMounted(() => {
  const splide = splideRef.value?.splide;
  const bar = progressBarRef.value;
  if (splide && bar) {
    splide.on('mounted move', () => {
      const end = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + '%';
    });
  }
});
</script>

<style scoped>
.my-slider-progress {
  flex: 6;
  background: #ccc;
  margin-top: 8px;
}
.my-slider-progress-bar {
  background: #1a1a1a;
  height: 2px;
  transition: width 400ms ease;
  width: 0%;
}

</style>
