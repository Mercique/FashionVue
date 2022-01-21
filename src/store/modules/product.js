export default {
    state: {
        cards: []
    },
    mutations: {
        updateCards(state, payload) {
            state.cards = payload;
        }
    },
    getters: {
        allCards(state) {
            return state.cards;
        }
    },
    actions: {
        async fetchCards(ctx) {
            const res = await fetch('../../db/cards.json');
            const cards = await res.json();

            console.log(cards);

            ctx.commit('updateCards', cards);
        }
    },
}