import "./config/customeDate.js"
import vuePayKeyboard from './components/vue-pay-keyboard' // 导入组件

const paykeyboard = {
    install(Vue, options) {
        Vue.component(vuePayKeyboard.name, vuePayKeyboard)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}

export default paykeyboard // 导出..