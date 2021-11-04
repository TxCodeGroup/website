import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 导入语言包信息
import en from "./locale/en.js";
import zh from "./locale/zh.js";


// 注册i18n
Vue.use(VueI18n);

// 语言包根据语言环境分类
const messages = {
    en,
    zh,
}

// 通过选项创建 VueI18n 实例并导出
export default new VueI18n({
    locale: localStorage.getItem('lang') ||  'en', // 设置当前语言环境，默认中文简体
    messages, // 设置语言环境对应信息
})
