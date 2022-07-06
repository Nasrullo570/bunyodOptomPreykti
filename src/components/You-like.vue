<template>
  <div class="like">
    <h1>{{ like }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    like: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.like {
  h1 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 26px;
    line-height: 44px;
    color: #102440;
  }
}
</style>
