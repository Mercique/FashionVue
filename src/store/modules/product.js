export default {
    state: {
        cart: [],
        cards: []
    },
    mutations: {
        updateCards(state, payload) {
            state.cards = payload;
        },
        updateCart(state, payload) {
            let bool = true;
            if (state.cart.length) {
                state.cart.forEach(el => {
                    if (el.id == payload.id) {
                        el.count++;
                        bool = false;
                    }
                });
                if (bool) {
                    state.cart.push(payload);
                }
            } else {
                state.cart.push(payload);
            }
        },
        deleteItemFromCart(state, id) {
            const index = state.cart.findIndex(el => el.id == id);
            if (state.cart[index].count != 1) {
                state.cart[index].count--;
            } else {
                state.cart.splice(index, 1);
            }
        }
    },
    getters: {
        allCards(state) {
            return state.cards;
        },
        allCart(state) {
            return state.cart;
        },
    },
    actions: {
        async fetchCards(ctx, url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                ctx.commit("updateCards", data);
            } catch {
                ctx.commit("updateCards", []);
            }
        }
    },
}