const app = getApp()

Page({
  data: {
    list: []
  },
  // 普通数据赋值
  onLoad: function () {
<<<<<<< HEAD
=======
    wx.showLoading({
      title: '获取数据中',
    })
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
    wx.$getData.call(this, wx.$am.getList1, {
      // 你需要传给接口的数据
      apiData: {},
      // 配置statusCodeText字段
      statusCodeText: 'code',
<<<<<<< HEAD
      showLoadingText: '获取数据中...',
=======
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
      // 配置statusCode字段
      statusCode: 666,
      // 配置dataField字段
      dataField: 'list',
<<<<<<< HEAD
      toast: {
        title: '这是自定义提示',
        icon: 'none'
=======
      toast:{
        title:'这是自定义提示',
        icon:'none'
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
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