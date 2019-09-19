<template>
  <div class="gridEven">
    <van-grid :border="false" :column-num="colNum">
      <van-grid-item v-for="(item, index) in gridEvenData.imgs" :key="index">
        <div class="item_l">
          <div class="title">{{item.title}}</div>
          <div class="details">{{item.details}}</div>
        </div>
        <div class="item_r">
          <van-image :src="item.src" />
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    gridEvenData: {
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
.gridEven {
  .van-grid-item__content {
    flex-direction: row;
    .item_l {
      padding: 0 0.1rem;
      .title {
      @include textCenter(100%, 30px);
      font-size: 14px;
    }
    .details {
      font-size: 10px;
    }
    }
    .item_r {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>

<style>
.gridEven .van-grid-item__content {
    flex-direction: row !important;
}
</style>