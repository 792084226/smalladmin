import api from './api'; // 导入接口域名列表
import http from './http'; // 导入http中创建的axios实例



export default {
  install(Vue) {
    Vue.prototype.$http = this
  },
  // 登录
  Login(params = '', header = '') {
    return http.post(api.Login, params, header);
  },
  // 退出
  Logout() {
    return http.post(api.Logout);
  },
  // 商品管理
  ShopList(page, params = '', header = '') {
    return http.get(api.Login + `?pageNum=${page}`, params, header);
  }

}