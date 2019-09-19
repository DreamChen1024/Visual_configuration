<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in swiperData.imgs" :key="index">
        <img :src="item.src" alt @click="triggerClick(index)">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
  </div>
</template>
<script type='text/ecmascript-6'>
import { Swiper, swiper, swiperSlide } from "vue-awesome-swiper";
import swiper2 from "vue-awesome-swiper";
import { setTimeout } from "timers";
export default {
  props: {
    swiperData: {
      type: Object,
      default() {
        return {};
      }
    },
    speed: {
      type: Number,
      default: 800
    },
    effect: {
      type: String,
      default: "slide"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    centeredSlides: {
      type: Boolean,
      default: false
    },
    slidesPerView: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      option: {}
    };
  },

  created() {
    console.log(swiper2);
    const _this = this;
    this.option = {
      //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      //循环
      loop: this.loop,
      //设定初始化时slide的索引
      initialSlide: 0,   
      // activeIndex: 2,
      effect: this.effect,
      //自动播放
      autoplay: this.autoplay,
      //滑动速度
      speed: this.speed,
      //滑动方向
      direction: this.direction,
      //小手掌抓取滑动
      grabCursor: true,
      // slidesOffsetBefore : -40,
      //分页器设置
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      },
      centeredSlides: this.centeredSlides,
      slidesPerView: this.slidesPerView,
      on: {
        slideChange: function(activeIndex) {
          // console.log(this.activeIndex)
          _this.$emit("parentTab", this.activeIndex);
        }
      }
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", this.option);
  },
  methods: {
    triggerClick(index) {
      this.swiper.slideTo(index, 1000, false);
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang='scss' type='text/css' scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    display: inline-flex;
  }
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-active {
    transform: scale(1.1);
    transition: transform 0.3s linear;
  }
}
</style>