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
  .top__left {
    width: 50%;
  }
  .top__right {
    width: 50%;
    padding-left: 64px;
  }
  .top__content {
    margin-top: 40%;
    padding-left: 16px;
    border-left: 12px solid #f16d7f;
  }
  .top__heading {
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
  }
  .top__heading-mini {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    color: #222222;
  }
  .top__heading-mini-word {
    color: #f16d7f;
  }
}
</style>