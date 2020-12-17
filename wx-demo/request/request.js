// 模拟api 请求的数据
const api = {
<<<<<<< HEAD

=======
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
  getList() {
    return new Promise((resovle, reject) => {
      const data = {
        msg: '成功',
        status: 200,
        data: [{
            title: '这是模拟获取的数据'
          },
          {
            title: '这是模拟获取的数据'
          },
          {
            title: '这是模拟获取的数据'
          }
        ]
      }

      setTimeout(() => {
        resovle(data)
      }, 1000);


    })
  },

  getList1() {
    return new Promise((resovle, reject) => {
      const data = {
        msg: '成功',
        code: 666,
<<<<<<< HEAD
        list: [
          {
=======
        list: [{
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
            title: '这是模拟获取的数据'
          },
          {
            title: '这是模拟获取的数据'
          },
          {
            title: '这是模拟获取的数据'
          }
        ]
      }

      setTimeout(() => {
        resovle(data)
      }, 1000);


    })
  },

  getPageList(obj) {
    return new Promise((resovle, reject) => {
      const data = {
        msg: '成功',
        status: 200,
        data: []
      }

      setTimeout(() => {

        for (let index = 0; index < obj.page * 20; index++) {
<<<<<<< HEAD
          data.data.push({
=======
          data.list.push({
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
            title: '模拟分页数据'
          })
        }

        resovle(data)
      }, 1000);


    })
  }
}
export default api