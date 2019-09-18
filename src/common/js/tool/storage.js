/**
 * Created by Administrator on 2019/9/18.
 */

/** ****************** 通用方法 **********************/

function isJSON (str) {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str)
      return obj
    } catch (e) {
      return str
    }
  }
}
function isString (str) {
  if (typeof str === 'string') {
    return str
  } else {
    return JSON.stringify(str)
  }
}





export function $session_set (key, value) {
  sessionStorage.setItem(key, isString(value))
}

export function $session_get (key) {
  return isJSON(sessionStorage.getItem(key))
}

export function $local_set (key, value) {
  localStorage.setItem(key, isString(value))
}

export function $local_get (key) {
  return isJSON(localStorage.getItem(key))
}

export function $local_clear () {
      localStorage.clear()
}