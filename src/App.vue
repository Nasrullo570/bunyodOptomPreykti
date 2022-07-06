<script>
import Header from "./components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: { Header,Footer },
};
</script>

<template>
  <div>
    <div class="app">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style>
.app {
  padding-top: 80px;
 
}
</style>
