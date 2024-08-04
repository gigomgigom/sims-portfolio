<template>
    <Header class="header-global">
        <nav id="navbar-main" class="navbar navbar-expand-lg headroom w-100">
            <div id="container">
                <a>
                    <span class="page_title">
                        <strong>Sim's</strong>
                        Portfolio
                    </span>
                </a>
                <button type="button" id="navbar_button" @click="showNavModal">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="navbar-nav" id="nav_list">
                    <li class="nav-item">
                        <button class="nav-link navbar_link">
                            About me
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link navbar_link">
                            Skills
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link navbar_link">
                            Projects
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link navbar_link">
                            History
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link navbar_link">
                            GitHub
                        </button>
                    </li>
                </ul>
            </div>
            <div class="modal fade" id="nav_modal" aria-hidden="false">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="modal_title">
                                <strong>Sim's</strong>
                                Portfolio
                            </span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul class="align-items-lg-center ml-lg-auto menu navbar-nav">
                                <li class="nav-item">
                                    <button class="nav-link modal_link">
                                        About me
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link modal_link">
                                        Skills
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link modal_link">
                                        Projects
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link modal_link">
                                        History
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link modal_link">
                                        GitHub
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </Header>
</template>
<script setup>
import { Modal } from 'bootstrap';
import { onMounted, ref } from 'vue';

let navBarContainer = null;
let navBarModal = null;

onMounted(() => {
    navBarContainer = document.getElementById('navbar-main');
    navBarModal = new Modal(document.getElementById('nav_modal'), {
        backdrop: false,
        keyboard: false
    });
})
//네비 모달창 띄우기
function showNavModal() {
    navBarModal.show();
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
}
//스크롤 이벤트 핸들러
function handleScroll() {
    if (window.scrollY > 0) {
        navBarContainer.classList.add('navbar-scrolled');
    } else {
        navBarContainer.classList.remove('navbar-scrolled');
    }
}
//스크롤 이벤트 리스너
window.addEventListener('scroll', handleScroll);

</script>
<style scoped>
#navbar-main {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFC3C3;
    z-index: 400;
    transition: background-color 0.3s ease;
}

.navbar-scrolled {
    background-color: #FF5D5D !important;
    transition: background-color 0.3s ease;
}

.navbar-scrolled>#container>#navbar_button {
    background-color: #FF5D5D !important;
    transition: background-color 0.3s ease;
}

.navbar-scrolled>#container>a>.page_title {
    color: white;
    transition: color 0.3s ease;
}

.navbar-scrolled>#container>#nav_list>.nav-item>.navbar_link {
    color: white;
    transition: color 0.3s ease;
}

#container {
    padding-left: 25px;
    padding-right: 25px;
    width: 70%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.page_title {
    color: black;
    font-size: 1.7em;
    cursor: pointer;
    font-family: 'nanum';
}

.page_title:hover {
    color: #FF5D5D;
    transition: color 0.3s ease;
}

.navbar_link {
    font-size: 0.9em;
    color: black;
    font-family: 'nanum';
}

.navbar_link:hover {
    color: #FF5D5D;
    transition: color 0.3s ease;
}

#navbar_button {
    background-color: #FFC3C3;
    transition: background-color 0.3s ease;
    border: none;
    display: none;
}

.modal_title {
    color: black;
    font-size: 1.7em;
    cursor: pointer;
    font-family: 'nanum';
}

.modal-dialog {
    max-width: 80%;
    margin: 10px auto;
    border: 1px solid #FFC3C3;
}

@media only screen and (max-width: 992px) {
    #nav_list {
        display: none;
    }

    #navbar_button {
        display: block;
    }
}
@media only screen and (max-width: 576px) {
    #container {
        width: 90%;
    }
}
</style>