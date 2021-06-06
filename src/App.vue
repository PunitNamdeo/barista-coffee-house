<template>
  <div id="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Footer, Header },
};
</script>

<style lang="scss">
html {
  overflow-y: auto;

  #container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
