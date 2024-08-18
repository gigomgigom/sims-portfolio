<template>
    <section id="about_me" class="container py-5">
        <div class="row">
            <div class="col-lg-12 mb-5">
                <h1>About Me</h1>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center my-4">
                <div id="my_profile">
                    <img src="@/assets/MyPhoto.jpg" alt="myPhoto" class="profile-img img-fluid" />
                </div>
            </div>
            <div id="about_box" class="col-sm-12 col-md-6 col-lg-8">
                <div class="row">
                    <div class="item col-md-12 col-lg-6">
                        <div class="icon">
                            <i class="fa-solid fa-2xl fa-user"></i>
                        </div>
                        <div class="info_text">
                            <p>
                                <strong>이름</strong>
                            </p>
                            <p style="color: gray;">
                                심영조
                            </p>
                        </div>
                    </div>
                    <div class="item col-md-12 col-lg-6">
                        <div class="icon">
                            <i class="fa-solid fa-2xl fa-calendar-days"></i>
                        </div>
                        <div class="info_text">
                            <p>
                                <strong>생년월일</strong>
                            </p>
                            <p style="color: gray;">
                                2000.01.07
                            </p>
                        </div>
                    </div>
                    <div class="item col-md-12 col-lg-6">
                        <div class="icon">
                            <i class="fa-solid fa-2xl fa-location-dot"></i>
                        </div>
                        <div class="info_text">
                            <p>
                                <strong>주소지</strong>
                            </p>
                            <p style="color: gray;">
                                인천시 서구
                            </p>
                        </div>
                    </div>
                    <div class="item col-md-12 col-lg-6">
                        <div class="icon">
                            <i class="fa-solid fa-2xl fa-phone"></i>
                        </div>
                        <div class="info_text">
                            <p>
                                <strong>연락처</strong>
                            </p>
                            <p style="color: gray;">
                                010-2810-4870
                            </p>
                        </div>
                    </div>
                    <div class="item col-md-12 col-lg-6">
                        <div class="icon">
                            <i class="fa-solid fa-2xl fa-envelope"></i>
                        </div>
                        <div class="info_text">
                            <p>
                                <strong>이메일</strong>
                            </p>
                            <p style="color: gray;">
                                tlarlrma@naver.com
                            </p>
                        </div>
                    </div>
                    <div class="item col-md-12 col-lg-6">
                        <div class="icon">
                            <i class="fa-solid fa-2xl fa-school"></i>
                        </div>
                        <div class="info_text">
                            <p>
                                <strong>학력</strong>
                            </p>
                            <p style="color: gray;">
                                부천대학교<br>(컴퓨터소프트웨어과)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {

});
</script>
<style scoped>
#about_me {
    padding: 0;
}

#my_profile {
    width: 100%;
    display: flex;
    justify-content: center;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-left: 15px;
}
.icon {
    margin-right: 30px;
}
.info_text {
    text-align: left;
    width: 220px;
    font-family: 'nanum';
    font-size: 1.2em;
}
#about_box {
    display: flex;
}
h1 {
    font-family: 'yg-jalnan';
}
img {
    width: 100%;
    display: inline;
    border-radius: 10px;
    transition: transform 0.3s ease;
}
img:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px;
}
@media (max-width: 576px) {

/* 작은 화면 (스마트폰 등) */
.profile-img {
    width: 100%;
    /* 전체 너비 */
    max-width: 200px;
    /* 최대 너비 */
}
.row {
    padding-left: 20px;
    padding-right: 20px;
}
}

@media (min-width: 576px) {

    /* 작은 화면 (스마트폰 등) */
    .profile-img {
        width: 100%;
        /* 전체 너비 */
        max-width: 300px;
        /* 최대 너비 */
    }
}

@media (min-width: 768px) {

    /* 중간 화면 (태블릿 등) */
    .profile-img {
        width: 100%;
        max-width: 350px;
    }
}

@media (min-width: 992px) {

    /* 큰 화면 (노트북 등) */
    .profile-img {
        width: 100%;
        max-width: 400px;
    }
}

@media (min-width: 1200px) {

    /* 더 큰 화면 (데스크탑 등) */
    .profile-img {
        width: 100%;
        max-width: 450px;
    }
}
</style>