<template>
    <section>
        <div id="pager">
            <div class="pager_button">
                ← NEWER
                <span class="d-none d-md-inline">POSTS</span>
            </div>
            <div class="pager_button">
                OLDER
                <span class="d-none d-md-inline">POSTS</span>
                →
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
section {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    font-family: 'nanum';
}
#pager {
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