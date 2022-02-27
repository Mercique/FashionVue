<template>
  <div class="CatalogPage">
    <breadcrumb :heading="heading" />
    <empty v-if="!cards.length" style="margin-top: 100px" />
    <div class="catalog center" v-else>
      <filter-catalog />
      <add-product-cards :cards="currentElements" :gender="gender" />
      <div class="catalog__pagination">
        <pagination
          :cur="page"
          :n="n"
          :length="cards.length"
          @paginate="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddProductCards from "../components/AddProductCards.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Empty from "../components/Empty.vue";
import FilterCatalog from "../components/FilterCatalog.vue";
import Pagination from "../components/Pagination.vue";

export default {
  components: {
    Breadcrumb,
    AddProductCards,
    Pagination,
    Empty,
    FilterCatalog,
  },
  name: "Catalog",
  data() {
    return {
      heading: "NEW ARRIVALS",
      page: 1,
      n: 9,
      gender: "",
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
    ...mapMutations(["getGenderFilter"]),
    changePage(p) {
      this.page = p;
    },
    genderFilter() {
      this.getGenderFilter(this.gender);
    },
  },
  mounted() {
    this.gender = this.$route.params.category;
    this.genderFilter();
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
