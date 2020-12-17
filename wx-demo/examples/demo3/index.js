const app = getApp()

Page({
  data: {
    list: []
  },
  // 普通数据赋值
  onLoad: function () {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    wx.showLoading({
      title: '获取数据中',
    })
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
    wx.$getData.call(this, wx.$am.getList1, {
      // 你需要传给接口的数据
      apiData: {},
      // 配置statusCodeText字段
      statusCodeText: 'code',
<<<<<<< HEAD
<<<<<<< HEAD
      showLoadingText: '获取数据中...',
=======
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
      showLoadingText: '获取数据中...',
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
      // 配置statusCode字段
      statusCode: 666,
      // 配置dataField字段
      dataField: 'list',
<<<<<<< HEAD
<<<<<<< HEAD
      toast: {
        title: '这是自定义提示',
        icon: 'none'
=======
      toast:{
        title:'这是自定义提示',
        icon:'none'
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
      toast: {
        title: '这是自定义提示',
        icon: 'none'
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
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