/*
  1.日期处理
  2.时间处理
  3.去除空格 
  4.字母大小写切换
  5.保留两位小数
*/
/* 
  全局引入main.js
  import * as filters from './utils/filters'
  Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
  Vue.config.productionTip = false
  单个文件引入
  import { normalTime,trim } from '@/utils/filters'
*/
/*
  1.日期处理
    time：源时间戳
    type：要处理的格式 默认 xxxx年xx月xx日
      /: xxxx/xx/xx
      .: xxxx.xx.xx
      -: xxxx-xx-xx
    全局引入后用法：{{time | normalDate(type)}}
    或单文件引入normalDate(time,type)
 */
export const normalDate = (time,type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) * 1 : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    if(type == '-'){
      return year + '-' + month + '-' + day;
    }else if(type == '/'){
      return year + '/' + month + '/' + day;
    }else if(type == '.'){
      return year + '.' + month + '.' + day;
    }else{
      return year + '年' + month + '月' + day + '日';
    }
  }
}

/*
  2.时间处理
    time：源时间戳
    type：要处理的格式 默认 xxxx年xx月xx日 xx:xx:xx
      /: xxxx/xx/xx xx:xx:xx
      .: xxxx.xx.xx xx:xx:xx
      -: xxxx-xx-xx xx:xx:xx
    全局引入后用法：{{time | normalTime(type)}}
    或单文件引入normalTime(time,type)
 */
export const normalTime = (time,type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) * 1 : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    if(type == '-'){
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }else if(type == '/'){
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }else if(type == '.'){
      return year + '.' + month + '.' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }else{
      return year + '年' + month + '月' + day + '日' + ' ' + hours + ':' + minutes + ':' + seconds;
    }
  }
}
/*
  3.去除空格 
  type  1-所有空格 
        2-前后空格 
        3-前空格 
        4-后空格
  全局引入后用法：{{value | trim(trim)}}
  或单文件引入trim(value,trim)
*/
export const trim = (value, trim) => {
  switch (trim) {
  case 1:
  return value.replace(/\s+/g, "");
  case 2:
  return value.replace(/(^\s*)|(\s*$)/g, "");
  case 3:
  return value.replace(/(^\s*)/g, "");
  case 4:
  return value.replace(/(\s*$)/g, "");
  default:
  return value;
  }
 }
 /*
  4.字母大小写切换
  type
    1:首字母大写
    2：首页母小写
    3：大小写转换
    4：全部大写
    5：全部小写
  全局引入后用法：{{str | changeCase(type)}}
  或单文件引入changeCase(str,type)
 * */
export const changeCase = (str, type) => {
  function ToggleCase(str) {
  var itemText = ""
  str.split("").forEach(
  function (item) {
  if (/^([a-z]+)/.test(item)) {
  itemText += item.toUpperCase();
  } else if (/^([A-Z]+)/.test(item)) {
  itemText += item.toLowerCase();
  } else {
  itemText += item;
  }
  });
  return itemText;
  }
  switch (type) {
  case 1:
  return str.replace(/\b\w+\b/g, function (word) {
  return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  });
  case 2:
  return str.replace(/\b\w+\b/g, function (word) {
  return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
  });
  case 3:
  return ToggleCase(str);
  case 4:
  return str.toUpperCase();
  case 5:
  return str.toLowerCase();
  default:
  return str;
  }
 }
/*
 5.保留两位小数
 全局引入后用法：{{x | toDecimal2()}}
  或单文件引入toDecimal2(x)
*/
 export const toDecimal2 = (x) => {
  var f = parseFloat(x);
  if (isNaN(f)) {
  return false;
  }
  var f = Math.round(x * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
  rs = s.length;
  s += '.';
  }
  while (s.length <= rs + 2) {
  s += '0';
  }
  return s;
 }