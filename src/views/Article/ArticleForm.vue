<template>
    <section>
        <h1>배울 학學, 익힐 습習</h1>
        <FormTag />
        <div id="form_title">
            <input type="text" class="w-100 h-100" height=100px placeholder="제목을 작성해주세요." />
        </div>
        <FormEditor />
        <FormThumbnail />
    </section>
</template>
<script setup>
import { onMounted } from 'vue';
import FormTag from '@/components/article/form/FormTag.vue';
import FormEditor from '@/components/article/form/FormEditor.vue';
import FormThumbnail from '@/components/article/form/FormThumbnail.vue';

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
</style>