// 模拟api 请求的数据
const api = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======

>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
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
<<<<<<< HEAD
        list: [
          {
=======
        list: [{
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
        list: [
          {
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
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
<<<<<<< HEAD
          data.data.push({
=======
          data.list.push({
>>>>>>> d69962e29e0a7f9b760a1320ccbccc1cc014b5d1
=======
          data.data.push({
>>>>>>> a44c52728696ab5ff3c94cc2c09c01a1de96d27a
            title: '模拟分页数据'
          })
        }

        resovle(data)
      }, 1000);


    })
  }
}
export default api