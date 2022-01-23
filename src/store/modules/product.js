import localDB from '../../db/cards.json';

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
        fetchCards(ctx) {
            const cards = localDB;

            console.log(cards);

            ctx.commit('updateCards', cards);
        }
    },
}