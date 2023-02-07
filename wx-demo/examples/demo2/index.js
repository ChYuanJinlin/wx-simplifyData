const app = getApp()

Page({
  data: {
    list: [],
    pages: {
      page: 1
    }
  },
  getPageList() {
    wx.$getData('getPageList', {
      // 你需要传给接口的数据    
   
      params: {
        ...this.data.pages
      },
  
         // 需要赋值的字段
      setData: 'list',
      isPage: true,
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