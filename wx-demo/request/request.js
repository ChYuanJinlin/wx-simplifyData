// 模拟api 请求的数据
const api = {
  getList() {
    return new Promise((resolve, reject) => {
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
        resolve(data)
      }, 1000);


    })
  },

  getList1() {
    return new Promise((resolve, reject) => {
      const data = {
        msg: '成功',
        code: 666,
        list: [{

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
        resolve(data)
      }, 1000);


    })
  },

  getPageList(obj) {
    return new Promise((resolve, reject) => {
      const data = {
        msg: '成功',
        status: 200,
        data: []
      }

      setTimeout(() => {

        for (let index = 0; index < obj.page * 20; index++) {

          data.data.push({
            title: '模拟分页数据'
          })
        }

        resolve(data)
      }, 1000);


    })
  }
}
export default api