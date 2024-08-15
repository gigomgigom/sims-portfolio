<template>
    <section>
        <div id="detail_header">
            <h1>책 '프로그래머의 길, 멘토에게 묻다' 정리</h1>
            <p class="detail_date">
                <span class="me-1" style="font-weight: bold;">
                    @GigomGigom
                </span>
                2024.08.15
                <i class="fa-regular fa-eye ms-2"></i>
                10
            </p>
            <div class="detail_tag_list">
                <div class="detail_tag">
                    Java
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style scoped>
section {
    font-family: 'nanum';
    margin-top: 150px;
    display: flex;
    justify-content: center;
}
h1 {
    font-weight: bold;
    margin-bottom: 50px;
}
#detail_header {
    width: 70vw;
    padding-bottom: 30px;
    border-bottom: 3px solid black;
}
.detail_tag_list {
    margin-top: 30px;
    display: flex;
}
.detail_tag {
    background-color: #FF5D5D;
    color: white;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 20px;
}
</style>