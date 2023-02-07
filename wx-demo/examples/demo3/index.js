const app = getApp()

Page({
  data: {
    list: []
  },
  // 普通数据赋值
  onLoad: function () {

    wx.showLoading({
      title: '获取数据中',
    })

    wx.$getData.call(this, wx.$am.getList1, {
      // 你需要传给接口的数据
      params: {},
      // 配置statusCodeText字段
      statusCodeText: 'code',
      // 配置statusCode字段
      statusCode: 666,
      // 配置dataField字段
      dataField: 'list',
      toast: {
        title: '这是自定义提示',
        icon: 'none'
      },
      // 需要赋值的字段
      setData: 'list',
      // 显示提示, 根据接口返回的msg提示
      // showToast:true
      // 自定义提示，根据微信的showToast写
      // showToast:{
      //   title:'数据获取成功!',
      //   icon:'none'
      // }

    })

  },
})