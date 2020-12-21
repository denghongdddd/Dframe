import "./config/customeDate.js"
import vuePayKeyboard from './components/vue-pay-keyboard' // 导入组件
import {type} from "./config/util.js"

const paykeyboard = {
    install(Vue, options) {
        Vue.component(vuePayKeyboard.name, vuePayKeyboard)
        Vue.prototype.utils={
            type
        }
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}

export default paykeyboard // 导出..