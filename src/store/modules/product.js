import localDB from '../../db/cards.json';

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
        fetchCards(ctx) {
            const cards = localDB;

            console.log(cards);

            ctx.commit('updateCards', cards);
        }
    },
}