<template>
  <div class="pagination">
    <div class="pagination__btn" @click="onClickPage(cur - 1)">
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="pagination__nums">
      <div class="pagination__nums-btn"
        v-for="page in amount"
        :key="page"
        @click="onClickPage(page)"
        :class="{ active: page === cur }"
      >
        {{ page }}
      </div>
    </div>
    <div class="pagination__btn" @click="onClickPage(cur + 1)">
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    n: Number,
    cur: Number,
    length: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClickPage(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 20px;
  user-select: none;
  padding: 15px 16px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  &__btn {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &__nums {
    display: flex;
    gap: 25px;
    &-btn {
      font-family: "Lato-300", sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      cursor: pointer;
      color: #d7d7d7;
    }
  }
}
.active {
  color: #EF5B70;
}
</style>
