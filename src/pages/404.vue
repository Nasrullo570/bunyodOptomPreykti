<template>
    <div class="error">
        <img src="../assets/img/404.webp" alt="">

        <router-link to="/">Bosh sahifa</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.error{
    display: flex;
    justify-content: center;
    flex-direction: column;
    a{
        margin: 0 auto;
        margin-bottom: 40px;
        background: red;
        padding: 10px 20px;
        color: #fff;
        border-radius: 5px;
    }
}

</style>