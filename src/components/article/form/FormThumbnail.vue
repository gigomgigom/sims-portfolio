<template>
    <div class="form_thumbnail">
            <h2 class="fw-bolder">썸네일 이미지 선택</h2>
            <label for="thumbnail_input">
                <img id="thumbnail_preview" src="@/assets/mymd/thumbnail_dft.jpg" />
            </label>
            <input id="thumbnail_input" type="file" accept="image/*" />
            <div class="mt-5">
                <button id="save_button">저장하기</button>
            </div>
        </div>
</template>
<script setup>
import { onMounted } from 'vue';

let thumbnailInput = null;
let thumbnailPreview = null;

onMounted(() => {
    thumbnailInput = document.getElementById('thumbnail_input');
    thumbnailPreview = document.getElementById('thumbnail_preview');

    thumbnailInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                thumbnailPreview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});
</script>
<style scoped>
.form_thumbnail {
    width: 70vw;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#thumbnail_input {
    display: none;
}

#thumbnail_preview {
    max-width: 400px;
}

#save_button {
    border: none;
    background-color: #FF5D5D;
    color: white;
    font-size: 1.3em;
    font-weight: bold;
    border-radius: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    transition: background-color 0.3s ease;
}

#save_button:hover {
    background-color: red;
    transition: background-color 0.3s ease;
}
</style>