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
        :options="{
          type: 'loop',
          perPage: 1,
          arrows: true,
          pagination: true,
        }"
        :has-track="false"
      >
        <SplideTrack>
          <SplideSlide>
            <div class="galleryflex">
              <div class="emptyflex"></div>
              <div class="gallerybox">
                <div class="imagebox">
                  <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
                </div>
                <div class="textbox">
                  <h2>Papercut!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam libero id quas non quaerat quasi qui inventore dolore consequatur. Quae maxime ipsa incidunt est cum maiores fugit reprehenderit minima. lorem</p>
                </div>
              </div>
              <div class="emptyflex"></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="galleryflex">
              <div class="emptyflex"></div>
              <div class="gallerybox">
                <div class="imagebox">
                  <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
                </div>
                <div class="textbox">
                  <h2>Papercut!</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam libero id quas non quaerat quasi qui inventore dolore consequatur. Quae maxime ipsa incidunt est cum maiores fugit reprehenderit minima. lorem</p>
                </div>
              </div>
              <div class="emptyflex"></div>
            </div>
          </SplideSlide>
        </SplideTrack>
          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev"><img src="./assets/leftarrow.svg"></button>
            <button class="splide__arrow splide__arrow--next"><img src="./assets/rightarrow.svg"></button>
          </div>
          <ul class="splide__pagination"></ul>
      </Splide>
      
    </div>
    <br><br><br>
    <div class="textground">
      <h2>My certificates!</h2>
    </div>
    <div class="certificateground">
      <Splide
        :options="{
          type: 'loop',
          perPage: auto,
          autoWidth: true,
          gap: '0em',
          arrows: false,
          pagination: false,
          drag: false,
          perMove: 1,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
          }
        }"
        :extensions="{ AutoScroll }"
        class="certificate-splide"
      >
      <SplideSlide v-for="(section, idx) in certificateSections" 
      :key="idx"
      >
      <div class="certificatesection">
        <div class="certificateheader">
          <span>{{ section.company }}</span>
        </div>
        <div class="certificatefiles">
          <img v-for="(img, i) in section.images" :key="i" :src="img" alt="Certificate">
        </div>
      </div>
    </SplideSlide>
    </Splide>
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
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

polyfillCountryFlagEmojis();

const certificateSections = [
  {
    company: "Company Name",
    images: [
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
    ],
  },
  {
    company: "Company Name",
    images: [
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
    ],
  },
  {
    company: "Company Name",
    images: [
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
      "https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png",
    ],
  },
];
</script>

<style scoped>
.splide__arrow {
  background: transparent;
  transition: background 0.2s;
  top: 100%;
  height: 3em;
  border-radius: 10px;
  width: 3em;
}

.splide__arrow--prev {
  margin-top: 1em;
  left: 4.5em;
}

.splide__arrow--next {
  margin-top: 1em;
  right: 4.5em;
}

.splide__pagination {
  bottom: -1.4em;
}

:deep(.splide__pagination__page) {
  background: #bbb;
}
:deep(.splide__pagination__page.is-active) {
  background: #555;
}

.certificate-splide {
  overflow: hidden;
}

</style>
