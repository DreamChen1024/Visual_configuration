<template>
  <div class="grid">
    <van-grid :border="false" :column-num="colNum">
      <van-grid-item v-for="(item, index) in gridData.imgs" :key="index">
        <van-image :src="item.src" />
        <div class="title">{{item.title}}</div>
        <div class="details">{{item.details}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    gridData: {
      type: Object,
      default: {}
    },
    colNum: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/css/global.scss";
.grid {
  .van-grid-item {
    .title {
      @include textCenter(100%, 30px);
      font-size: 14px;
    }
    .details {
      font-size: 12px;
    }
  }
}
</style>