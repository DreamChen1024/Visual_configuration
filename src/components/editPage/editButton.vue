<template>
  <div class="edit-container">
    <div class="drag-area">
      <div class="edit-item">
        <div class="item-label">左按钮内容：</div>
        <el-input size="medium" class="item-input" placeholder="请输入按钮内容" v-model="list.left"></el-input>
      </div>
      <div class="edit-item">
        <div class="item-label">跳转链接：</div>
        <el-input size="medium" class="item-input" placeholder="请输入跳转链接" v-model="list.Link_l"></el-input>
      </div>
      <div class="edit-item">
        <div class="item-label">右按钮内容：</div>
        <el-input size="medium" class="item-input" placeholder="请输入按钮内容" v-model="list.right"></el-input>
      </div>
      <div class="edit-item">
        <div class="item-label">跳转链接：</div>
        <el-input size="medium" class="item-input" placeholder="请输入跳转链接" v-model="list.Link_r"></el-input>
      </div>
      <div class="edit-item">
        <div class="item-label">按钮类型：</div>
        <div class="item-radio">
          <el-radio-group v-model="list.type">
            <el-radio :label="false">基本类型</el-radio>
            <el-radio :label="true">朴素类型</el-radio>
          </el-radio-group>
        </div>
      </div>

      <div class="edit-item">
        <div class="item-label">按钮样式：</div>
        <div class="item-radio">
          <el-radio-group v-model="list.round">
            <el-radio :label="true">圆形按钮</el-radio>
            <el-radio :label="false">方形按钮</el-radio>
          </el-radio-group>
        </div>
      </div>
      
      <div class="edit-item">
        <div class="item-label">背景颜色：</div>
        <div class="item-color">
          <el-color-picker v-model="list.bgColor" show-alpha size="medium"></el-color-picker>
        </div>
      </div>
      <div class="edit-item">
        <div class="item-label">字体颜色：</div>
        <div class="item-color">
          <el-color-picker v-model="list.color" show-alpha size="medium"></el-color-picker>
        </div>
      </div>
    </div>
    <div class="edit-footer">
      <el-button>取消</el-button>
      <el-button type="primary" @click="handleSaveCompose('buttonIdea')">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object
    }
  }
};
</script>