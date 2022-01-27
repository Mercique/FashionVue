export default {
  state: {
    productCards: [],
    productCart: [],
  },
  mutations: {
    AddToProductCards(state, payload) {
      state.productCards = payload;
    },
    AddToProductCart(state, payload) {
      const idx = state.productCart.findIndex((el) => el.id == payload.id);
      if (idx != -1) {
        state.productCart[idx].count++;
      } else {
        state.productCart.push(payload);
      }
    },
    deleteItemFromCart(state, id) {
      const index = state.productCart.findIndex((el) => el.id == id);
      if (state.productCart[index].count != 1) {
        state.productCart[index].count--;
      } else {
        state.productCart.splice(index, 1);
      }
    },
  },
  getters: {
    getProductCartFullValuePrice: (state) => {
      return state.productCart.reduce(
        (prev, cur) => cur.price * cur.count + prev,
        0
      );
    },
    getProductCartFullCount: (state) => {
      return state.productCart.reduce((prev, cur) => prev + cur.count, 0);
    },
    getCards: (state) => state.productCards,
    getCart: (state) => state.productCart,
  },
  actions: {
    async fetchCards(ctx, url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        ctx.commit("AddToProductCards", data);
      } catch {
        ctx.commit("AddToProductCards", []);
      }
    },
  },
};
