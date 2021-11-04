import Vue from "vue"
Vue.filter("formatDate", (date_time, format) => {
    let date_time_ls = parseInt(date_time);
    if (date_time_ls == date_time) date_time = date_time_ls;
    let date = new Date(date_time * 1000)
    let formatDate = format || "yyyy-MM-dd"
    if (/(y+)/.test(formatDate)) {
        formatDate = formatDate.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(formatDate)) {
            let str = o[k] + ''
            formatDate = formatDate.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
        }
    }
    return formatDate
});
