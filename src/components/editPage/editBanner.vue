<template>
  <div class="edit-container">
    <draggable :list="list" class="drag-area">
      <div class="edit-list" v-for="(item, index) in list" :key="index">
        <img :src="item.src" width="150" height="90" alt />
        <div class="banner-edit">
          <div class="edit-item">
            <el-button
              class="edit-upload-btn"
              size="medium"
              @click="handleUploadBtn(index)"
            >重新上传</el-button>
            <div class="text-gray">建议尺寸： 750*272</div>
            <el-button type="danger" size="medium" @click="handleDel( index)">删除</el-button>
          </div>
          <div class="edit-item">
            <label class="item-label">跳转地址：</label>
            <el-input
              size="medium"
              class="item-input"
              placeholder="请输入跳转地址"
              v-model="item.url.url"
              clearable
            ></el-input>
          </div>
        </div>
      </div>
    </draggable>
    <el-button class="edit-add-btn" type="primary" size="medium" @click="handleAdd(listIndex)">新增</el-button>
    <div class="edit-footer">
      <el-button>取消</el-button>
      <el-button type="primary" @click="handleSaveCompose('banner')">确定</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: {
    list: {
      type: Array
    },
    listIndex: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleAdd(index) {
      console.log(index, '222')
      this.$emit('add', index)
    },
    handleDel(index) {
      this.$emit('del', index)
    },
    handleUploadBtn(index) {
      this.$emit('upload', index)
    }
  },
  components: {
    draggable
  }
}
</script>