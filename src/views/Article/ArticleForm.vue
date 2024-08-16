<template>
    <section>
        <h1>배울 학學, 익힐 습習</h1>
        <div id="tag_container">
            <div id="selected_tag_list">
                <button id="select_button" @click="showTagList()">
                    태그 선택하기
                </button>
                <button class="tag me-2 mb-2" v-for="n in 3" :key="n">
                    Micro Service Architecture
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <Transition>
                <div id="tag_list" v-if="isTagListShown">
                    <button class="selected_tag me-2 mb-2" v-for="n in 10" :key="n">Java</button>
                </div>
            </Transition>
        </div>
        <div id="form_title">
            <input type="text" class="w-100 h-100" height=100px placeholder="제목을 작성해주세요." />
        </div>
        <div id="editor_wrapper">
            <div id="text_editor">

            </div>
        </div>
        <div class="filebox">
            <input class="upload-name" value="썸네일 이미지" placeholder="썸네일 이미지">
            <label for="file">이미지 업로드</label>
            <input type="file" id="file">
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Quill from 'quill';

let quill = null;
const isTagListShown = ref(false);
onMounted(() => {
    if (!window.Quill) {
        loadScript();
    } else {
        loadEditor();
    }
});

const loadScript = () => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    script.onload = () => {
        loadEditor();
    }
}

const loadEditor = () => {
    quill = new Quill('#text_editor', {
        placeholder: "내용을 작성해주세요.",
        theme: 'snow',
        modules: {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "underline"],
                [{ color: ["black", "grey", "#558CCF"] }, { background: ["#EEF1F4"] }],
                ["image", "link"],
                ["clean"],
            ],
        }
    });
}

const showTagList = () => {
    isTagListShown.value = !isTagListShown.value;
    let button = document.getElementById('select_button');
    if (isTagListShown.value) {
        button.innerHTML = '태그 목록 닫기'
    } else {
        button.innerHTML = '태그 선택하기'
    }
}
</script>
<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: nanum;
}

h1 {
    margin-top: 150px;
    font-weight: bold;
}

#tag_container {
    margin-top: 20px;
    width: 70vw;
}

#select_button {
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    border-radius: 50px;
    background-color: #FF5D5D;
    color: white;
    font-weight: bold;
    transition: background-color 0.5s ease;
}

#select_button:hover {
    background-color: red;
    transition: background-color 0.5s ease;
}

#selected_tag_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.tag {
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    font-size: 0.8em;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.tag:hover {
    background-color: gray;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
}

#tag_list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    background-color: gainsboro;
    border-radius: 40px;
    padding: 20px;
}

.selected_tag {
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.selected_tag:hover {
    background-color: gray;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
}

#form_title {
    margin-top: 20px;
    width: 70vw;
    height: 50px;
}

#form_title>input {
    padding-left: 20px;
    font-size: 1.5em;
    font-weight: bold;
    border-radius: 40px;
    border: 1px solid rgb(204, 204, 204);
}

#editor_wrapper {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 70vw;
}

#text_editor {
    height: 70vh;
}
.filebox .upload-name {
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    color: #999999;
}
.filebox label {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
}
.filebox input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>