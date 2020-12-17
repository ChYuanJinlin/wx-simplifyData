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
    wx.$getData.call(this, wx.$am.getList, {
      // 你需要传给接口的数据
      apiData: {},      
      // 需要赋值的字段
      setData: 'list',
<<<<<<< HEAD
      // loading
      showLoadingText:'获取数据中...',
=======
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
      complete(res) {
        console.log('res---', res)
      },
      // 显示提示, 根据接口返回的msg提示
      // showToast:true
      // 自定义提示，根据微信的showToast写
      // showToast:{
      //   title:'数据获取成功!',
      //   icon:'none'
      // }
      // 如果不传不会提示,如果在initData 里面配置了showToast 将会采用initData 的里面配置了showToast

    })

  },
})