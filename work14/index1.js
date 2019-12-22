var lamp ={          //lamp是对象
    red:{          //property性质
        obj: document.getElementById('red'),
        timeout:3,
        style:['red','gray','gray'],
        next:'green'
    },
    yellow:{
        obj: document.getElementById('yellow'),
        timeout:2,
        style:['gray','yellow','gray'],
        next:'red'
    },
    green:{
        obj: document.getElementById('green'),
        timeout:5,
        style:['gray','gray','green'],
        next:'yellow'
    },
    changeStyle(style){
        this.red.obj.className = style[0];//classname代表什么
        this.yellow.obj.className = style[1];
        this.green.obj.className = style[2];
    }
};
var count = {
    obj:document.getElementById('count'),
    change: function(num) {
        this.obj.innerHTML = (num<10)? ('0'+ num) : num;//0000000000
    }
};

/////////////////////////////////////////////////////////////////////////////////
var now = lamp.green;
var timeout = now.timeout;
lamp.changeStyle(now.style);
lamp.changeStyle(timeout);//把timeout放进去changeStyle里面有什么用
setInterval(function() {
    if (--timeout <= 0){//数字变动
        now = lamp[now.next];//为什么要用中括号不能用点. 用了点变成了倒数4秒，到1秒时停住了
        timeout = now.timeout;
        lamp.changeStyle(now.style);
    }
    count.change(timeout);
},1000);//1000匿名函数调用参数，但是有什么用