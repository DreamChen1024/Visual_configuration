<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-cascader v-model="form.orgName" :options="options" @change="handleChange"></el-cascader>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        orgName: []
      },
      options: [
        {
          orgName: 'zhinan',
          orgid: '指南',
          children: [
            {
              orgName: 'shejiyuanze',
              orgid: '设计原则',
              children: [
                {
                orgName: 'yizhi',
                orgid: '一致'
                }, 
                {
                orgName: 'fankui',
                orgid: '反馈'
                }
              ]
            }
          ]
        }]
    }
  },
  created(){
    let list= [ '武汉', '一姐', '周娟'];
    let str= list[0] + list[1] + list[2];
    console.log(list)
    console.log(str)
  },
  methods: {
    handleChange(value) {
    console.log(value)
  },
  onSubmit() {
    console.log(this.form)
  }
  }
};
</script>