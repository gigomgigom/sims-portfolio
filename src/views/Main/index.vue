<template>
    <GreetingSection/>
    <router-view v-slot="{Component}">
        <Transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
        </Transition>
    </router-view>
</template>
<script setup>
import GreetingSection from '@/views/Main/GreetingSection.vue';
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 0.6s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>