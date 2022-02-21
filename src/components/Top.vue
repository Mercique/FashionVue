<template>
  <div class="top">
    <div class="top__left">
      <img src="../assets/images/top/top-img.png" alt="top-pic" />
    </div>
    <div class="top__right">
      <div class="top__content">
        <h1 class="top__heading">THE BRAND</h1>
        <h2 class="top__heading-mini">
          OF LUXERIOUS <span class="top__heading-mini-word">FASHION</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  padding-left: calc(50% - 800px);
  padding-right: calc(50% - 800px);
  background-color: #f1e4e6;
  &__left {
    width: 50%;
  }
  &__right {
    width: 50%;
    padding-left: 64px;
  }
  &__content {
    margin-top: 40%;
    padding-left: 16px;
    border-left: 12px solid #f16d7f;
  }
  &__heading {
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
  }
  &__heading-mini {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    color: #222222;
  }
  &__heading-mini-word {
    color: #f16d7f;
  }
}

@media (max-width: 1200px) {
  .top {
    &__right {
      padding-left: calc(0px + (64 - 0) * ((100vw - 375px) / (1200 - 375)));
    }
    &__heading {
      font-size: calc(38px + (48 - 38) * ((100vw - 375px) / (1200 - 375)));
      line-height: calc(46px + (58 - 46) * ((100vw - 375px) / (1200 - 375)));
    }
    &__heading-mini {
      font-size: calc(20px + (32 - 20) * ((100vw - 375px) / (1200 - 375)));
      line-height: calc(24px + (39 - 24) * ((100vw - 375px) / (1200 - 375)));
    }
  }
}

@media (max-width: 768px) {
 .top {
    &__right {
      padding-left: 0;
    }
  }
}

@media (max-width: 630px) {
 .top {
    &__left {
      display: none;
    }
    &__right {
      width: 100%;
      height: 363px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__content {
      margin-top: 0;
    }
  }
}
</style>
