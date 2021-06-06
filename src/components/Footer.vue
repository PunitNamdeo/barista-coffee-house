<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Barista Coffee House</strong> by
        <a
          class="has-text-weight-bold ref-link"
          target="_blank"
          href="https://github.com/PunitNamdeo"
          >Punit Namdeo</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #bb9675;
  color: #fff;
  padding: 1rem;

  .ref-link {
    color: #00947e;
  }
}
</style>
