<template>
    <NavBar/>
    <router-view/>
    <ToTopButton/>
    <Footer/>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import ToTopButton from './components/ToTopButton.vue';
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
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
</style>
