<template>
  <div id="root">
    <NavBar/>
    <Header/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
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
