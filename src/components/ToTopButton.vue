<template>
    <transition name="fade">
        <button v-if="showButton" @click="scrollToTop" class="to_top_button">
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </transition>
</template>
<script setup>
import { onMounted, ref } from 'vue';

//버튼 존재 여부
const showButton = ref(false);
//스크롤의 위치가 400픽셀 이상 내려갔는지 감지
const handleScroll = () => {
    showButton.value = window.scrollY > 400;
}
//스크롤 최상단으로 올려주기
const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
}
//컴포넌트 마운트 시 스크롤 이벤트를 감지하는 메소드 추가
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.to_top_button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 16px;
    height: 50px;
    width: 50px;
    background-color: #FF5D5D;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    font-family: 'yg-jalnan';
    display: flex;
    justify-content: center;
    align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>