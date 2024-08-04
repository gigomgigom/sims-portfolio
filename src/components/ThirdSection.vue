<template>
    <section class="container-fluid">
        <div class="container">
            <h1>Skills</h1>
            <div class="d-flex justify-content-center row">
                <div class="col-lg-4 skill-col">
                    <div class="col-lg-12">
                        <div class="card_lift card border-0 mb-5">
                            <div class="pt-5 pb-3 skill_card shadow">
                                <div class="title" style="color: green;">
                                    <i class="fa-solid fa-2xl fa-computer me-3"></i>
                                    <h3>
                                        BACKEND
                                    </h3>
                                </div>
                                <div class="img">
                                    <img src="@/assets/springBoot.png" alt="springBoot" style="width: 100%;"/>
                                    <img src="@/assets/java.png" alt="java" style="width: 50%;"/>
                                    <img src="@/assets/mybatis.png" alt="mybatis" style="width: 50%;"/>
                                    <img src="@/assets/jwt.png" alt="jwt" style="width: 100%;"/>
                                </div>
                            </div>
                        </div>
                        <div class="card_lift card border-0 mb-5">
                            <div class="pt-5 pb-3 skill_card shadow">
                                <div class="title">
                                    <i class="fa-solid fa-2xl fa-code-compare me-3"></i>
                                    <h3>
                                        VERSION CONTROL
                                    </h3>
                                </div>
                                <div class="img">
                                    <img src="@/assets/git.png" alt="git" style="width: 100%;"/>
                                    <img src="@/assets/github.png" alt="github" style="width: 100%;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 skill-col">
                    <div class="col-lg-12">
                        <div class="card_lift card border-0 mb-5">
                            <div class="pt-5 pb-3 skill_card shadow">
                                <div class="title" style="color: orange;">
                                    <i class="fa-solid fa-2xl fa-computer me-3"></i>
                                    <h3>
                                        FRONTEND
                                    </h3>
                                </div>
                                <div class="img pt-3">
                                    <img src="@/assets/HTML.png" alt="html" style="width: 50%;"/>
                                    <img src="@/assets/CSS.png" alt="css" style="width: 50%;"/>
                                    <img src="@/assets/js2.png" alt="js" style="width: 50%;"/>
                                    <div style="width: 50%;"></div>
                                    <img src="@/assets/flutter.png" alt="flutter" style="width: 100%;" class="mt-2"/>
                                    <img src="@/assets/Vue.png" alt="vue" style="width: 50%;"/>
                                    <img src="@/assets/vuex.png" alt="vuex" style="width: 50%;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 skill-col">
                    <div class="col-lg-12">
                        <div class="card_lift card border-0 mb-5">
                            <div class="pt-5 pb-3 skill_card shadow">
                                <div class="title" style="color: blue;">
                                    <i class="fa-solid fa-2xl fa-server me-3"></i>
                                    <h3>
                                        DEPLOYMENT
                                    </h3>
                                </div>
                                <div class="img pt-3">
                                    <img src="@/assets/docker.png" alt="docker" style="width: 100%;"/>
                                    <img src="@/assets/msa.png" alt="msa" style="width: 100%;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="card_lift card border-0 mb-5">
                            <div class="pt-5 pb-3 skill_card shadow">
                                <div class="title" style="color: red;">
                                    <i class="fa-solid fa-2xl fa-database me-3"></i>
                                    <h3>
                                        DATABASE
                                    </h3>
                                </div>
                                <div class="img pt-3">
                                    <img src="@/assets/oracledb.png" alt="oracledb" style="width: 100%;"/>
                                </div>
                            </div>
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
section {
    background-color: #edebeb;
    padding-top: 70px;
    padding-bottom: 70px;
}
h1 {
    font-family: 'yg-jalnan';
    padding-bottom: 70px;
}

.skill-col {
    padding: 0;
}
.card_lift{
    padding-left: 15px;
    padding-right: 15px;
    background-color: inherit;
}
.card_lift:hover{
    transform: translateY(-25px);
    transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}
.skill_card {
    padding-left: 24px;
    padding-right: 24px;
    background-color: white;
}
.title {
    font-family: 'yg-jalnan';
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 40px;
}
h3 {
    padding-top: 10px;
}
</style>