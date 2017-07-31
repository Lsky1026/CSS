### 分页插件
  该插件是我利用空闲时间完成的一个功能比较完善的分页模块。
  

#### 功能介绍
该插件有三种模式可供选择:
- 默认模式 “default”：默认模式下，插件只提供分页显示和上下页。
  ![示例样式下“default”模式](https://github.com/Lsky1026/CSS/blob/master/components/page/default.png)
- 跳页模式“jump”：该模式提供默认模式下的所有功能以外，添加了总页数显示，当前页和跳页。
  ![示例样式下“jump”模式](https://github.com/Lsky1026/CSS/blob/master/components/page/jump.png)
- 完整模式“detail”：完整模式提供了插件的所有功能，包括：分页、上下页、首尾页、总页数当前页和跳页。
  ![示例样式下“detail”模式](https://github.com/Lsky1026/CSS/blob/master/components/page/detail.png)

#### 使用方法
  插件地址：
  
> 压缩版："https://github.com/Lsky1026/CSS/tree/master/compress/js/lsky.page.js"
    
> 源码："https://github.com/Lsky1026/CSS/blob/master/components/page/lsky.page.js" 
  
配置方法：
* 首先页面中声明一个容器`<div class="footer-page"></div>`
* 其次配置参数
``` javascript
$(".footer-page").lsky({
  totalPage: pages,  //总页数
  mode: "default",   //模式选择，默认default
  currentIndex: 1,    //默认显示第一页
  prev: "<",    //可自定义上下页标示，默认"<"和">"
  next: ">",
  backFun: function(index){
    //回调函数，将会返回当前点击的页码。
  }
})
```

#### 所有样式类
- `.pageBox` : 内包裹容器类
- `.lsky-page` : 默认`<a>`标签类
- `.page-index` : 当前页样式类
- `.page-prev,.page-next` : 上下页类
- `.page-interval` : 分页间隔类 --> `<span>...</span>`
- `.lsky-page-text`: 文字信息
- `.lsky-page-input`: 输入框
- `.lsky-page-jump`: 跳转按钮
- `.page-start,.page-end`： 首页和尾页类
- `.disabled`: 不可点击状态类

##### **注意**
> 该插件只提供分页功能，样式等需要自己添加。

#### 提供一套默认样式
**仅供参考**
``` css
/*分页*/
.footer-page{
  text-align: center;
  margin-bottom: 10px;
}
.pageBox{
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.pageBox .lsky-page,
.pageBox .page-prev,
.pageBox .page-next,
.pageBox .page-start,
.pageBox .page-end{
  border: 1px solid #ff7800;
  background-color: #fff;
  color: #ff7800;
  margin: 0 10px;
  padding: 4px 10px;
  cursor: default;
  display: inline-block;
  height: 32px;
  line-height: 24px;
  text-decoration: none;
}
.pageBox .page-interval{
  display: inline-block;
  margin: 0 10px;
  padding: 4px 10px;
  border: 1px solid #ff7800;
  background-color: #fff;
  color: #ff7800;
  cursor: default;
  height: 32px;
  vertical-align: baseline;
  line-height: 24px;
}
.pageBox .page-index{
  background-color: #ff7800;
  color: #fff;
  margin: 0 10px;
  padding: 4px 10px;
  cursor: default;
}
.pageBox .disabled{
    border: 1px solid rgba(0,0,0,.4);
    color: rgba(0,0,0,.4);
}
.pageBox .lsky-page-input{
  width: 42px;
  outline: none;
  margin-right: 5px;
  padding: 4px 4px 4px 6px;
  height: 28px;
  border-width: 2px;
}
.pageBox .lsky-page-jump{
  outline: none;
  padding: 4px 8px;
  border: 1px solid #ff7800;
  background-color: #fff;
  color: #ff7800;
  height: 28px;
  line-height: 18px;
}
```
