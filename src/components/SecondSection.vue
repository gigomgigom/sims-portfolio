<template>
    <div id="about_me" class="container">
        <div class="row">
            <div class="col-lg-12 mb-5">
                <h1>About Me</h1>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center my-4">
                <div id="my_profile">
                    <img src="@/assets/MyPhoto.jpg" alt="myPhoto"/>
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
                                <strong>Name</strong>
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
                                부천대학교(컴퓨터소프트웨어과)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
    #about_me{
        padding: 0;
        width: 70%;
    }
    #my_profile{
        
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
    }
    #about_box {
        display: flex;
    }
    h1 {
        font-family: 'nanum';
    }
    img {
        width: 100%;
        display: inline;
        border-radius: 10px;
    }
    img:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px;
    }
</style>