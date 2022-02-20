<template>
  <div class="CatalogPage">
    <breadcrumb :heading="heading" />
    <empty v-if="!cards.length" style="margin-top: 100px" />
    <div class="catalog center" v-else>
      <filter-catalog />
      <add-product-cards :cards="currentElements" />
      <div class="catalog__pagination">
        <pagination
          :cur="page"
          :n="n"
          :length="cards.length"
          @paginate="changePage"
        />
      </div>
    </div>
    <delivery />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddProductCards from "../components/AddProductCards.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Delivery from "../components/Delivery.vue";
import Empty from '../components/Empty.vue';
import FilterCatalog from '../components/FilterCatalog.vue';
import Pagination from "../components/Pagination.vue";

export default {
  components: { Breadcrumb, Delivery, AddProductCards, Pagination, Empty, FilterCatalog },
  name: "Catalog",
  data() {
    return {
      heading: "NEW ARRIVALS",
      page: 1,
      n: 9,
    };
  },
  computed: {
    ...mapGetters({ cards: "getCards" }),
    currentElements() {
      const { n, page } = this;
      return this.cards.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    changePage(p) {
      this.page = p;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
