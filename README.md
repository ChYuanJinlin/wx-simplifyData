
# 安装
`
npm i wx-simplify-data -S
`
# 使用

在wx app.js 文件引入 


```javascript
import simplify from 'wx-simplify-Data'
<!-- 初始化 -->
simplify.init({
  <!-- 需要传一个api对象过来 -->
  api:传入你的api 对象
})

<!--
初始化配置之后，将会在微信对象上挂在一个叫wx.$getData()函数和wx.$am,你就可以使用这个函数来简易操作请求api接口,
 用法:wx.$getData.call(this,wx.$am.你定义api函数名或者直接传你定义api的字符串函数名过来,{},fn)
    -->

```


### simplify.init(optios:Object)(全局配置)

| 属性           | 类型            | 默认值 | 必填 | 说明                                                         |
| -------------- | --------------- | ------ | ---- | ------------------------------------------------------------ |
| api            | object          |        | 是   | 定义的api对象                                                |
| statusCode     | number          | 200    | 否   | 接口返回字段的成功失败的状态                                 |
| log            | boolean         | true   | 否   | 日志信息                                                     |
| msgField       | string          | msg    | 否   | 接口返回提升消息字段                                         |
| statusCodeText | string          | status | 否   | 接口返回成功失败的字段                                       |
| dataFilels     | string          | data   | 否   | 接口返回数据的字                                             |
| toast          | object\|boolean | false  | 否   | 配置微信提示，用法和微信wx.showToast一样,为true 根据接返回的消息字段默认提示 |

### wx.$getData.call(this,methodName:string,optios:Object [, fn])

| 属性           | 类型             | 默认值 | 必填 | 说明                                                         |
| -------------- | -------- | ------ | ---- | ------------------------------------------------------------ |
| this    | 上下文对象    |        | 是  | wx js文件 上下文对象                   |
| methodName | string           |  | 是  | 导出api 对象定义的函数名                 |
| <a href="#options" >optios</a> | object | null | 否 | 配置参数如下 |
| fn | function | | 否 | setData赋值之前的回调,用作于改变接口数据里面的结构，或者增加字段，格式化时间操作 |

### <a id="options">options</a>

| 属性            | 类型             | 默认值 | 必填 | 说明                                                         |
| --------------- | ---------------- | ------ | ---- | ------------------------------------------------------------ |
| apiData         | object           |        | 否   | 需要向接口传过去的数据                                       |
| setData         | string\|function |        | 是   | 需要赋值的data 数据字段,分页只需要传字符串，普通数据赋值可传字符串和对象 |
| dataFilels      | string           | data   | 否   | 接口返回数据的字段                                           |
| statusCodeText  | string           | data   | 否   | 接口返回是否成功状态字段                                     |
| statusCode      | number\|string   | 200    | 否   | 接口返回是否成功状态value                                    |
| msgField        | string           | msg    | 否   | 接口返回提示消息字段                                         |
| type            | boolean          | false  | 否   | 是否是分页接口，注意事项:如果是分页接口需要在wx上 新增一个 data:{pages:{page:1}} |
| success         | function         |        | 否   | 成功自定义回调                                               |
| toast           | object\|boolean  |        | 否   | 配置微信提示，如果传true默认采用,用法和微信wx.showToast一样，不穿不会显示，全局配置了，将会采用全局配置 |
| completeTip     | function\|object |        | 否   | 数据请求完成的提示回调,不传将会默认提示                      |
| loadMore        | function         |        | 否   | 当上拉加载更多赋值不满足时，需要使用这个函数来自定义上拉加载更多 |
| noData          | function\|object |        | 否   | 当是分页接口时候,加载更多之后没有数据的时候提示回调,如果传对象和wx.showToast 用法一样 |
| failTip         | function\|object |        | 否   | 不是成功状态码的提示回调,不传将会默认提示                    |
| showLoadingText | string           | 加载中 | 否   | 获取数据的时候的loading状态                                  |
| custom          | function         |        | 否   | 得到数据之后的回调，调用该函数之后只需要自己自定义           |
| name            | string           |        | 否   | 你的api函数的第二个参数                                      |



# 版本更新

####  **v1.0.22**

1. 修改代码错误


# 版本历史
[v1.0.1](./README-1.0.1.md)
[v1.0.22](./README-1.0.22.md)

