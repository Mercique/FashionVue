<template>
  <div class="home">
    <top />
    <sale />
    <section class="section center">
      <h2 class="section__heading">Fetured Items</h2>
      <p class="section__p">
        Shop for items based on what we featured in this week
      </p>
      <empty v-if="!cards.length" />
      <add-product-cards :cards="currentElements" gender="all" />
      <div class="section__link" v-if="cards.length">
        <router-link to="/catalog/all" class="link"
          >Browse All Product</router-link
        >
      </div>
    </section>
    <delivery />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Top from "../components/Top.vue";
import Sale from "../components/Sale.vue";
import Delivery from "../components/Delivery.vue";
import AddProductCards from "../components/AddProductCards.vue";
import Empty from "../components/Empty.vue";

export default {
  name: "HomePage",
  components: {
    Top,
    Sale,
    Delivery,
    AddProductCards,
    Empty,
  },
  computed: {
    ...mapGetters({ cards: "getCards" }),
    currentElements() {
      return this.cards.slice(0, 6);
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
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
  &__link {
    display: flex;
    justify-content: center;
    .link {
      padding: 15px 39px;
      font-size: 16px;
      line-height: 19px;
      border: 1px solid #f26376;
      color: #f26376;
      transition: all 0.3s ease;
      &:hover {
        color: #fff;
        background-color: #f26376;
      }
      &:active {
        border-color: #57242b;
        background-color: #57242b;
      }
    }
  }
}
</style>
