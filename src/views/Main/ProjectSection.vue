<template>
    <section id="project">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>PROJECT</h1>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" class="shadow-hover my-2 card">
                        <div class="card-body p-5">
                            <div class="row">
                                <div class="bg_img col-lg-7 mb-5">
                                    <img src="@/assets/project/portfolio.png" alt="protfolio" width="100%"/>
                                </div>
                                <div class="content col-lg-5">
                                    <p>Portfolio</p>
                                    <span>개발기간 : 2024.07.31 ~ (진행중)</span>
                                    <br>
                                    <span>활동기관 : 개인 프로젝트</span>
                                    <br>
                                    <span>개발인원 : 1명</span>
                                    <div class="mb-5">
                                        <span>
                                            <strong>Sim's Portfolio는 제 포트폴리오입니다.</strong>
                                            <br>
                                            저의 보유 기술들 그리고 지금까지 작업했었던 프로젝트 내용을 담은 페이지입니다.
                                            <br>
                                            Front는 기존에 학습했었던 Vue를 사용하였고 S3를 연결하여 파일을 다운로드할 수 있게끔 할 예정입니다.
                                        </span>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="parts">Front</td>
                                                <td>Vue, JS, Axios, CSS, Bootstrap</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">Deployment</td>
                                                <td>Netlify</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="icon mt-5">
                                        <i class="fa-2xl fa-brands fa-square-github" @click="moveGitHubPage(0)"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" class="shadow-hover my-2 card">
                        <div class="card-body p-5">
                            <div class="row">
                                <div class="bg_img col-lg-7 mb-5">
                                    <img src="@/assets/project/socialpulse.png" alt="socialpulse" width="100%"/>
                                </div>
                                <div class="content col-lg-5">
                                    <p>Social Pulse</p>
                                    <span>개발기간 : 2024.06.05. ~ 2024.07.22.</span>
                                    <br>
                                    <span>활동기관 : 한국소프트웨어산업협회</span>
                                    <br>
                                    <span>개발인원 : 4명</span>
                                    <div class="mb-5">
                                        <span>
                                            <strong>SocialPulse는 봉사 참여 서비스 웹 어플리케이션(SPA)입니다.</strong>
                                            <br>
                                            봉사 프로그램, 교육 프로그램 그리고 봉사활동 관련 커뮤니티 등으로 구성되어 있습니다.
                                            <br>
                                            사용자는 지역, 분야, 모집상태, 키워드 등 검색조건을 통해 봉사활동 컨텐츠를 검색하여 조회하고 신청할 수 있고 관리자는 프로그램 관리, 신청인 정보 조회, 활동 승인 등의 작업을 할 수 있습니다.
                                        </span>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="parts">Back</td>
                                                <td>Spring boot, MyBatis, Spring Security, JWT</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">Front</td>
                                                <td>Vue, JS, Axios, CSS, Bootstrap</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">Deployment</td>
                                                <td>NGINX(WS), DOCKER(REST-API)</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">담당 파트</td>
                                                <td>
                                                    <strong>사용자</strong> : 인증·보안, 봉사참여, 교육참여, 컨텐츠 검색,
                                                    지역별 봉사센터(지도 D3.js), 신청내역 조회, 활동 승인 요청
                                                    <br>
                                                    <strong>관리자</strong> : 봉사관리, 교육관리, 회원관리, 활동승인
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="icon mt-5">
                                        <i class="fa-2xl fa-brands fa-square-github me-4" @click="moveGitHubPage(1)"></i>
                                        <i class="fa-2xl fa-solid fa-circle-info me-4" style="color: #FF5D5D;"></i>
                                        <i class="fa-2xl fa-solid fa-file-arrow-down" style="color: #FF5D5D;" @click="fileDownload(0)"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" class="shadow-hover my-2 card">
                        <div class="card-body p-5">
                            <div class="row">
                                <div class="bg_img col-lg-7 mb-5">
                                    <img src="@/assets/project/mungchelin.png" alt="mungchelin" width="100%"/>
                                </div>
                                <div class="content col-lg-5">
                                    <p>Mung Chelin(멍슐랭)</p>
                                    <span>개발기간 : 2024.04.02. ~ 2024.05.01.</span>
                                    <br>
                                    <span>활동기관 : 한국소프트웨어산업협회</span>
                                    <br>
                                    <span>개발인원 : 4명</span>
                                    <div class="mb-5">
                                        <span>
                                            <strong>멍슐랭은 애견용 식품 판매 쇼핑몰 웹 어플리케이션(MPA)입니다</strong>
                                            <br>
                                            상품 정보, 장바구니, 주문서, 마이페이지, 커뮤니티 등으로 구성되어 있습니다.
                                            <br>
                                            사용자는 상품을 검색 또는 정렬하여 편리하게 상품 목록을 조회하며 상품을 주문할 수 있고 관리자는 상품 관리, 주문 관리, 회원 관리 등의 작업을 할 수 있습니다.
                                        </span>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="parts">Back</td>
                                                <td>Spring Framework, MyBatis, Spring Security</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">Front</td>
                                                <td>HTML, JS, Jquery, CSS, Bootstrap</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">DataBase</td>
                                                <td>OracleDB</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">담당 파트</td>
                                                <td>
                                                    <strong>사용자</strong> : 인증·보안, 상품정보 조회, 주문, 마이페이지, 적립포인트
                                                    <br>
                                                    <strong>관리자</strong> : 상품관리, 주문관리, 회원 관리, 커뮤니티 관리
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="icon mt-5">
                                        <i class="fa-2xl fa-brands fa-square-github me-4" @click="moveGitHubPage(2)"></i>
                                        <i class="fa-2xl fa-solid fa-circle-info" style="color: #FF5D5D;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" class="shadow-hover my-2 card">
                        <div class="card-body p-5">
                            <div class="row">
                                <div class="bg_img col-lg-7 mb-5">
                                    <img src="@/assets/project/HewEat.png" alt="HewEat" width="100%"/>
                                </div>
                                <div class="content col-lg-5">
                                    <p>Hew-Eat(휴잇)</p>
                                    <span>개발기간 : 2023.07.15. ~ 2023.10.05.</span>
                                    <br>
                                    <span>활동기관 : 부천대학교</span>
                                    <br>
                                    <span>개발인원 : 3명</span>
                                    <div class="mb-5">
                                        <span>
                                            <strong>휴잇은 휴게소 온라인주문 웹/앱 크로스 플랫폼 어플리케이션입니다</strong>
                                            <br>
                                            사용자(앱), 판매자(웹), 관리자(웹) 전용 어플리케이션 3개로 구성되어 있습니다.
                                            <br>
                                            사용자는 휴게소를 검색하여 선택한 점포에 상품을 주문할 수 있고 판매자는 주문들을 조회 또는 처리할 수 있으며 점포 정보들을 관리할 수 있습니다.
                                            마지막으로 관리자는 점포등록요청 승인/거절, 점포 관리, 휴게소 관리를 할 수 있습니다.
                                        </span>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="parts">Framework</td>
                                                <td>Flutter</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">Language</td>
                                                <td>Dart</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">DataBase</td>
                                                <td>Google Firebase</td>
                                            </tr>
                                            <tr>
                                                <td class="parts">담당 파트</td>
                                                <td>
                                                    <strong>사용자</strong> : 인증, 휴게소 검색, 주문 내역 조회, 후기 작성
                                                    <br>
                                                    <strong>판매자</strong> : 인증, 메뉴 관리, 매출 관리
                                                    <br>
                                                    <strong>관리자</strong> : 인증, 휴게소 관리, 점포 관리
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="icon mt-5">
                                        <i class="fa-2xl fa-brands fa-square-github me-4" @click="moveGitHubPage(3)"></i>
                                        <i class="fa-2xl fa-solid fa-circle-info me-4" style="color: #FF5D5D;"></i>
                                        <i class="fa-2xl fa-solid fa-file-arrow-down" style="color: #FF5D5D;" @click="fileDownload(1)"></i>
                                    </div>
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
import { onMounted } from 'vue';

onMounted(() => {

});
const projects = [
    {
        projectName : 'Portfolio',
        githubUrl : 'https://github.com/gigomgigom/sims-portfolio'
    },
    {
        projectName : 'SocialPulse',
        githubUrl : 'https://github.com/gigomgigom/front_end_volunteer',
        information : [
            {
                title: 'SPA 방식 채택',
                description: 'SPA방식을 사용함으로써 빠른 페이지 이동 및 간소화된 개발 프로세스의 이점을 갖고 개발하였습니다.'
            },
            {
                title: '',
                description: ''
            }
        ]
    },
    {
        projectName : 'Mung Chelin',
        githubUrl : 'https://github.com/gigomgigom/KOSA_ShoppingMall',
        information : [
            {
                title: '',
                description: ''
            },
            {
                title: '',
                description: ''
            }
        ]
    },
    {
        projectName : 'Hew-Eat',
        githubUrl : 'https://github.com/gigomgigom/RPOrderApp',
        information : [
            {
                title: '',
                description: ''
            },
            {
                title: '',
                description: ''
            }
        ]
    }
]

const moveGitHubPage = (index) => {
    window.open(projects[index].githubUrl);
}
const files = [
    {
        url : '/download/SocialPulse.pdf',
        fileName: 'SocialPulse.pdf'
    },
    {
        url: '/download/HewEat.pdf',
        fileName: 'HewEat.pdf'
    }
];
const fileDownload = (index) => {
    const link = document.createElement('a');
    link.href = files[index].url;
    link.download = files[index].fileName;
    link.click();
}
</script>
<style scoped>
h1 {
    font-family: yg-jalnan;
}
section {
    padding-top: 70px;
    padding-bottom: 70px;
}
h1 {
    font-family: 'yg-jalnan';
    padding-bottom: 70px;
}
img {
    border-radius: 5px;
}
p {
    font-size: 1.6em;
    font-weight: bold;
}
tr {
    margin-bottom: 10px;
}
i {
    cursor: pointer;
}
.shadow-hover {
    border: none;
    transition: transform 0.3s ease;
}
.shadow-hover:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px 0px;
    transform: translateY(-25px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.content {
    font-family: 'nanum';
}
.parts {
    font-weight: bold;
    width: 100px;
}
</style>