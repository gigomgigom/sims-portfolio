<template>
    <div id="editor_wrapper">
        <div id="text_editor">

        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import articleAPI from '@/apis/articleAPI';

onMounted(() => {
    if (!window.summernote) {
        loadScript();
    } else {
        loadEditor();
    }
});
const loadScript = () => {
    const script1 = document.createElement('script');
    script1.src = "https://code.jquery.com/jquery-3.4.1.slim.min.js";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js";
    document.head.appendChild(script2);

    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    script2.onload = () => {
        loadEditor();
    }
}
const loadEditor = () => {
    // eslint-disable-next-line
    $('#text_editor').summernote({
        placeholder: '내용을 입력해주세요.',
        tabsize: 2,
        height: 900,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['codeview', 'help']]
        ],
        callbacks: {
            onImageUpload : (files) => {
                uploadSummernoteImageFile(files[0]);
            },
            onPaste: (e) => {
                var clipboardData = e.originalEvent.clipboardData;
                if(clipboardData && clipboardData.items && clipboardData.items.length) {
                    var item = clipboardData.items[0];
                    if(item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                        console.log('확인이용');
                        e.preventDefault();
                    }
                }
            },
            //클릭해서 직접 이미지를 삭제해야함.
            onMediaDelete : async function (target) {
                var deletedImageUrl = target.attr('src');
                const parts = deletedImageUrl.split("/");

                const date = parts[parts.length - 2];
                const fileName = parts[parts.length - 1];

                articleAPI.deleteImg(date, fileName);
            }
        }
    })
}
const uploadSummernoteImageFile = async (file) => {
    console.log('파일 업로드 핸들러 실행', file);
    /*
    MultipartForm에 의한 폼 데이터 생성
    $(editor).summernote('insertImage', [응답의 데이터]data.url);
    */
    const formData = new FormData();
    formData.append('file', file);
    const response = await articleAPI.uploadImg(formData);
    console.log(response.data);
    if(response.data !== null && response.data !== '') {
        let imageUrl = response.data;
        // eslint-disable-next-line
        $('#text_editor').summernote('insertImage', 'http://localhost'+imageUrl);
    }
}
</script>
<style scoped>
#editor_wrapper {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 70vw;
}

#text_editor {
    height: 70vh;
}
</style>