<template>
    <div>
        <div class="partnerr">
            <h1>{{partnerr}}</h1>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            partnerr:{
                type:String,
                required:true,
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.partnerr {
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