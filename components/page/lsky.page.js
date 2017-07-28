/**
 * on 17-7-27.
 * @description 基于jQuery的分页插件
 * @version 1.0
 * @author lsky
 * @param { options }
 * @name { $.lsky() }
 */
(function ($) {
    $.fn.lsky = function (options) {
        var defaultArg = {
            containerBox: $(this),
            totalPage: 0,
            firstPage: 1,
            mode: "default",
            prev: "<",
            next: ">",
            prevStr: "上一页",
            nextStr: "下一页",
            startStr: "首页",
            endStr: "末页",
            currentIndex: 1,
            htmlArr: [],
            totalShow: 5,
            intervalHtml: '<span class="page-interval">...</span>',
            backFun: function () {}
        };
        var opts = $.extend({},defaultArg,options);  //默认参数
        $(this).empty().append('<div class="pageBox"></div>');
        opts["pageBox"] = $(this).find(".pageBox");
        var method = {
            init: function () {
                method.render();
            },
            abc: function (tag,_value,page,_class) {
                opts.htmlArr.push({
                    "tag": tag,
                    "value": _value,
                    "page": page,
                    "class": _class
                })
            },
            bcd: function (_s,len) {
                for(var i = _s;i <= len; i++){
                    method.abc("a",i,i,("lsky-page" + (i == opts.currentIndex ? " page-index" : "")))
                }
            },
            pushArr: function () {
                if(opts.mode == "detail"){
                    method.abc("a",opts.startStr,opts.firstPage,(opts.currentIndex == 1 ? "page-start disabled" : "page-start"))
                }
                method.abc("a",opts.prev,opts.currentIndex - 1,(opts.currentIndex <= 1 ? "page-prev disabled" : "page-prev"));
                if(opts.totalPage <= 5){
                    method.bcd(1,opts.totalPage);
                    method.abc("a",opts.next,Number(opts.currentIndex) + 1,"page-next");
                    return;
                }else {
                    if (opts.currentIndex <= 4) {
                        method.bcd(1, 5);
                        method.abc("span", "...", "", "page-interval");
                        method.abc("a", opts.totalPage, opts.totalPage, "lsky-page");
                    } else if (opts.currentIndex > opts.totalPage - 3) {
                        method.abc("a", "1", "1", "lsky-page");
                        method.abc("span", "...", "", "page-interval");
                        method.bcd(opts.totalPage - 4, opts.totalPage);
                    } else {
                        method.abc("a", "1", "1", "lsky-page");
                        method.abc("span", "...", "", "page-interval");
                        if (opts.currentIndex > 4 && opts.currentIndex < (opts.totalPage - 3)) {
                            method.bcd(Number(opts.currentIndex) - 2, Number(opts.currentIndex) + 2);
                            method.abc("span", "...", "", "page-interval");
                        } else if (opts.currentIndex == (opts.totalPage - 3)) {
                            method.bcd(opts.currentIndex - 2, Number(opts.currentIndex) + 2);
                        }
                        method.abc("a", opts.totalPage, opts.totalPage, "lsky-page");
                    }
                }
                method.abc("a",opts.next,Number(opts.currentIndex) + 1,(opts.currentIndex >= opts.totalPage ? "page-next disabled" : "page-next"))
                if(opts.mode == "detail"){
                    method.abc("a",opts.endStr,opts.totalPage,(opts.currentIndex == opts.totalPage ? "page-end disabled" : "page-end"))
                }
            },
            bindEvent: function () {
                opts.containerBox.off();
                opts.containerBox.on('click','.pageBox .page-prev',function () {
                    if(opts.currentIndex <= 1){
                        return;
                    }
                    var _index = Number($(this).attr("data-page"));
                    opts.currentIndex = _index;
                    method.render();
                    opts.backFun(_index)
                });
                opts.containerBox.on("click",".pageBox .page-next",function () {
                    if(opts.currentIndex >= opts.totalPage){
                        return;
                    }
                    var _index = Number($(this).attr("data-page"));
                    opts.currentIndex = _index;
                    method.render();
                    opts.backFun(_index)
                });
                opts.containerBox.on("click",".pageBox .lsky-page",function () {
                    var _index = Number($(this).attr("data-page"));
                    opts.currentIndex = _index;
                    method.render();
                    opts.backFun(_index)
                });
                opts.containerBox.on("click",".lsky-page-jump",function () {
                    var _index = opts.containerBox.find(".lsky-page-input").val();
                    var _r = /^\+?[1-9][0-9]*$/;
                    if(!_r.test(_index) && (Number(_index) <= opts.totalPage)){ return; }
                    opts.currentIndex = _index;
                    method.render();
                    opts.backFun(_index);
                });
                opts.containerBox.on("click",".pageBox .page-start,.pageBox .page-end",function () {
                    var _index = $(this).attr("data-page");
                    if(opts.currentIndex == $(this).attr("data-page"))
                    {
                        return;
                    }
                    opts.currentIndex = _index;
                    method.render();
                    opts.backFun(_index);
                });
            },
            render: function () {
                opts.htmlArr = [];
                method.pushArr();
                var msg = '';
                opts.htmlArr.forEach(function (val, index) {
                    switch (val.tag){
                        case 'a':
                            msg += '<a class="'+val.class+'" data-page="'+val.page+'">'+val.value+'</a>';
                            break;
                        case 'span':
                            msg += opts.intervalHtml;
                            break;
                        default:
                            msg += '<a class="'+val.class+'" data-page="'+val.page+'">'+val.value+'</a>';
                            break;
                    }
                });
                if(opts.mode == "jump" || opts.mode == "detail"){
                    msg += '<span class="lsky-page-text">当前在第'+opts.currentIndex+'页，共'+opts.totalPage+'页，跳转至</span>' +
                        '<input type="text" class="lsky-page-input">' +
                        '<button class="lsky-page-jump" type="button">确定</button>'
                }
                opts.pageBox.empty().append(msg);

                method.bindEvent();
            }
        };
        method.init();
    }
})(jQuery,window,document,undefined);