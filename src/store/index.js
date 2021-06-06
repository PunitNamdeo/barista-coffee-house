import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    orders: [],
    payments: [],
    prices: [],
  },
  getters: {},
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    setPayments(state, payload) {
      state.payments = payload;
    },
    setPrices(state, payload) {
      state.prices = payload;
    },
  },
  actions: {
    async getPrices({ commit }) {
      try {
        const response = await axios.get("http://localhost:5000/prices");
        commit("setPrices", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getPayments({ commit }) {
      try {
        const response = await axios.get("http://localhost:5000/payments");
        let consolidatedPaymentObj = {},
          amountPaidByEachUser = [];
        response.data.forEach((paymentObj) => {
          if (consolidatedPaymentObj[paymentObj.user]) {
            consolidatedPaymentObj[paymentObj.user] =
              consolidatedPaymentObj[paymentObj.user] + paymentObj.amount;
          } else {
            consolidatedPaymentObj[paymentObj.user] = paymentObj.amount;
          }
        });
        for (let property in consolidatedPaymentObj) {
          amountPaidByEachUser.push({
            user: property,
            totalPaidAmount: consolidatedPaymentObj[property],
          });
        }
        commit("setPayments", amountPaidByEachUser);
      } catch (error) {
        console.log(error);
      }
    },

    async getOrders({ state, commit, dispatch }) {
      await dispatch("getPrices");
      await dispatch("getPayments");
      try {
        let groupedCustomers, totalAmountOfOrder, paymentSum;
        const response = await axios.get("http://localhost:5000/orders");
        // eslint-disable-next-line no-inner-declarations
        function groupOrderOfCustomers(orderList, key) {
          return orderList.reduce((customerData, sameCustomerOrderArr) => {
            (customerData[sameCustomerOrderArr[key]] =
              customerData[sameCustomerOrderArr[key]] || []).push(
              sameCustomerOrderArr
            );
            return customerData;
          }, {});
        }

        groupedCustomers = groupOrderOfCustomers(response.data, "user");

        for (let key in groupedCustomers) {
          groupedCustomers[key] = groupedCustomers[key].map((customerOrder) => {
            state.prices.forEach((price) => {
              if (price.drink_name === customerOrder.drink) {
                price = { price: price.prices[customerOrder.size] };
                customerOrder = { ...customerOrder, ...price };
                return customerOrder;
              }
            });
            return customerOrder;
          });

          totalAmountOfOrder = groupedCustomers[key].reduce(
            (accumulator, current) => accumulator + current.price,
            0
          );
          groupedCustomers[key] = {
            ...{ purchases: groupedCustomers[key] },
            ...{ totalAmountOfOrder: totalAmountOfOrder },
          };

          Object.keys(state.payments).forEach((pay) => {
            if (state.payments[pay].user === key) {
              paymentSum = {
                totalPaidAmount: state.payments[pay].totalPaidAmount,
                balance:
                  state.payments[pay].totalPaidAmount -
                  groupedCustomers[key].totalAmountOfOrder,
                owed:
                  state.payments[pay].totalPaidAmount <
                  groupedCustomers[key].totalAmountOfOrder,
              };
              groupedCustomers[key] = {
                ...groupedCustomers[key],
                ...paymentSum,
              };
              return groupedCustomers[key];
            }
          });
        }
        commit("setOrders", groupedCustomers);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
