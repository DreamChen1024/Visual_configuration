<template>
  <van-swipe :autoplay="3000" :touchable="true">
    <van-swipe-item v-for="(image, index) in bannerData.imgs" :key="index" class="swipe-item">
      <img :src="image.src" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  watch: {
    bannerData: {
      handler(newVal, oldVal) {
        console.log(newVal, "222");
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.van-swipe {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>