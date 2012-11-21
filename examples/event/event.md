
# event.js (draft)

OzJS核心库中的`mod/event`模块，是一个3.4K的文件，几乎无依赖，可在浏览器或nodejs环境中使用。

## Source code:

[View on Github](https://github.com/dexteryy/OzJS/blob/master/mod/event.js)

## Examples:

[Demo1](http://dexteryy.github.com/OzJS/examples/event/index.html) [(Source code)](https://github.com/dexteryy/OzJS/tree/master/examples/event)

## Usage: 

把`Event`实例单独定义为模块，承担应用各模块之间的消息传递：

```javascript
    define("notify", ["event"], function(Event){
        return Event(); // 以下例子里省略define/require声明，继续沿用notify和Event这两个局部变量名
    });
```

为基础类生成独立的事件命名空间，不依赖应用级的全局事件：

```javascript
    Dialog.prototype = {
        init: function(opt){
            this.event = Event();
        },
        update: function() {
            this.updateSize();
            this.updatePosition();
            this.event.fire("update", [this]);
            return this;
        },
```

监听消息和解除监听：

```javascript
    notify.bind("msg:A", function(msg){
        a = msg;
        notify.unbind("msg:A", arguments.callee);
    });
```

发送消息：

```javascript
    setTimeout(function(){
        notify.fire("msg:A", ["hey jude"]);
    }, 1000);
```

状态转移：

```javascript
    $("#button1").click(function(e){
        notify.resolve("button1:clicked", [this]);
        notify.bind("button1:clicked", function(button){
            // 按钮1已经点击过，所以立刻执行
            button.style.color = 'black';
        });
    });
    notify.bind("button1:clicked", function(button){
        // 等待按钮1点击之后再执行
        button.style.color = 'red';
    });
```

异步回调：

```javascript
    var data = {
        load: function(url){
            $.getJSON(url, function(json){
                if (json)
                    notify.resolve("data:" + url, [json]);
                else
                    notify.reject("data:" + url);
            });
            return notify.promise("data:" + url);
        }
    };
    data.load("jsonp_data_1.js").then(function(json){
        // json callback
    }, function(){
        // json error
    });
```

也可以用自己的promise对象：

```javascript
    var promise = Event.Promise();
    $.ajax({
        url: "jsonp_data_1.js",
        success: function(json){
            promise.resolve(json);
            promise.fire("json loaded");
        },
        error: function(){
            promise.reject();
            promise.error("json error");
        }
    });
    // fire和error都会执行bind的参数，resolve执行then和bind，所以bind的参数会被执行2次
    // 如果ajax请求在之前已经返回，则只有then或fail的参数会被执行（因为他们监听的是“状态改变”）
    promise.bind(function(){}).then(function(){}).fail(function(){});
```

事件流：

```javascript
    notify.promise("data:jsonp_data_1.js").then(function(json){
        setTimeout(function(){
            notify.resolve("delay:1000", [+new Date(), json]);
        }, 1000);
        return notify.promise("delay:1000");
    }).follow().then(function(time, json){
        setTimeout(function(){
            console.log("[数据在3秒前加载成功]", json);
            notify.resolve("delay:3000");
        }, 2000);
        return notify.promise("delay:3000");
    }).follow().then(function(){
        console.info('the end');
    });
```

避免多层的回调嵌套（“callback hell”）：

```javascript
    var fs = require("fs");
    // 将需要callback的异步方法转换成支持promise的方法
    fs.readFile = promiseFn(fs.readFile.bind(fs));
    fs.writeFile = promiseFn(fs.writeFile.bind(fs));
    // 一个简单的实现
    function promiseFn(fn){
        var self = this, fuid = 0;
        return function(input, encode){
            var eid = 'callback' + fuid++;
            fn.call(self, input, encode, function(err){
                if (err) {
                    notify.reject(eid, arguments);
                } else {
                    notify.resolve(eid, arguments);
                }
            });
            return notify.promise(eid);
        }
    }
    fs.readFile(input, 'utf-8').then(function(err, data){
        var beautifuldata = js_beautify(data, options);
        return fs.writeFile(output, beautifuldata);
    }, function(err){
        setTimeout(function(){
            notify.reject('read fail', [err]);
        }, 100);
        return notify.promise('read fail');
    }).follow().success(function(){
        console.log('Success!');
    }).fail(function(err){
        console.error('Fail!', err);
    });
```

依赖多个并发事件：

```javascript
    notify.when("msg:A", "msg:B", "jsonp:A", "jsonp:B") // when传出新的promise对象
        .some(3) // 如果不调用some或any，默认为全部事件完成后再触发resolve
        .then(function(){ // 已经取到3/4的数据，参数顺序跟when的参数顺序一样
            console.warn("recieve 3/4", arguments);
        });
```

静态方法`Event.when`接受`promise`参数，可以写出更复杂的依赖关系：

```javascript
    Event.when(
        notify.when("msg:A", "msg:B"),
        notify.when("click:btn1", "clicked:btn2").any()
    ).then(function(args1, args2){
        // 相当于："msg:A" && "msg:B" && ( "click:btn1" || "clicked:btn2" )
        console.warn("recieve all messages, click one button", arguments);
    });
```

