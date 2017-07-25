##  LSKY 轻量级CSS框架

**LSKY**是一款非常轻量级的前端基本样式框架，同时项目中可以按需引用，无需全部引用导致加载缓慢问题。本框架使用normalize.css对对几乎所有的默认样式进行重置，同时本框架部分参考Spectre同为轻量级CSS框架给与我的启发。

#### 安装
> git clone git@github.com:Lsky1026/CSS.git

#### 使用
     包含全部模块的样式文件位于dist/lsky.css
     各个模块对应dist/文件夹下的各个css文件
     在页面中引用css文件 
     <link rel="stylesheet" href="lsky.css">

#### 项目完成进度
 - [x]  Layout
 - [x]  Button
 - [x]  Table
 - [x] Label
 - [ ] Form

 
#### Layout
> 栅格布局用于整体网页的布局，使用者可以快速搭建网站的整体架构。通过使用行（row）和列（column）的一些列组合来创建页面，使用者只需要将所需内容放入创建好的容器中即可。
``` htmlbars
<div class="container">
    <div class="row">
        <div class="column col-12">
            <div class="block-div"></div>
        </div>
    </div>
    <div class="row">
        <div class="column col-3">
            <div class="block-div"></div>
        </div>
        <div class="column col-3">
            <div class="block-div"></div>
        </div>
        <div class="column col-3">
            <div class="block-div"></div>
        </div>
        <div class="column col-3">
            <div class="block-div"></div>
        </div>
    </div>
    <div class="row">
        <div class="column col-4">
            <div class="block-div"></div>
        </div>
        <div class="column col-8">
            <div class="block-div"></div>
        </div>
    </div>
    <div class="row">
        <div class="column col-6">
            <div class="block-div"></div>
        </div>
        <div class="column col-6">
            <div class="block-div"></div>
        </div>
    </div>
</div>
```
**注意**
> 栅格布局必须使用`<div class="container"> <div class="row"></div> </div>`

#### Button
> 对应dist/button.css文件，该模块接受`<a>`和`<button>`标签作为按钮，模块提供了按钮的基本样式和效果。
``` htmlbars
<div class="container">
    <div class="row">
        <div class="column col-3">
            <div class="block-div">
                <button class="btn">button</button>
            </div>
        </div>
        <div class="column col-3">
            <div class="block-div">
                <button class="btn loading">button loading</button>
            </div>
        </div>
        <div class="column col-3">
            <div class="block-div">
                <button disabled="disabled" class="btn">button disabled</button>
            </div>
        </div>
        <div class="column col-3">
            <div class="block-div">
                <button class="btn btn-link">button link</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="column col-6">
            <div class="block-div">
                <div class="btn-group">
                    <button class="btn">button group</button>
                    <button class="btn">button group</button>
                    <button class="btn">button group</button>
                </div>
            </div>
        </div>
        <div class="column col-6">
        </div>
    </div>
</div>>
```
* class="btn"为默认样式
* class="btn-link"链接按钮样式
* [disabled=disabled] 按钮禁用状态下样式
* button.btn.loading 按钮加载动画

**注意**
> 按钮使用需要用`<div class="container"></div>`包裹。

#### Table
> 对`<table>`添加`.table`类为表格添加基础样式。默认基础表格为条纹状态表格。
> **注意** ： 条纹状表格是使用`:nth-child`CSS选择器实现，IE8一下不支持该选择器。
``` htmlbars
<div class="container">
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>genre</th>
          <th>release date</th>
          <th>name</th>
          <th>genre</th>
          <th>release date</th>
          <th>genre</th>
          <th>release date</th>
        </tr>
        </thead>
        <tbody>
        <tr class="active">
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```
-   `.table`为默认类，必须添加。
-   `.active`为激活状态。
**注意**
> 按钮使用需要用`<div class="container"></div>`包裹。
