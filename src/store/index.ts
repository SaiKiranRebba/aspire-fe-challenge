import { Card } from "@/types/card";
import { loadCards, saveCards } from "@/services/cardService";
import { createStore } from "vuex";

interface State {
  cards: Card[];
}

const store = createStore<State>({
  state: {
    cards: [
      {
        id: "1",
        name: "Mark Henry",
        number: "1111 1111 1111 1111",
        expiry: "12/20",
        frozen: true,
        cvv: 111,
      },
      {
        id: "2",
        name: "Mark Henry1",
        number: "1111 1111 1111 1111",
        expiry: "12/20",
        frozen: true,
        cvv: 111,
      },
    ],
  },
  mutations: {
    ADD_CARD(state, card: Card) {
      state.cards.push(card);
      saveCards(state.cards);
    },
    TOGGLE_FREEZE(state, cardId: string) {
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        card.frozen = !card.frozen;
        saveCards(state.cards);
      }
    },
  },
  actions: {
    addCard({ commit }, card: Card) {
      commit("ADD_CARD", card);
    },
    toggleFreeze({ commit }, cardId: string) {
      commit("TOGGLE_FREEZE", cardId);
    },
  },
  getters: {
    cards: (state) => state.cards,
  },
});

export default store;
