<template>
    <section class="container">
        <div id="detail_move" class="row">
            <div class="pager_button col-lg-4 col-md-5 mb-4">
                ← NEWER
                <span class="d-none d-md-inline">POSTS</span>
            </div>
            <div class="pager_button col-lg-4 col-md-5 mb-4">
                OLDER
                <span class="d-none d-md-inline">POSTS</span>
                →
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style scoped>
section {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
#detail_move {
    width: 70vw;
    display: flex;
    justify-content: space-between;
}
.pager_button {
    background-color: #FF5D5D;
    color: white;
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.5s ease;
}
.pager_button:hover {
    background-color: red;
    transition: background-color 0.5s ease;
}
</style>