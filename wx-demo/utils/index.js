// 获取函数名字
export function getFunName(fn) {
  var ret = fn.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}