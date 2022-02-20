export default {
  state: {
    productCards: [],
    productCart: [],
    history: [],
  },
  mutations: {
    AddToProductCards(state, payload) {
      state.productCards = payload;
      state.history = payload;
    },
    AddToProductCart(state, payload) {
      const idx = state.productCart.findIndex((el) => el.id == payload.id);
      if (idx != -1) {
        if (state.productCart[idx].count < 10) {
          state.productCart[idx].count++;
        } else {
          return state.productCart[idx].count;
        }
      } else {
        state.productCart = [...state.productCart, payload];
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
    deleteFullItemCountfromCart(state, id) {
      const index = state.productCart.findIndex((el) => el.id == id);
      state.productCart.splice(index, 1);
    },
    clearFullCart(state) {
      state.productCart = [];
    },
    searchfilteredCards(state, text) {
      state.productCards = state.history;
      let regexp = new RegExp(text, 'i');
      state.productCards = state.productCards.filter(product => regexp.test(product.title));
    }
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
