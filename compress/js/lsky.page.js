!function(e){e.fn.lsky=function(a){var t={containerBox:e(this),totalPage:0,firstPage:1,mode:"default",prev:"<",next:">",prevStr:"上一页",nextStr:"下一页",startStr:"首页",endStr:"末页",currentIndex:1,htmlArr:[],totalShow:5,intervalHtml:'<span class="page-interval">...</span>',backFun:function(){}},n=e.extend({},t,a);e(this).empty().append('<div class="pageBox"></div>'),n.pageBox=e(this).find(".pageBox");var r={init:function(){r.render()},abc:function(e,a,t,r){n.htmlArr.push({tag:e,value:a,page:t,class:r})},bcd:function(e,a){for(var t=e;t<=a;t++)r.abc("a",t,t,"lsky-page"+(t==n.currentIndex?" page-index":""))},pushArr:function(){if("detail"==n.mode&&r.abc("a",n.startStr,n.firstPage,1==n.currentIndex?"page-start disabled":"page-start"),r.abc("a",n.prev,n.currentIndex-1,n.currentIndex<=1?"page-prev disabled":"page-prev"),n.totalPage<=5)return r.bcd(1,n.totalPage),void r.abc("a",n.next,Number(n.currentIndex)+1,"page-next");n.currentIndex<=4?(r.bcd(1,5),r.abc("span","...","","page-interval"),r.abc("a",n.totalPage,n.totalPage,"lsky-page")):n.currentIndex>n.totalPage-3?(r.abc("a","1","1","lsky-page"),r.abc("span","...","","page-interval"),r.bcd(n.totalPage-4,n.totalPage)):(r.abc("a","1","1","lsky-page"),r.abc("span","...","","page-interval"),n.currentIndex>4&&n.currentIndex<n.totalPage-3?(r.bcd(Number(n.currentIndex)-2,Number(n.currentIndex)+2),r.abc("span","...","","page-interval")):n.currentIndex==n.totalPage-3&&r.bcd(n.currentIndex-2,Number(n.currentIndex)+2),r.abc("a",n.totalPage,n.totalPage,"lsky-page")),r.abc("a",n.next,Number(n.currentIndex)+1,n.currentIndex>=n.totalPage?"page-next disabled":"page-next"),"detail"==n.mode&&r.abc("a",n.endStr,n.totalPage,n.currentIndex==n.totalPage?"page-end disabled":"page-end")},bindEvent:function(){n.containerBox.off(),n.containerBox.on("click",".pageBox .page-prev",function(){if(!(n.currentIndex<=1)){var a=Number(e(this).attr("data-page"));n.currentIndex=a,r.render(),n.backFun(a)}}),n.containerBox.on("click",".pageBox .page-next",function(){if(!(n.currentIndex>=n.totalPage)){var a=Number(e(this).attr("data-page"));n.currentIndex=a,r.render(),n.backFun(a)}}),n.containerBox.on("click",".pageBox .lsky-page",function(){var a=Number(e(this).attr("data-page"));n.currentIndex=a,r.render(),n.backFun(a)}),n.containerBox.on("click",".lsky-page-jump",function(){var e=n.containerBox.find(".lsky-page-input").val();n.currentIndex=e,r.render(),n.backFun(e)}),n.containerBox.on("click",".pageBox .page-start,.pageBox .page-end",function(){var a=e(this).attr("data-page");n.currentIndex!=e(this).attr("data-page")&&(n.currentIndex=a,r.render(),n.backFun(a))})},render:function(){n.htmlArr=[],r.pushArr();var e="";n.htmlArr.forEach(function(a,t){switch(a.tag){case"a":e+='<a class="'+a.class+'" data-page="'+a.page+'">'+a.value+"</a>";break;case"span":e+=n.intervalHtml;break;default:e+='<a class="'+a.class+'" data-page="'+a.page+'">'+a.value+"</a>"}}),"jump"!=n.mode&&"detail"!=n.mode||(e+='<span class="lsky-page-text">当前在第'+n.currentIndex+"页，共"+n.totalPage+'页，跳转至</span><input type="text" class="lsky-page-input"><button class="lsky-page-jump" type="button">确定</button>'),n.pageBox.empty().append(e),r.bindEvent()}};r.init()}}(jQuery,window,document);