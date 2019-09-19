<template>
  <div class="main">
    <!-- 选择区域 -->
    <div class="choose-area">
      <div class="area-title">选择区域</div>
      <draggable
        class="drag-area"
        :list="chooseList"
        :group="{ name: 'people', pull: 'clone', put: false}"
        @change="log"
      >
        <div class="choose-item">轮播图(大)</div>
        <div class="choose-item">轮播图(小)</div>
        <div class="choose-item">轮播图(异型)</div>
        <div class="choose-item">九宫格</div>
        <div class="choose-item">四宫格</div>
        <div class="choose-item">分类标题</div>
      </draggable>
    </div>

    <!-- 组合区域 -->
    <div class="compose-area">
      <div class="compose-container">
        <draggable class="drag-area" :list="composeList" group="people" @change="log">
          <div
            class="list-group-item"
            @click="changeArea(sort.type, index)"
            v-for="(sort, index) in composeList"
            :key="index"
          >
            <!-- 轮播图大 -->
            <div class="list-item swipe-banner" v-if="sort.type === 'banner'">
              <Banner :bannerData="sort"></Banner>
            </div>

            <!-- 轮播图小 -->
            <div class="list-item bannerSmall" v-if="sort.type === 'bannerSmall'">
              <Banner :bannerData="sort"></Banner>
            </div>

            <!-- 轮播图多个slide -->
            <div class="list-item swiper" v-if="sort.type === 'swiper'">
              <Swiper :swiperData="sort"></Swiper>
            </div>

            <!-- 九宫格 -->
            <div class="list-item grid" v-if="sort.type === 'grid'">
              <Grid :gridData="sort" :colNum="3"></Grid>
            </div>

            <!-- 四宫格 -->
            <div class="list-item grid" v-if="sort.type === 'gridEven'">
              <GridEven :gridEvenData="sort" :colNum="2"></GridEven>
            </div>

            <!-- 分类标题 -->
            <div class="list-item title" v-if="sort.type === 'title'">
              <div class="title-item">
                <h3>{{sort.textContent.textTitle}}</h3>
              </div>
            </div>

            <!-- 组件操作 -->
            <div class="item-close" @click.stop="handleItemDel(index)">
              <van-icon name="delete" />
            </div>
          </div>
        </draggable>
      </div>
    </div>

    <!-- 编辑区域 -->
    <div class="edit-area">
      <div class="area-title">编辑区域</div>
      <transition name="slide-fade" mode="out-in">
        <!-- 轮播图 -->
        <div class="edit" v-if="sortList1.indexOf(area) > -1">
          <editBanner
            :list="composeList[areaIndex].imgs"
            @add="handleAdd"
            @del="handleDel"
            @upload="handleUploadBtn"
          ></editBanner>
        </div>

        <!-- 宫格 -->
        <div class="edit" v-if="sortList2.indexOf(area) > -1">
          <editGrid
            :list="composeList[areaIndex].imgs"
            @add="handleAdd"
            @del="handleDel"
            @upload="handleUploadBtn"
          ></editGrid>
        </div>

        <!-- 标题 -->
        <div class="edit" v-if="area === 'title'">
          <editTitle
            :list="composeList[areaIndex].textContent"
            ></editTitle>
        </div>
      </transition>
    </div>

    <!-- 上传图片 -->
    <el-dialog
      title="上传图片"
      width="40%"
      :visible.sync="dialogVisible"
      :before-close="handleCancel"
      :close-on-click-modal="false"
    >
      <Upload ref="upload"></Upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleUpload">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import util from "@/common/js/tool/util.js";
import basics from "@/common/js/config/basics.js";
export default {
  data() {
    return {
      chooseList: [ 'banner', 'bannerSmall', 'swiper', 'grid', 'gridEven', 'title'], //组件库
      composeList: [], //组装库
      area: "", //组件类别
      areaIndex: "", //组件索引
      dialogVisible: false, //弹出框
      sortList1: [ 'banner', 'bannerSmall', 'swiper' ], //轮播分类
      sortList2: [ 'grid', 'gridEven' ], //宫格分类
    };
  },
  methods: {
    //监听拖拽
    log(evt) {
      //evt里面有两个值，一个evt.added 和evt.moved  可以分别知道新加入元素的ID和移动元素的ID
      console.log(evt, evt.added.element);
      const sort = util.copyObj(basics[evt.added.element]);
      console.log(sort, "2211");
      const config = {
        type: evt.added.element,
        domId: evt.added.element + "-" + util.createDomID()
      };
      Object.assign(sort, config);
      this.composeList.splice(evt.added.newIndex, 1, sort);
    },
    // 唤醒编辑区域
    changeArea(sort, index) {
      console.log("点击", sort, index);
      this.area = sort;
      this.areaIndex = index;
    },
    //删除组合区域内组件
    handleItemDel(index) {
      this.composeList.splice(index, 1);
      this.area = "";
    },
    //添加
    handleAdd() {
      console.log(this.area, this.areaIndex);
      if (this.sortList1.indexOf(this.area) > -1) {
        this.composeList[this.areaIndex].imgs.push({
          src: require("@/assets/img/banner1.jpg"),
          url: {
            type: "0", //0默认没有跳转地址
            url: ""
          }
        });
      }
      if (this.sortList2.indexOf(this.area) > -1) {
        this.composeList[this.areaIndex].imgs.push({
          src: require("@/assets/img/t6.png"),
          url: {
            type: "0",
            url: ""
          },
          title: "三只松鼠",
          details: "每满100减15元"
        });
      }
    },
    // 删除
    handleDel(index) {
      console.log(index);
      if (this.composeList[this.areaIndex].imgs.length > 1) {
        this.composeList[this.areaIndex].imgs.splice(index, 1);
      } else {
        this.$message.error("不能再删除了");
      }
    },
    // 激活上传图片
    handleUploadBtn(index) {
      console.log(index);
      this.dialogVisible = true;
    },
    //取消上传
    handleCancel() {
      this.dialogVisible = false;
      this.$refs.upload.imageUrl = "";
    },
    //确认上传
    handleUpload() {
      console.log("确认上传");
      this.handleCancel();
    }
  },
  watch: {
    composeList: {
      handler(newVal, oldVal) {
        console.log(newVal, "123");
      },
      deep: true
    }
  },
  components: {
    draggable,
    Banner: () => import("@/components/template/Banner.vue"),
    Swiper: () => import("@/components/template/Swiper.vue"),
    Grid: () => import("@/components/template/Grid.vue"),
    GridEven: () => import("@/components/template/GridEven.vue"),
    Upload: () => import("@/components/template/Upload.vue"),
    editBanner: () => import("@/components/editPage/editBanner.vue"),
    editGrid: () => import("@/components/editPage/editGrid.vue"),
    editTitle: () => import("@/components/editPage/editTitle.vue")
  }
};
</script>

<style lang="scss">
@import "@/common/css/global.scss";
.main {
  .area-title {
    @include textCenter(100%, 60px);
    font-size: 20px;
  }
  //选择区域
  .choose-area {
    position: fixed;
    left: 0;
    width: 200px;
    min-height: 100vh;
    background-color: #eee;
    .drag-area {
      .choose-item {
        @include textCenter(100%, 40px);
        font-size: 18px;
        cursor: move;
        &:hover {
          color: #fff;
          background-color: skyblue;
        }
      }
    }
  }
  .compose-area {
    position: absolute;
    top: 0;
    left: 200px;
    right: 640px;
    bottom: 0;
    .compose-container {
      @include transformCenter();
      width: 400px;
      height: 730px;
      background: url("../../assets/img/mobilePhone.png") no-repeat;
      background-size: 100% 100%;
    }
    .drag-area {
      @include fullScreen(115px, 39px, 100px, 46px);
      border: 1px solid #ccc;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      /*滚动条样式*/
      @include scorllbar;
      .list-group-item {
        width: 100%;
        cursor: move;
        position: relative;
        .item-close {
          display: none;
          position: absolute;
          bottom: 0;
          right: 5px;
          font-size: 18px;
          cursor: pointer;
          z-index: 9;
          color: #4386f4;
        }
        &:hover .item-close {
          display: block;
        }
        .swipe-banner {
          width: 100%;
          height: 130px;
        }
        .bannerSmall {
          width: 290px;
          height: 100px;
          margin: auto;
          overflow: hidden;
        }
        .swiper {
          width: 220px;
          height: 160px;
          margin: auto;
        }
        .title-item {
          font-size: 14px;
          @include textCenter(100%, 26px);
        }
        .titleLink-item {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          .item-left {
            font-size: 14px;
            font-weight: bold;
          }
          .item-right {
            font-size: 12px;
          }
        }
      }
    }
  }
  .edit-area {
    position: fixed;
    top: 0;
    right: 40px;
    bottom: 0;
    width: 600px;
    padding: 0 10px 10px;
    box-sizing: border-box;
    .edit {
      padding: 20px 0 60px;
      @include fullScreen(60px, 10px, 60px, 10px);
      border-radius: 4px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      .edit-container {
        padding: 0 20px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        /*滚动条样式*/
        @include scorllbar;
        .edit-add-btn {
          margin-top: 10px;
        }
      }
      .drag-area {
        .edit-list {
          display: flex;
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
          img {
            margin-right: 15px;
            border-radius: 4px;
          }
        }
        .edit-item {
          display: flex;
          margin-bottom: 15px;
          .item-label {
            @include textCenter(110px, 36px);
            padding: 0 15px;
            font-size: 14px;
          }
          .item-radio {
            @include textCenter(100%, 36px);
            line-height: 48px;
          }
          .text-gray {
            padding: 0 10px;
            width: 100%;
            font-size: 16px;
            line-height: 36px;
            color: #999;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .edit-footer {
        @include transformCenterX(92%, 50%, -50%);
        width: 150px;
      }
    }
  }
}
</style>