<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__top">
        <header-comp />
        <top />
        <sale />
        <main class="main center">
          <product-cards />
        </main>
        <delivery />
      </div>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import Sale from "./components/Sale.vue";
import Top from "./components/Top.vue";
import Delivery from './components/Delivery.vue';
import ProductCards from './components/ProductCards.vue';

export default {
  name: "App",
  components: {
    HeaderComp,
    Top,
    Sale,
    FooterComp,
    Delivery,
    ProductCards,
  },
  data() {
    return {
      url: "/json/cards.json",
    };
  },
  methods: mapActions(["fetchCards"]),
  async mounted() {
    this.fetchCards(this.url);
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
</style>
