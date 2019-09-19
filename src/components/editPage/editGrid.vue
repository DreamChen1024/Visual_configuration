<template>
  <div class="edit-container">
    <draggable :list="list" class="drag-area">
      <div class="edit-list" v-for="(item, index) in list" :key="index">
        <img :src="item.src" width="190" height="190" alt />
        <div class="grid-edit">
          <div class="edit-item">
            <label class="item-label">活动名称：</label>
            <el-input size="medium" v-model="item.title" placeholder="请输入内容"></el-input>
          </div>
          <div class="edit-item">
            <label class="item-label">活动内容：</label>
            <el-input size="medium" v-model="item.details" placeholder="请输入内容"></el-input>
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
          <el-button
            class="edit-upload-btn"
            size="medium"
            @click="handleUploadBtn(index)"
          >重新上传</el-button>
          <el-button type="danger" size="medium" @click="handleDel(index)">删除</el-button>
        </div>
      </div>
    </draggable>
    <el-button class="edit-add-btn" type="primary" size="medium" @click="handleAdd">新增</el-button>
    <div class="edit-footer">
      <el-button>取消</el-button>
      <el-button type="primary" @click="handleSaveCompose('grid')">确定</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleAdd() {
      this.$emit('add')
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