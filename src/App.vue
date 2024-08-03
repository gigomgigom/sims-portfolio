<template>
  <div id="root">
    <NavBar/>
    <FirstSection/>
    <SecondSection/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import FirstSection from './components/FirstSection.vue';
import SecondSection from './components/SecondSection.vue';
</script>

<style>
  @font-face {
    font-family: 'nanum';
    src: url('./fonts/NanumSquare_acL.ttf');
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
