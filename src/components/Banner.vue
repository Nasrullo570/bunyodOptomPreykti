<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="banner_content">
          <swiper :modules="modules" :pagination="{ clickable: true }">
            <swiper-slide>
              <div class="slide">
                <div class="tex">
                  <h3>
                    KitKatdan mazali shokolad tatib ko’rib keyin bizga baho
                    bering
                  </h3>
                  <p>
                    KitKatdan mazali shokolad tatib ko’rib keyin bizga baho
                    bering KitKatdan mazali.
                  </p>
                  <button>Batafsil</button>
                </div>
                <img src="@/assets/img/Banner.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide">
                <div class="tex">
                  <h3>
                    KitKatdan mazali shokolad tatib ko’rib keyin bizga baho
                    bering
                  </h3>
                  <p>
                    KitKatdan mazali shokolad tatib ko’rib keyin bizga baho
                    bering KitKatdan mazali.
                  </p>
                  <button>Batafsil</button>
                </div>
                <img src="@/assets/img/Banner.png" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 50px;
  .banner_content {
    .slide {
      position: relative;
      .tex {
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translate(0, -50%);
        max-width: 500px;
        width: 100%;
        h3 {
          font-weight: 600;
          font-size: 23px;
          line-height: 29px;
          color: #ffffff;
        }
        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: #dadada;
          margin-top: 10px;
         }
        button {
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: #cecfff;
          padding: 10px 20px;
          border: 1px solid #fff;
          margin-top: 16px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style> 
