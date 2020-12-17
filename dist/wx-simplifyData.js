import {
  getFunName
} from './utils/index'
// 数据成功变量标识，默认200
let statusCode = 200,
  msgField = 'msg',
  // 状态成功返回的字段
  statusCodeText = 'status',
  // 获取数据字段的名称，默认data
  dataField = 'data',
  // 是否打印信息
  log = true,
  // 获取函数名
  _funObj = {},
  // 保存_api对象
  _api = {},
  // 自定义提示
  toast = false


// 初始化函数
export default (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.Qarticles = factory());

})(this, function () {

  // 打印日志信息
  const _logFun = (options) => {
    console.table({
      'info': {
        statusCode: options.statusCode || statusCode,
        msgField: options.msgField || msgField,
        statusCodeText: options.statusCodeText || statusCodeText,
        dataField: options.dataField || dataField,
        ...options
      }
    })
  }


  const _initData = (options = {}) => {
    // 需要传一个配置对象  optios._api 必须传入其他可不传，采用默认配置
    init(options)
    _logFun(options)
  }


  const _$ok = function (data, fn) {
    if (log) {
      console.table({
        'ok': data
      })
    }

    // 不是分页
    if (!data.type) {
      if ((data.res[data.statusCodeText] || data.res[statusCodeText]) == (data.statusCode || statusCode)) {
        // if (fn) {
        //   fn && fn.call(this, data.res)
        // } else {
        //   data.setData && this.setData && this.setData(data.setData)
        //   //自定义
        // }


        data.setData && this.setData && this.setData(data.setData)
        // 成功回调
        fn && fn.call(this, data.res)

        //自定义

        publicTips.call(this, data, 'completeTip')

      } else {
        publicTips.call(this, data, 'failTip')
      }

    }
    // 分页执行
    if (data.type) {
      if (((data.res[data.statusCodeText] || data.res[statusCodeText]) || data.res[statusCodeText]) == (data.statusCode || statusCode)) {
        // page = 1的时候执行
        if (this.data.pages.page == 1) {
          data.setData && this.setData && this.setData(data.setData)
          // 成功
          fn && fn.call(this, data.res)
        } else {
          if (data.loadMore) {
            data.loadMore.call(this, data.res)
          } else {
            // page大于1时候执行
            if (data.res[data.dataField || dataField].length) {
              try {
                //完成
                publicTips.call(this, data, 'complete')
                this.setData({
                  [data.setData]: [...this.data[data.setData], ...data.res]
                })
              } catch (error) {
                console.error('请使用loadMore方法加载更多数据!')
              }

            } else {
              // 没有数据
              if (!data.noData) {
                wx.showToast({
                  title: '没有更多数据了',
                  icon: 'none',
                  duration: 2000
                })
                return
              }
              publicTips.call(this, data, 'noData')
            }
          }
        }
      } else {
        // 失败
        publicTips.call(this, data, 'fail')
      }
    }
    setTimeout(() => {
      wx.hideLoading()
    }, 500);

  }



  const _$getData = function (apiMethodName, options = null, fn) {
    return new Promise((resovle, reject) => {
      options.showLoadingText && wx.showLoading({
        title: options.showLoadingText || '加载中...',
        mask: true
      })
      _api[apiMethodName](options.apiData, options.name).then(res => {
          resovle(res)
          if (log) {
            _logFun({
              ...options,
              res,
              apiMethodName
            })
          }
          // 需要其他操作
          fn && fn(res)
          // 如果传的是custom，就自定义
          if (options.custom) {
            options.custom.call(this, res)
          } else {
            // 如果是分页
            if (options.type) {

              if (options.setData == 'function') {
                options.setData(res)
              } else {
                // 需要分页
                _$ok.call(this, {
                  ...options,
                  // 是否需要分页 true 需要 false 不需要
                  type: options.type,
                  setData: {
                    [options.setData || 'data']: res[options.dataField || dataField]
                  },

                  dataField: options.dataField,
                  res,
                }, options.success)

              }


            } else {
              if (options.setData == 'function') {
                options.setData(res)
              } else {
                _$ok.call(this, {
                  ...options,
                  setData: {
                    [options.setData || 'data']: res[options.dataField || dataField]
                  },
                  res,
                }, options.success)
              }


            }
          }

        })
        .catch(err => {
          reject(err)
          console.log('err--', err)
          wx.hideLoading()
          wx.showToast({
            title: err[msgField],
            icon: 'none',
            duration: 2000
          })
        })
    })
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
      throw new Error('错误,options.api需要传一个Object类型')
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
    wx.$ok = _$ok
  }

  return {
    init(opt) {
      _initData(opt)
    }
  }




})