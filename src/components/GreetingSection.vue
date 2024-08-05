<template>
    <section id="first_section" class="container-fluid">
        <h1 class="fw-bold my-5" style="font-family: 'nanum';">심영조</h1>
        <h4 class="mb-3 fw-bold" style="font-family: 'nanum';">안녕하세요.</h4>
        <div style="height: 30px; margin-bottom: 70px;">
            <h5 id="typing-text"></h5>
        </div>
        <button id="github_button" class="btn btn-lg">
            <i class="fa-brands fa-github"/>
            <span><span class="text-warning">Star me</span> on GitHub</span>
        </button>
        <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
    </section>
    <div id="div_split" class="mb-5"></div>
</template>
<script setup>
import { onMounted } from 'vue';

let typingText = null;

onMounted(() => {
    typingText = document.getElementById('typing-text');
});

document.addEventListener("DOMContentLoaded", function () {
    const textList = ['배움을 즐기는 신입 개발자입니다.', '항상 발전하려 노력합니다.', '문제 발생 시 해결하고자 합니다.'];
    let charIndex = 0;
    let currentIndex = 0;
    let currentText = '';
    let isTypeUnfinished = true;
    
    function typeAnimation() {
        currentText = textList[currentIndex];
        if(isTypeUnfinished) {
            if(charIndex < currentText.length) {{
                typingText.innerHTML += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typeAnimation, 20);
            }} else {
                isTypeUnfinished = false;
                setTimeout(typeAnimation, 1500);
            }
        } else {
            if (charIndex > 0) {
                typingText.innerHTML = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeAnimation, 20);
            } else {
                isTypeUnfinished = true;
                if(currentIndex+1 === textList.length) {
                    currentIndex = 0;
                } else {
                    currentIndex = (currentIndex + 1) % textList.length;
                }
                setTimeout(typeAnimation, 1500);
            }
        }
    }
    typeAnimation();
});

</script>
<style scoped>
#first_section{
    position: relative;
    padding-top: 100px;
    height: 500px;
    background-color: #FFC3C3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bubbles {
    position: absolute;
}
.bubble {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 0.7;
    pointer-events: none;
}
.bubble:nth-child(1) {
    width: 200px;
    height: 200px;
    left: -750px;
    bottom: -90px;
}
.bubble:nth-child(2) {
    width: 100px;
    height: 100px;
    left: -950px;
    bottom: -200px;
}
.bubble:nth-child(3) {
    width: 290px;
    height: 290px;
    left: -1100px;
    bottom: 60px;
}
.bubble:nth-child(4) {
    width: 100px;
    height: 100px;
    left: 700px;
    bottom: -160px;
}
.bubble:nth-child(5) {
    width: 200px;
    height: 200px;
    left: 800px;
    bottom: -170px;
}
.bubble:nth-child(6) {
    width: 150px;
    height: 150px;
    left: 800px;
    bottom: 70px;
}
#typing-text{
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    color: black;
    border-right: .1em solid black;
    font-family: 'nanum';
    animation: caret 1s step-end infinite;
}
#div_split{
    width: 100%;
    height: 50px;
    position: relative;
    background: linear-gradient(to bottom right, #FFC3C3 50%, #ffffff 50%);
    clip-path: polygon(0 0, 100% 0, 0 100%);
}
#github_button {
    font-size: 0.9em;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: white;
    transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}
#github_button>i{
    margin-right: 10px;
}
#github_button:hover{
    color: white;
    background-color: black;
    transform: translateY(-5px);
    transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
@keyframes caret {
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: black;
    }
}
</style>