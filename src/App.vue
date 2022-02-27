<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__top">
        <header-comp />
        <router-view></router-view>
      </div>
      <delivery v-if="this.$route.name === 'catalog'"/>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import Delivery from './components/Delivery.vue';

export default {
  name: "App",
  components: { FooterComp, HeaderComp, Delivery },
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &__top {
    flex-grow: 1;
    position: relative;
  }
}
</style>
