<template>
    <section>
        <div id="tag_container">
            <div id="selected_tag_list">
                <button id="select_button" @click="showTagList()">
                    태그 선택하기
                </button>
                <template v-for="tag in tagList" :key="tag">
                    <Transition>
                        <button class="selected_tag me-2 mb-2" v-if="tag.isSelected" @click="changeTagStts(tag.tagId)">
                            {{ tag.tagName }}
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </Transition>
                </template>
            </div>
            <Transition>
                <div id="tag_list" v-if="isTagListShown">
                    <template v-for="tag in tagList" :key="tag">
                        <button class="tag me-2 mb-2" v-if="!tag.isSelected" @click="changeTagStts(tag.tagId)">
                            {{ tag.tagName }}
                        </button>
                    </template>
                </div>
            </Transition>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const isTagListShown = ref(false);
const tagList = ref([
    {
        tagName: 'Java',
        tagId: 0,
        isSelected: false
    },
    {
        tagName: 'JavaScript',
        tagId: 1,
        isSelected: false
    },
    {
        tagName: 'FrontEnd',
        tagId: 2,
        isSelected: false
    },
    {
        tagName: 'BackEnd',
        tagId: 3,
        isSelected: false
    },
    {
        tagName: 'Docker',
        tagId: 4,
        isSelected: false
    },
    {
        tagName: 'Flutter',
        tagId: 5,
        isSelected: false
    },
    {
        tagName: 'SpringFramework',
        tagId: 6,
        isSelected: false
    },
    {
        tagName: 'SpringBoot',
        tagId: 7,
        isSelected: false
    },
    {
        tagName: 'TroubleShooting',
        tagId: 8,
        isSelected: false
    }
]);
const showTagList = () => {
    isTagListShown.value = !isTagListShown.value;
    let button = document.getElementById('select_button');
    if (isTagListShown.value) {
        button.innerHTML = '태그 목록 닫기'
    } else {
        button.innerHTML = '태그 선택하기'
    }
}
const changeTagStts = (tagIndex) => {
    let tag = tagList.value[tagIndex]
    tag.isSelected = !tag.isSelected;
}
</script>
<style scoped>
section {
    display: flex;
    justify-content: center;
    font-family: 'nanum';
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
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>