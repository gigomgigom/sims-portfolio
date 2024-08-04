<template>
    <NavBar/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import FirstSection from './components/FirstSection.vue';
import SecondSection from './components/SecondSection.vue';
import ThirdSection from './components/ThirdSection.vue';
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
