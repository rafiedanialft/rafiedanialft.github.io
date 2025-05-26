<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
polyfillCountryFlagEmojis();
</script>

<template>
  <div class="header">
    <button><h2>🇯🇵 ようこそ</h2></button>
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
      <div class="switchgallery">
        <button>&lt;</button>
      </div>
      <div class="gallerybox">
        <div class="imagebox">
          <img src="https://startup.info/wp-content/uploads/2022/02/game-developmentpng.png" alt="">
        </div>
        <div class="textbox">
          <h2>Papercut!</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam libero id quas non quaerat quasi qui inventore dolore consequatur. Quae maxime ipsa incidunt est cum maiores fugit reprehenderit minima.</p>
        </div>
      </div>
      <div class="switchgallery">
        <button>&gt;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
