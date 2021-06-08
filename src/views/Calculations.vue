<template>
  <div class="container">
    <div class="order">
      <div class="calculations has-text-centered has-text-weight-bold">
        Calculations
      </div>
      <ul class="client__heading has-text-weight-semibold">
        <li>Name</li>
        <li>Orders</li>
        <li>Payment</li>
        <li>Balance</li>
        <li>Owed</li>
      </ul>
      <!--  To display the list view of each user-  Amount of ordered coffee, paid amount,
      remaining balance and based on that owed condition  -->
      <ul class="clients has-text-weight-semibold">
        <li :key="key" v-for="(order, key) in orders">
          <div class="client">
            <ul class="client__info">
              <li>{{ key }}</li>
              <li>{{ order.totalAmountOfOrder }}&euro;</li>
              <li>{{ order.totalPaidAmount }}&euro;</li>
              <li>{{ order.balance }}&euro;</li>
              <li>{{ owed(order.owed) }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

/**
 * To display the final calculation based on amount paid of coffee by each user and purchased coffee.
 */
export default {
  name: "Calculations",
  computed: {
    ...mapState(["orders"]),
  },
  methods: {
    ...mapActions(["getOrders"]),
    owed(el) {
      return el ? "yes" : "no";
    },
  },
  mounted() {
    /**
     * call the getOrders() on view load
     */
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  .calculations {
    background-color: #00947e;
    color: white;
    padding: 8px;
    margin: 15px 0 15px 0;
  }

  .clients {
    border: 1px solid #eeeeee;
    & > li:nth-child(even) {
      background-color: #eeeeee;
    }
  }
  .client {
    &__heading,
    &__info {
      display: flex;
      li {
        width: 20%;
        padding: 5px;
      }
    }

    &__heading {
      background-color: #bb9675;
      color: #fff;
    }
  }
}
</style>
