<template>
    <section>
        <div id="tag_container">
            <div class="mb-4">
                <h4 id="tag_text">{{ tagText }}</h4>
            </div>
            <div id="tag_list">
                <button class="tag me-2 mb-2" :id="'tag' + tag.tagId" v-for="(tag) in tags" :key="tag.tagId"
                    @click="selectTag(tag.tagId)">{{ tag.tagName }}</button>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, watch } from 'vue';

const tags = [
    {
        tagName: 'Java',
        tagId: 0
    },
    {
        tagName: 'JavaScript',
        tagId: 1
    },
    {
        tagName: 'FrontEnd',
        tagId: 2
    },
    {
        tagName: 'BackEnd',
        tagId: 3
    },
    {
        tagName: 'Docker',
        tagId: 4
    },
    {
        tagName: 'Flutter',
        tagId: 5
    },
    {
        tagName: 'SpringFramework',
        tagId: 6
    },
    {
        tagName: 'SpringBoot',
        tagId: 7
    },
    {
        tagName: 'TroubleShooting',
        tagId: 8
    }
]
const tagStts = ref(-1);
const tagText = ref(`There are 21 posts that matches #All.`);

//태그 선택
const selectTag = (index) => {
    //전체 태그 선택
    if (tagStts.value === index) {
        let oldTag = document.getElementById(`tag${tagStts.value}`);
        oldTag.classList.remove('selected_tag');
        tagStts.value = -1;
    } else {
        if (tagStts.value === -1) {
            //새로 태그 선택할 시
            const tag = document.getElementById(`tag${index}`);
            tag.classList.add('selected_tag');
            tagStts.value = index;
        } else {
            //태그 변경 시
            let oldTag = document.getElementById(`tag${tagStts.value}`);
            oldTag.classList.remove('selected_tag');
            tagStts.value = index;
            const tag = document.getElementById(`tag${index}`);
            tag.classList.add('selected_tag');
        }
    }
}
watch(tagStts, (newTagStts, oldTagStts) => {
    if(newTagStts === -1) {
        tagText.value = `There are 21 posts that matches #All.`;
    } else {
        tagText.value = `There are 21 posts that match #${tags[newTagStts].tagName}`;
    }
})
</script>
<style scoped>
section {
    display: flex;
    justify-content: center;
}
h4 {
    font-family: 'nanum';
    font-weight: bold;
}

#tag_container {
    width: 70vw;
    padding-bottom: 20px;
    border-bottom: 2px solid black;
}

#tag_list {
    display: flex;
    flex-wrap: wrap;
}

.tag {
    font-family: 'nanum';
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.tag:hover {
    background-color: gray;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.selected_tag {
    background-color: gray;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
}
</style>