/**
 * Created by Administrator on 2019/4/1.
 */

import {} from './storage'
export default {
  $getFormData (obj) { // 参数序列化
    let formData = new FormData()
    Object.keys(obj).forEach(key => {
      formData.append(key, obj[key])
    })
    return formData
  },
  $valid (form) {
    //  form:{
    //   userName:{
    //       value:'',
    //       text:'用户名',
    //       required:true,
    //       regular:true,
    //       pattern:/1[0-9]{7,10}/,
    //       patternTip:'用户名格式不正确'
    //   },
    //   pwd:{
    //     value:'',
    //       text:'密码',
    //       required:true,
    //   },
    //   code:{
    //     value:'',
    //       text:'验证码',
    //       required:true,

    //   }
    // }
    for (let key in form) {
      if (form[key].required && form[key].value == '') {
        // Mint.toast.fail(`请输入${form[key].text}`)
        return false
      }
      if (form[key].pattern && !form[key].pattern.test(form[key].value)) {
        // Mint.toast.fail(form[key].patternTip)
        return false
      }
    }
    return true
  },

  $formatDate (date, code) {
    let time = new Date(date)
    let Year = time.getFullYear()
    let Month = time.getMonth() + 1 > 9 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)
    let Day = time.getDate() > 9 ? time.getDate() : '0' + time.getDate()
    if (code == 'cn') {
      return `${Year}年${Month}月${Day}日`
    } else {
      return `${Year}${code}${Month}${code}${Day}`
    }
  },


  
  
}
