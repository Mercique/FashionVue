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
          <product-cards :cards="cards" />
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

export default {
  name: "App",
  components: { HeaderComp, Top, Sale, FooterComp, ProductCards },
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "images/products/card1.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 140,
        },
        {
          id: 2,
          img: "images/products/card2.jpg",
          
          alt: "model-women-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 200,
        },
        {
          id: 3,
          img: "images/products/card3.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 15,
        },
        {
          id: 4,
          img: "images/products/card4.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 50,
        },
        {
          id: 5,
          img: "images/products/card5.jpg",
          alt: "model-women-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 180,
        },
        {
          id: 6,
          img: "images/products/card6.jpg",
          alt: "model-women-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 35,
        },
        {
          id: 7,
          img: "images/products/card7.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 52,
        },
        {
          id: 8,
          img: "images/products/card8.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 200,
        },
        {
          id: 9,
          img: "images/products/card9.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 90,
        },
        {
          id: 10,
          img: "images/products/card10.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 120,
        },
        {
          id: 11,
          img: "images/products/card11.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 30,
        },
        {
          id: 12,
          img: "images/products/card12.jpg",
          alt: "model-men-pic",
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 70,
        },
      ],
    };
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
