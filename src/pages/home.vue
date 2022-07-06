<template>
  <div>
    <Banner />
    <div class="category">
      <div class="container">
        <div class="category-top flex">
          <Content_title :title="'🍫 Kategoriya'" />
          <div class="btns">
            <button>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="44"
                  y="44"
                  width="44"
                  height="44"
                  rx="22"
                  transform="rotate(-180 44 44)"
                  fill="#CECFFF"
                />
                <path
                  d="M20.828 22L25.778 26.95L24.364 28.364L18 22L24.364 15.636L25.778 17.05L20.828 22Z"
                  fill="#2E3192"
                />
              </svg>
            </button>
            <button>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="22" fill="#CECFFF" />
                <path
                  d="M23.172 22L18.222 17.05L19.636 15.636L26 22L19.636 28.364L18.222 26.95L23.172 22Z"
                  fill="#2E3192"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <swiper
            class="swiper"
            :modules="modules"
            :space-between="30"
            :slides-per-view="6"
            :slides-per-group="1"
            :loop="true"
            :loop-fill-group-with-blank="true"
            :navigation="true"
          >
            <swiper-slide v-for="(item, index) in confet" :key="index">
              <div class="cat">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="likeTitle">
      <div class="container">
        <div class="likeTitle-top">
          <You_like :like="'🍫 Sizga yoqadiganlari'" />
        </div>
        <div>
          <div class="card-title">
            <div class="cards">
              <div
                class="card"
                v-for="(product, index) in products"
                :key="index"
                :product="product"
              >
                <img :src="product.src" alt="" />
                <h2 class="text1">{{ product.name }}</h2>
                <p class="text2">{{ product.price }}</p>
                <div class="imd">
                  <img class="imgs" :src="product.src1" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="partnerTitle">
    <div class="container">
      <div class="partnerTop flex">
        <Partners :partnerr="'💬 Hamkorlarimiz'" />
        <div>
          <button>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="44"
                y="44"
                width="44"
                height="44"
                rx="22"
                transform="rotate(-180 44 44)"
                fill="#CECFFF"
              />
              <path
                d="M20.828 22L25.778 26.95L24.364 28.364L18 22L24.364 15.636L25.778 17.05L20.828 22Z"
                fill="#2E3192"
              />
            </svg>
          </button>
          <button>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="22" fill="#CECFFF" />
              <path
                d="M23.172 22L18.222 17.05L19.636 15.636L26 22L19.636 28.364L18.222 26.95L23.172 22Z"
                fill="#2E3192"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="brends">
        <div class="brend">
          <div class="box">
            <swiper
              class="swiper"
              :modules="modules"
              :space-between="30"
              :slides-per-view="6"
              :slides-per-group="1"
              :centered-slides="true"
              :pagination="{ clickable: true }"
            >
              <swiper-slide v-for="(item, index) in brend" :key="index">
                <div class="cat1">
                  <img :src="item.img" alt="" /></div
              ></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clentTitle">
    <div class="container">
      <div class="clentTitle_Top">
        <Clent :clent="'💬 Mijozlarimizdan fikr-mulohazalar'" />
      </div>
      <div>
        <swiper
          class="swiper"
          :modules="modules"
          :space-between="10"
          :slides-per-view="3"
          :slides-per-group="1"
          :loop="true"
          :loop-fill-group-with-blank="true"
          :navigation="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(item, index) in users" :key="index">
            <div class="cata">
              <h4>{{ item.name }}</h4>
              <p>{{ item.text }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Content_title from "@/components/Content-title.vue";
import You_like from "@/components/You-like.vue";
import Partners from "@/components/Partners.vue";
import Clent from "@/components/Clent.vue";

import { defineComponent } from "vue";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// import "swiper/css/navigation";
export default defineComponent({
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
    Banner,
    Content_title,
    You_like,
    Partners,
    Clent,
  },
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      confet: [
        {
          name: "SHokolod",
          img: new URL("../assets/img/shokolodlar.png", import.meta.url),
          price: "10000",
        },
        {
          name: "SHokolod",
          img: new URL("../assets/img/shokolodlar2.png", import.meta.url),
          price: "10000",
        },
        {
          name: "SHokolod",
          img: new URL("../assets/img/shokolodlar3.png", import.meta.url),
          price: "10000",
        },
        {
          name: "SHokolod",
          img: new URL("../assets/img/shokolodlar5.png", import.meta.url),
          price: "10000",
        },
      ],

      products: [
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
        {
          name: "Shokolad",
          price: 123000,
          src: new URL("../assets/img/Tort.png", import.meta.url),
          src1: new URL("../assets/img/yurak.png", import.meta.url),
        },
      ],
    
      brend: [
        {
          img: new URL("../assets/img/brend1.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend3.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend2.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend4.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend5.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend2.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend4.png", import.meta.url),
        },
        {
          img: new URL("../assets/img/brend5.png", import.meta.url),
        },
      ],
      users: [
        {
          name: "Umidbek Jumaniyozov",
          text: "This product is exactly what I was needed. Awesome construction and incredible comfort while using.",
        },
        {
          name: "Umidbek Jumaniyozov",
          text: "This product is exactly what I was needed. Awesome construction and incredible comfort while using.",
        },
        {
          name: "Umidbek Jumaniyozov",
          text: "This product is exactly what I was needed. Awesome construction and incredible comfort while using.",
        },
        {
          name: "Umidbek Jumaniyozov",
          text: "This product is exactly what I was needed. Awesome construction and incredible comfort while using.",
        },
        {
          name: "Umidbek Jumaniyozov",
          text: "This product is exactly what I was needed. Awesome construction and incredible comfort while using.",
        },
      ],
    };
  },
 
});
</script>

<style lang="scss" scoped>
h1 {
  font-family: "poppins";
}
.category {
  margin-bottom: 50px;
}
.cat {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #000000;
  }
}
.likeTitle {
  margin-bottom: 40px;
  .card-title {
    .cards {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card {
        position: relative;
        margin-bottom: 20px;
        .imd {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .text1 {
        font-weight: 600;
        font-size: 20px;
        line-height: 136.52%;
        color: #283745;
      }
      .text2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #61778d;
      }
    }
  }
}
.partnerTitle {
  margin-bottom: 50px;
  .brends {
    .brend {
      .box {
        .cat1 {
          width: 193px;
          height: 193px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid #e2e2e2;
          border-radius: 10px;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}
.clentTitle {
  
  .cata {
    width: 400;
    height: 180px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      color: #16192c;
      margin-bottom: 16px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 23px;
      font-feature-settings: "salt" on;
      color: #425466;
    }
  }
}
</style>
