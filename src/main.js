/*js入口
* */
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
Vue.use(MintUI)
new Vue ({
  el:'#app',
  render: h => h (App),
  router

})
