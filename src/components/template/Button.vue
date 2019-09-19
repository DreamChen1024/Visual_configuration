<template>
  <div class="item-btn">
    <van-button :color="buttonData.bgColor" :round="buttonData.round" :style="{color: buttonData.color}" :type="buttonData.type ? 'default' : 'info'" :plain="buttonData.type">{{buttonData.left}}</van-button>
    <van-button :color="buttonData.bgColor" :round="buttonData.round" :style="{color: buttonData.color}" :type="buttonData.type ? 'default' : 'info'" :plain="buttonData.type">{{buttonData.right}}</van-button>
  </div>
</template>

<script>
export default {
  props: {
    buttonData: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/css/global.scss";
.button {
  .item-btn {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    .van-button {
      @include textCenter(140px, 32px);
    }
  }
}
</style>