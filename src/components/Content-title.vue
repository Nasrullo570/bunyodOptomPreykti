<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
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
