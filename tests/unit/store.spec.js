import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { state, actions, mutations, getters } from "@/store";
import axios from "axios";

const localVue = createLocalVue();
localVue.use(Vuex);

/**
 * To demonstrate the unit testing of store/index.js file.
 * Handle the asynchronous service call inside state management
 */
describe("Barista Coffee Shop - unit test cases of asynchronous service call inside state management", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      actions,
      mutations,
      getters,
    });
  });

  it("should call the getPrices() and handle the response", async () => {
    const spyOnAjax = await jest.spyOn(axios, "get").mockResolvedValue({
      status: 200,
      data: [{ drink_name: "short espresso", prices: { small: 3.0 } }],
    });

    await store.dispatch("getPrices");
    expect(spyOnAjax).toHaveBeenCalled();
  });

  it("should call the getPayments() handle the response", async () => {
    const spyOnAjax = await jest.spyOn(axios, "get").mockResolvedValue({
      status: 200,
      data: [{ user: "coach", amount: 27 }],
    });

    await store.dispatch("getPayments");
    expect(spyOnAjax).toHaveBeenCalled();
  });

  it("should call the getOrders() handle the response", async () => {
    const spyOnAjax = await jest.spyOn(axios, "get").mockResolvedValue({
      status: 200,
      data: [
        {
          user: "coach",
          drink: "long black",
          size: "medium",
        },
      ],
    });

    await store.dispatch("getOrders");
    expect(spyOnAjax).toHaveBeenCalled();
  });

  it("should call the getOrders() handle the error", async () => {
    const spyOnAjax = await jest.spyOn(axios, "get").mockResolvedValue({
      status: 500,
      error: "Page not found",
    });

    await store.dispatch("getOrders");
    expect(spyOnAjax).toHaveBeenCalled();
  });
});
