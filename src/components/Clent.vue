<template>
    <div>
        <div class="clent">
            <h1>{{clent}}</h1>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            clent:{
                type:String,
                required:true,
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.clent{
    h1 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 26px;
    line-height: 44px;
    color: #102440;
    margin-bottom: 20px;
  }
}

</style>