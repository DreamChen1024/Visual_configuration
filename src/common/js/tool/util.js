export default {
  copyObj(obj) {
    console.log(obj, 'copy')
    return JSON.parse(JSON.stringify(obj))
  },
  createDomID(len) {
    return Number(Math.random().toString().substr(3, len)).toString(36)
  },
}