<template>
    <section id="first_section">
        <h1 class="fw-bold mb-5">심영조</h1>
        <h4 class="mb-3 fw-bold">안녕하세요.</h4>
        <div style="height: 30px;">
            <h5 id="typing-text"></h5>
        </div>
        
    </section>
</template>
<script setup>
import { onMounted } from 'vue';

let typingText = null;

onMounted(() => {
    typingText = document.getElementById('typing-text');
});

document.addEventListener("DOMContentLoaded", function () {
    const textList = ['배움을 즐기는 신입 개발자입니다.', '항상 발전하려 노력합니다.', '문제가 발생 시 해결하고자 하는 성격이 저의 장점입니다.'];
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
#first_section {
    height: 550px;
    background-color: #FFC3C3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#typing-text {
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    color: black;
    border-right: .15em solid black;
    animation: caret 0.75s step-end infinite;
}

@keyframes caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: black;
    }
}
</style>