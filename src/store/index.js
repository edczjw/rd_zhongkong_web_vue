import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        domain:'http://dev.zyjk.msxiaodai.com',
        isLeftHiden:false,//隐藏侧边栏
        buttonshow:true,//开户提交按钮
    }
})