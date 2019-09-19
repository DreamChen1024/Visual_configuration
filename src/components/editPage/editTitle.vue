<template>
  <div class="edit-container">
    <div class="edit-text">
      <div class="edit-item">
        <div class="item-label">标题名称：</div>
        <el-input size="medium" class="item-input" placeholder="请输入标题名称" v-model="list.textTitle"></el-input>
      </div>
    </div>
    <div class="edit-footer">
      <el-button>取消</el-button>
      <el-button type="primary" @click="handleSaveCompose('title')">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "@/common/css/global.scss";
.edit-item {
  display: flex;
  margin-bottom: 15px;
  .item-label {
    @include textCenter(110px, 36px);
    padding: 0 15px;
    font-size: 14px;
  }
}
</style>