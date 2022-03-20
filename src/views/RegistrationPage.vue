<template>
  <div class="registrationPage">
    <breadcrumb :heading="heading" />
    <div class="registration center">
      <div class="registration-left">
        <form action="#" class="registration__form">
          <div class="registration__textarea">
            <h3 class="registration__title">Your Name</h3>
            <input
              type="text"
              class="registration__input"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              class="registration__input"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="registration__box-radio">
            <label class="registration__label">
              <input type="radio" class="radio" name="radio" value="1" />
              <span class="label__span">Male</span>
            </label>
            <label class="registration__label">
              <input type="radio" class="radio" name="radio" value="2" />
              <span class="label__span">Female</span>
            </label>
          </div>
          <div class="registration__textarea">
            <h3 class="registration__title">Login details</h3>
            <input
              type="email"
              class="registration__input"
              placeholder="Email"
              required
            />
            <input
              type="password"
              class="registration__input"
              placeholder="Password"
              required
            />
          </div>
          <p class="registration__text">
            Please use 8 or more characters, with at least 1 number and a
            mixture of uppercase and lowercase letters
          </p>
          <div class="btn__box">
            <button class="registration__btn" type="button">
              JOIN NOW
              <svg
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="registration-right">
        <h2 class="registration__heading">LOYALTY HAS ITS PERKS</h2>
        <p class="registration__subtext">
          Get in on the loyalty program where you can earn points and unlock
          serious perks. Starting with these as soon as you join:
        </p>
        <ul class="registration__menu">
          <li class="menu__list">
            <span class="list-text">15% off welcome offer</span>
          </li>
          <li class="menu__list">
            <span class="list-text"
              >Free shipping, returns and exchanges on all orders</span
            >
          </li>
          <li class="menu__list">
            <span class="list-text">$10 off a purchase on your birthday</span>
          </li>
          <li class="menu__list">
            <span class="list-text">Early access to products</span>
          </li>
          <li class="menu__list">
            <span class="list-text">Exclusive offers & rewards</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  components: { Breadcrumb },
  name: "RegistationPage",
  data() {
    return {
      heading: "REGISTRATION",
    };
  },
};
</script>

<style lang="scss" scoped>
.registration {
  padding-top: 64px;
  padding-bottom: 96px;
  display: flex;
  justify-content: space-between;
  gap: 22px;
  &-left {
    width: 360px;
    .registration__form {
      display: flex;
      flex-direction: column;
    }
    .registration__title {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 20px;
      color: #222222;
    }
    .registration__text {
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      margin-top: 15px;
      margin-bottom: 39px;
      color: #B1B1B1;
    }
    .registration__box-radio {
      margin-top: 31px;
      margin-bottom: 33px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .registration__label {
      cursor: pointer;
    }
    .registration__input {
      width: 100%;
      height: 45px;
      padding: 0 17px;
      border: 1px solid #A4A4A4;
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
      &::placeholder {
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #B1B1B1;
      }
    }
    .label__span {
      position: relative;
      padding-left: 27px;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      color: #000000;
      &::before {
        content: '';
        display: block;
        width: 17px;
        height: 17px;
        position: absolute;
        top: -2px;
        left: 0;
        border: 1px solid #A4A4A4;
        border-radius: 50%;
      }
      &::after {
        content: '';
        display: block;
        width: 9px;
        height: 9px;
        position: absolute;
        top: 2px;
        left: 4px;
        opacity: 0;
        background-color: #000;
        border-radius: 50%;
        transition: all .3s ease;
      }
    }
    .radio {
      display: none;
      &:checked + .label__span::after {
        opacity: 1;
      }
    }
    .registration__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 16px 30px;
      border: 1px solid transparent;
      color: #fff;
      background-color: #f16d7f;
      transition: all .2s ease;
      &:hover {
        border-color: #e9a4ad;
        background-color: #e9a4ad;
      }
      &:active {
        border-color: #79363f;
        background-color: #79363f;
      }
    }
  }
  &-right {
    max-width: 652px;
    color: #000;
    font-family: "Lato-300", sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    .registration__menu {
      list-style-image: url(../assets/images/rega.svg);
      list-style-position: inside;
    }
    .registration__heading {
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
    }
    .registration__subtext {
      margin: 22px 0;
    }
    .menu__list:not(:last-of-type) {
      margin-bottom: 16px;
    }
    .list-text {
      padding-left: 14px;
    }
  }
}

@media (max-width: 1200px) {
  .registration {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 1067px) {
  .registration {
    padding-top: 40px;
    justify-content: center;
    .registration-right {
      max-width: 354px;
    }
    .registration__heading, .registration__subtext, .list-text {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
    }
  }
}

@media (max-width: 768px) {
  .registration {
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}
</style>