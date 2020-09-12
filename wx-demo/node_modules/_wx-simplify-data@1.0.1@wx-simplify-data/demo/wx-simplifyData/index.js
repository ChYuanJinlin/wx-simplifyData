import {
  getFunName
} from '../utils/index'
// 数据成功变量标识，默认200
let statusCode = 200
let msgField = 'msg'
// 状态成功返回的字段
let statusCodeText = 'status'
// 获取数据字段的名称，默认data
let dataField = 'data'
// 是否打印信息
let log = true
// 获取函数名
let _funObj = {}
// 保存_api对象
let _api = {}
// 自定义提示
let toast = false
// 初始化函数




export default (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.Qarticles = factory());

})(this, function () {


  const _initData = (options = {}) => {
    // 需要传一个配置对象  optios._api 必须传入其他可不传，采用默认配置
    init(options)
  }


  const _$getData = function (apiMethodName, options = null, fn) {
    _api[apiMethodName](options.apiData, options.name).then(res => {
        if (log) {
          console.table({
            '接口返回打印信息': res,
            '当前请求_api函数名': apiMethodName
          })

          console.table({
            'wx-simplify打印信息': {
              ...options,
              statusCode: options.statusCode || statusCode,
              msgField: options.msgField || msgField,
              statusCodeText: options.statusCodeText || statusCodeText,
              dataField: options.dataField || dataField
            }
          })

        }
        // 需要其他操作
        fn && fn(res)
        // 如果传的是函数，就自定义
        if (typeof options != 'object') {
          options && options.call(this, res)
        } else {
          // 如果是分页
          if (options.type) {

            if (options.setData == 'function') {
              options.setData(res)
            } else {
              // 需要分页
              wx.$ok.call(this, {
                ...options,
                // 是否需要分页 true 需要 false 不需要
                type: options.type,
                setData: {
                  [options.setData]: res[options.dataField || dataField]
                },
                dataField: options.dataField,
                res,
                pageData: {
                  [options.setData]: [...this.data[options.setData], ...res[options.dataField || dataField]]
                }
              }, options.success)

            }


          } else {
            if (options.setData == 'function') {
              options.setData(res)
            } else {
              wx.$ok.call(this, {
                ...options,
                setData: {
                  [options.setData]: res[options.dataField || dataField]
                },
                res,
              }, options.success)
            }


          }
        }

      })
      .catch(err => {
        console.log('err--', err)
        wx.showToast({
          title: err[msgField],
          icon: 'none',
          duration: 2000

        })
      })

  }
  const $ok = function (data, fn) {
    if (log) {
      console.table({
        '日志信息': data
      })
    }
    // 不是分页
    if (!data.type) {
      if ((data.res[data.statusCodeText] || data.res[statusCodeText]) == (data.statusCode || statusCode)) {
        if (fn) {
          fn && fn.call(this, data.res)
          return
        }
        data.setData && this.setData(data.setData)
        //自定义
        publicTips.call(this, data, 'complete')
      } else {
        publicTips.call(this, data, 'fail')
      }

    }
    // 分页执行
    if (data.type) {
      if (((data.res[data.statusCodeText] || data.res[statusCodeText]) || data.res[statusCodeText]) == (data.statusCode || statusCode)) {
        // 成功
        if (fn) {
          fn && fn.call(this, data.res)
          return
        }
        // page = 1的时候执行
        if (this.data.pages.page == 1) {
          data.setData && this.setData(data.setData)
        } else {

          // page大于1时候执行
          if (data.res[data.dataField || dataField].length) {
            //完成
            publicTips.call(this, data, 'complete')
            data.pageData && this.setData(data.pageData)
          } else {
            // 没有数据
            publicTips.call(this, data, 'noData')

          }

        }

      } else {
        // 失败
        publicTips.call(this, data, 'fail')
      }
    }
    wx.hideLoading()
  }

  function publicTips(data, name) {

    if (typeof data[name] == 'function') {
      data[name].call(this, data.res)
      return
    }

    if (typeof data[name] == 'object') {
      wx.showToast({
        title: data.res[data.msgField || msgField],
        icon: 'none',
        duration: 2000,
        ...data[name]
      })
      return
    }

    if (toast) {
      wx.showToast(typeof toast == 'object' ? toast : {
        title: data.res[data.msgField || msgField],
        icon: 'none',
        duration: 2000
      })

    }
    if (data.toast) {
      wx.showToast(typeof data.toast == 'object' ? data.toast : {
        title: data.res[data.msgField || msgField],
        icon: 'none',
        duration: 2000
      })
    }
  }


  // 配置初始化参数
  const init = function (options) {
    statusCode = options.statusCode || 200
    dataField = options.dataField || 'data'
    statusCodeText = options.statusCodeText || 'status'
    log = options.log || true
    msgField = options.msgField || 'msg'
    toast = options.toast || false
    if (typeof options.api != 'object') {
      throw new Error('错误,参数_api必须传入,并且是一个对象类型!')
    }
    for (const key in options.api) {
      const fnName = getFunName(options.api[key])
      _funObj[fnName] = fnName
    }
    // 把_api对象挂载到 wx 对象上
    _api = options.api
    // 把_api对象方法 挂载到wx 上，到时候可以wx.$am.你定义_api函数名
    wx.$am = _funObj
    wx.$getData = _$getData
    wx.$ok = $ok
  }





  return {
    init(opt) {
      _initData(opt)
    }
  }




})