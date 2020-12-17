const app = getApp()

Page({
  data: {
    list: [],
    pages: {
      page: 1
    }
  },
  getPageList() {
<<<<<<< HEAD
<<<<<<< HEAD
=======

    wx.showLoading({
      title: '获取分页数据中',
    })
   
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
    wx.$getData.call(this, wx.$am.getPageList, {
      // 你需要传给接口的数据    
      // 需要赋值的字段
      apiData: {
        ...this.data.pages
      },
<<<<<<< HEAD
<<<<<<< HEAD
      showLoadingText:'获取分页数据中...',
=======
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
      showLoadingText:'获取分页数据中...',
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
      setData: 'list',
      type: true,
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
  // 分页数据赋值
  onLoad: function () {
    this.getPageList()

  },

  onReachBottom: function () {
    this.data.pages.page++
    wx.showLoading({
      title: '正在加载更多...',
    })
    this.getPageList()
  },
})