<template>
    <section>
        <div id="article_container">
            <div class="article" v-for="n in 5" :key="n">
                <h1 @click="moveDetail()"><span class="article_title">락락! 즐길 락!</span></h1>
                <p class="article_date">
                    <span class="me-3" style="font-weight: bold;">
                        @GigomGigom
                    </span>
                    2024.08.15
                    <i class="fa-regular fa-eye ms-4"></i>
                    10
                </p>
                <p>
                    분산 락이란? 자바 스프링 기반의 웹 애플리케이션은 기본적으로 멀티 쓰레드 환경에서 구동된다. 따라서 여러 쓰레드가 함께 접근할 수 있는 공유자원에 대해 경쟁 상태(race condition)이 발생하지 않도록 별도의 처리가 필요하다. 자바는 라는 키워드를 언어 차원에서 제공해, 모니터 기반으로 상호 배제(mutual exclusion) 기능을 제공한다
                </p>
                <div class="article_bottom">
                    <div class="article_tag_list">
                        <div class="article_tag">
                            Java
                        </div>
                    </div>
                    <div class="article_detail" @click="moveDetail()">
                        Go Details
                        <i class="fa-solid fa-circle-right ms-2"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import router from '@/router';


const moveDetail = () => {
    router.push('/article/detail');
}
</script>
<style scoped>
section {
    display: flex;
    justify-content: center;
    font-family: 'nanum';
}
#article_container {
    width: 70vw;
}
.article {
    padding-top: 50px;
    padding-bottom: 30px;
    border-bottom: #edebeb 1px solid;
}
.article_title {
    font-weight: bold;
    cursor: pointer;
    transition: color 0.5s ease;
}
.article_title:hover {
    color: #FF5D5D;
    transition: color 0.5s ease;
}
.article_date {
    color: gray;
    margin-top: 20px;
}
.article_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
}
.article_tag {
    background-color: #FF5D5D;
    color: white;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 20px;
}
.article_detail {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.5s ease;
}
.article_detail:hover {
    color: #FF5D5D;
    transition: color 0.5s ease;
}
</style>