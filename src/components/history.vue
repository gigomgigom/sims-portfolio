<template>
    <section id="history" class="container my-5 py-5">
        <div id="history_wrapper">
            <h1 class="mb-5">History</h1>
            <div class="card shadow-hover">
                <div class="card-body p-5">
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <p class="company text-center">(現)Comverse Co.</p>
                            <p class="info">솔루션/SI</p>
                            <p class="info">서울시 강남구</p>
                        </div>
                        <div class="col-md-3 text-center d-flex align-items-center justify-content-center">
                            <p class="info">시작: 2024-08<br></p>
                        </div>
                        <div class="col-md-6 text-center d-flex align-items-center justify-content-center">
                            <p class="info">웹 어플리케이션 개발(인턴)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-hover">
                <div class="card-body p-5">
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <p class="company text-center">KOSA</p>
                            <p class="info text-center fs-5">한국소프트웨어산업협회</p>
                            <p class="info">서울시 송파구</p>
                        </div>
                        <div class="col-md-3 text-center d-flex align-items-center justify-content-center">
                            <p class="info">시작: 2024-03<br>종료: 2024-08</p>
                        </div>
                        <div class="col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
                            <p class="info">MSA기반 풀스택 개발자 양성과정(교육생)</p>
                            <p class="fs-5">수상이력 : 최종 프로젝트 우수상</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-hover">
                <div class="card-body p-5">
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <p class="company text-center">부천대학교</p>
                            <p class="info text-center fs-5">컴퓨터소프트웨어과</p>
                            <p class="info">경기도 부천시</p>
                        </div>
                        <div class="col-md-3 text-center d-flex align-items-center justify-content-center">
                            <p class="info">시작: 2018-03<br>종료: 2024-02</p>
                        </div>
                        <div class="col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
                            <p class="info">컴퓨터소프트웨어과 졸업</p>
                            <p class="fs-5">수상이력 : 졸업작품 전시회 최우수상, 학업 성취도 우수상</p>
                            <p class="fs-5">활동이력 : 학과 멘토링 동아리, 하계방학 현장실습</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-hover">
                <div class="card-body p-5">
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <p class="company text-center">군 복무</p>
                            <p class="info text-center fs-5">운전병</p>
                            <p class="info">인천시</p>
                        </div>
                        <div class="col-md-3 text-center d-flex align-items-center justify-content-center">
                            <p class="info">시작: 2019-11<br>종료: 2021-06</p>
                        </div>
                        <div class="col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
                            <p class="info">육군 제 17사단 해안경계부대</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style scoped>
    #history {
        padding: 0;
        font-family: 'nanum';
    }
    #history_wrapper {
        padding-left: 20px;
        padding-right: 20px;
    }
    h1 {
        font-family: 'yg-jalnan';
    }
    .card{
        border: none;
        transition: transform 0.5s ease;
        border-bottom : 1px solid rgba(0, 0, 0, 0.15);
    }
    .card:hover {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px 0px;
        transform: translateY(-15px);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .info {
        font-size: 1.5em;
    }
    .company {
        font-size: 2em;
        font-weight: bolder;
    }
</style>