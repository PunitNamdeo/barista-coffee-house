<template>
  <div>
    <!--  navigation based on the default and user selection route  -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img class="barista-icon" src="../assets/icons/barista-icon.png" />
          <strong class="hero-logo">Barista Coffee House</strong>
        </router-link>

        <a
          v-on:click="onActive"
          role="button"
          class="navbar-burger burger"
          v-bind:class="[isActive ? 'is-active' : null]"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        v-bind:class="[isActive ? 'is-active' : null]"
      >
        <div class="navbar-end">
          <router-link
            to="/"
            class="navbar-item pr-4"
            :class="[onLoadActive ? 'active-on-load' : null]"
          >
            <div class="icon-label">
              <img src="../assets/icons/coffee.svg" />Beverages
            </div>
            <span class="label-header">Beverages</span>
          </router-link>

          <router-link to="/calculations" class="navbar-item pr-4">
            <div class="icon-label">
              <img src="../assets/icons/shopping-bag.svg" />Calculation
            </div>

            <span class="label-header">Calculation</span>
          </router-link>
        </div>
      </div>
    </nav>
    <!-- To display the Barista coffee content and with nice background image  -->
    <div class="menu container">
      <div class="header-coffee">
        <span class="label-hero">Coffee matters</span>
        <div class="inline-img">
          <img src="../assets/Humanity_runs_on_coffee.png" class="hero-img" />
        </div>
      </div>
      <div class="header">
        <h2>
          Delicious drinks and great food. The secret to making your life
          better.
        </h2>
        <span class="header-paragraph"
          >The perfect cup of coffee and a delicious, hearty snack to accompany
          it can cheer you up for the whole day. Therefore, we strive to ensure
          that whatever you choose is of the best quality.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
/**
 * The Header component.
 * To provide the responsive navigation with some barista coffee content.
 */
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
      onLoadActiveClass: true,
    };
  },
  computed: {
    /**
     * To display the default selection of navigation on page load.
     */
    onLoadActive() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$route.path === "/calculations" ? (this.onLoadActiveClass = false) : (this.onLoadActiveClass = true);
    },
  },
  methods: {
    /**
     * To set the isActive flag for responsiveness navigation.
     */
    onActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.barista-icon {
  max-height: 3.5rem;
}
.icon-label {
  width: 75px;
  height: 50px;
}
.hero-logo {
  margin-left: 10px;
}

.label-header {
  display: none;
}

a.navbar-item:focus-within,
a.navbar-item:hover {
  color: #000000;
}

.active-on-load {
  background-color: #fafafa;
}

/* media query for the device max-width 1024px */
@media screen and (max-width: 1024px) {
  .icon-label {
    display: none;
  }
  .label-header {
    display: block;
  }
}
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;

  .header-coffee {
    color: #fff;
    font-size: 20px;
    font-weight: 700;

    .label-hero {
      position: absolute;
      left: 10px;
      top: 10px;
    }

    .inline-img {
      width: 100%;
    }

    .hero-img {
      width: 100%;
    }
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;

  .header-paragraph {
    margin-top: 20px;
    font-size: 22px;
  }

  h2 {
    background-color: #bb9675;
    color: white;
    padding: 8px;
    font-weight: 700;
    width: 100%;
    text-align: center;
  }
}
/* media query for the device max-width 740px */
@media screen and (max-width: 740px) {
  .header {
    h2 {
      font-size: 16px;
    }
    .header-paragraph {
      font-size: 16px;
    }
  }
}
</style>
