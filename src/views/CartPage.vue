<template>
  <div class="cartPage">
    <breadcrumb :heading="heading" />
    <div class="cart center">
      <empty-cart v-if="!cart.length" />
      <div class="cart__container" v-else>
        <div class="cart__box">
          <div class="cart__cards">
            <div class="cart__item" v-for="item in cart" :key="item.id">
              <router-link to="/dev" class="cart__item-img">
                <img :src="require('../assets/' + item.img)" :alt="item.alt" />
              </router-link>
              <div class="cart__item-info">
                <div class="cart__item-heading">
                  <router-link to="/dev" class="cart__item-title">{{
                    item.title
                  }}</router-link>
                  <button
                    type="button"
                    class="delete-btn"
                    @click="removeFromCart(item.id)"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                        fill="#575757"
                      />
                    </svg>
                  </button>
                </div>
                <div class="cart__item-box">
                  <p class="cart__item-price">
                    Price: <span>${{ item.price }}</span>
                  </p>
                  <p class="cart__item-color">Color: red</p>
                  <p class="cart__item-size">Size: XL</p>
                  <p class="cart__item-quantity">
                    Quantity:
                    <button
                      type="button"
                      class="arrow-btn"
                      @click="removeItem(item.id)"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.328 45.6C28.703 45.9749 29.2117 46.1856 29.742 46.1856C30.2723 46.1856 30.7809 45.9749 31.156 45.6L33.681 43.076C33.8668 42.8903 34.0142 42.6698 34.1147 42.4271C34.2153 42.1843 34.2671 41.9242 34.2671 41.6615C34.2671 41.3988 34.2153 41.1386 34.1147 40.8959C34.0142 40.6532 33.8668 40.4327 33.681 40.247L17.43 24L33.681 7.749C33.8668 7.56327 34.0142 7.34275 34.1147 7.10005C34.2153 6.85735 34.2671 6.59721 34.2671 6.3345C34.2671 6.07178 34.2153 5.81165 34.1147 5.56894C34.0142 5.32624 33.8668 5.10572 33.681 4.92L31.156 2.4C30.7809 2.02505 30.2723 1.81442 29.742 1.81442C29.2117 1.81442 28.703 2.02505 28.328 2.4L8.14899 22.575C7.77405 22.9501 7.56342 23.4587 7.56342 23.989C7.56342 24.5193 7.77405 25.0279 8.14899 25.403L28.328 45.6Z"
                          fill="#333333"
                        />
                      </svg>
                    </button>
                    {{ item.count }}
                    <button
                      type="button"
                      class="arrow-btn"
                      @click="addItem(item)"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.66 45.177C16.4743 45.3628 16.2538 45.5102 16.0111 45.6108C15.7684 45.7113 15.5082 45.7631 15.2455 45.7631C14.9828 45.7631 14.7227 45.7113 14.48 45.6108C14.2373 45.5102 14.0167 45.3628 13.831 45.177L11.307 42.653C11.1212 42.4673 10.9738 42.2468 10.8733 42.0041C10.7727 41.7614 10.7209 41.5012 10.7209 41.2385C10.7209 40.9758 10.7727 40.7157 10.8733 40.473C10.9738 40.2303 11.1212 40.0097 11.307 39.824L27.558 23.573L11.307 7.32201C11.1212 7.13628 10.9738 6.91577 10.8733 6.67306C10.7727 6.43036 10.7209 6.17022 10.7209 5.90751C10.7209 5.6448 10.7727 5.38466 10.8733 5.14195C10.9738 4.89925 11.1212 4.67874 11.307 4.49301L13.831 1.96901C14.0167 1.7832 14.2373 1.63581 14.48 1.53525C14.7227 1.43469 14.9828 1.38293 15.2455 1.38293C15.5082 1.38293 15.7684 1.43469 16.0111 1.53525C16.2538 1.63581 16.4743 1.7832 16.66 1.96901L36.839 22.148C37.214 22.5231 37.4246 23.0317 37.4246 23.562C37.4246 24.0923 37.214 24.601 36.839 24.976L16.66 45.177Z"
                          fill="#333333"
                        />
                      </svg>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cart__btns">
            <button type="button" class="btn" @click="clearCart">CLEAR SHOPPING CART</button>
            <router-link to="/dev" class="btn">CONTINUE SHOPPING</router-link>
          </div>
        </div>
        <div class="cart__total">
          <div class="cart__total-adress">
            <h3 class="cart__total-title">SHIPPING ADRESS</h3>
            <input type="text" placeholder="Bangladesh" />
            <input type="text" placeholder="State" />
            <input type="number" placeholder="Postcode / Zip" />
            <button type="button" class="adress-btn">GET A QUOTE</button>
          </div>
          <div class="cart__total-box">
            <p class="cart__total-text">
              GRAND TOTAL <span>${{ fullCount }}</span>
            </p>
            <div class="line"></div>
            <button type="submit" class="cart__total-buy">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Breadcrumb from "../components/Breadcrumb.vue";
import EmptyCart from "../components/EmptyCart.vue";

export default {
  components: { EmptyCart, Breadcrumb },
  name: "CartPage",
  data() {
    return {
      heading: "SHOPPING CART",
    };
  },
  computed: mapGetters({
    cart: "getCart",
    fullCount: "getProductCartFullValuePrice",
  }),
  methods: {
    ...mapMutations([
      "deleteFullItemCountfromCart",
      "AddToProductCart",
      "deleteItemFromCart",
      "clearFullCart",
    ]),
    removeFromCart(id) {
      this.deleteFullItemCountfromCart(id);
    },
    addItem(item) {
      this.AddToProductCart(item);
    },
    removeItem(id) {
      this.deleteItemFromCart(id);
    },
    clearCart() {
      this.clearFullCart();
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  padding-top: 96px;
  padding-bottom: 128px;
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__box {
    width: 650px;
  }
  &__cards {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__item {
    width: 100%;
    display: flex;
    filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13));
    img {
      height: 300px;
    }
    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 22px 22px 62px 32px;
      background: #fff;
    }
    &-box {
      font-size: 22px;
      line-height: 26px;
      color: #575757;
    }
    &-title {
      display: flex;
      align-items: baseline;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #222222;
    }
    &-price {
      display: inline-block;
      span {
        color: #f16d7f;
      }
    }
    &-heading {
      display: flex;
    }
    .delete-btn {
      margin-left: auto;
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    .btn {
      font-weight: 300;
      padding: 16px 40px;
      border: 1px solid #a4a4a4;
      color: #000;
      background-color: #fff;
      transition: all 0.3s ease;
      &:hover {
        color: #fff;
        background-color: #a4a4a4;
      }
      &:active {
        border-color: #333;
        background-color: #333;
      }
    }
  }
  &__total {
    width: 360px;
    &-box {
      height: 214px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 43px;
      background: #f5f3f3;
    }
    .line {
      margin: 17px 0 21px;
      height: 1px;
      background: #e2e2e2;
    }
    &-text {
      text-align: right;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #222222;
      span {
        padding-left: 20px;
        font-weight: 700;
        color: #f16d7f;
      }
    }
    &-buy {
      padding: 15px 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      border: 1px solid transparent;
      background: #f16d7f;
      transition: all 0.2s ease;
      &:active {
        border-color: #79363f;
        background: #79363f;
      }
    }
    &-adress {
      margin-top: 20px;
      margin-bottom: 57px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &-title {
      font-style: 400;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #222;
    }
    ::placeholder {
      opacity: .5;
    }
    input {
      height: 45px;
      padding-left: 17px;
      padding-right: 17px;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      border: 1px solid #A4A4A4;
      color: #222;
    }
    .adress-btn {
      width: 100px;
      height: 34px;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      border: 1px solid #A4A4A4;
      color: #4A4A4A;
      background-color: #fff;
      transition: all .2s ease;
      &:hover {
        color: #fff;
        background-color: #a4a4a4;
      }
      &:active {
        border-color: #333;
        background-color: #333;
      }
    }
  }
}
</style>
