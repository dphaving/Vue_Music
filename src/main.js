import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

//fastclick用于手机端点击屏幕后没有300毫秒的延迟
fastclick.attach(document.body)
    //Vue.config.productionTip = false
    // Vue.use(VueLazyload, {
    //     loading: require('common/image/default.png')
    // })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})