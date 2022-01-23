<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__top">
        <header-comp />
        <top />
        <sale />
        <main class="main center">
          <h2 class="main__heading">Fetured Items</h2>
          <p class="main__p">
            Shop for items based on what we featured in this week
          </p>
          <product-cards :cards="currentElements" />
          <pagination
            :cur="page"
            :n="n"
            :length="cards.length"
            @paginate="changePage"
          />
        </main>
      </div>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import ProductCards from "./components/ProductCards.vue";
import Sale from "./components/Sale.vue";
import Top from "./components/Top.vue";
import Pagination from "./components/Pagination.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    HeaderComp,
    Top,
    Sale,
    FooterComp,
    ProductCards,
    Pagination,
  },
  data() {
    return {
      page: 1,
      n: 6,
    };
  },
  computed: {
    ...mapGetters({ cards: "allCards" }),
    currentElements() {
      const { n, page } = this;
      return this.cards.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    ...mapActions(["fetchCards"]),
    changePage(p) {
      this.page = p;
    },
  },
  async mounted() {
    this.fetchCards();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Lato-400, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 17px;
}

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  &__top {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
  }
}

.main {
  padding-top: 96px;
  &__heading {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #222222;
  }
  &__p {
    margin-top: 6px;
    margin-bottom: 48px;
    text-align: center;
    color: #9f9f9f;
  }
}
</style>
