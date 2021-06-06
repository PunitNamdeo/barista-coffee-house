<template>
  <div class="menu container">
    <div class="prices">
      <div
        v-if="prices"
        class="beverages has-text-centered has-text-weight-bold"
      >
        Beverages
      </div>
      <ul class="drink-list">
        <li :key="index" v-for="(drink, index) in prices" class="drink">
          <div class="name has-text-weight-semibold">
            {{ drink.drink_name }}
          </div>
          <ul class="types">
            <li
              :key="index"
              v-for="(price, key, index) in drink.prices"
              class="type"
            >
              {{ key }} <span class="price">{{ price }}&euro;</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Prices",
  computed: {
    ...mapState(["prices"]),
  },
  methods: {
    ...mapActions(["getPrices"]),
  },
  mounted() {
    this.getPrices();
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;

  .beverages {
    background-color: #00947e;
    color: white;
    padding: 8px;
    margin: 15px 0 15px 0;
  }

  .drink {
    background-color: #eeeeee;
    margin-bottom: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    .name {
      text-transform: uppercase;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }

  .types {
    display: flex;
    .type {
      background-color: #fff;
      border-radius: 25px;
      font-size: 14px;
      padding-left: 10px;
      padding-right: 10px;
      margin-left: 5px;
      margin-right: 5px;
      .price {
        margin-left: 2px;
      }
    }
  }
}
</style>
