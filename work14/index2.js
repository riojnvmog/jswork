//设置秒杀的结束时间为15秒之后
let time = new Date()
//声明变量保存剩余的时间
let  m = s =0;
//设置定时器，实现限时秒杀效果
m = 59 - time.getMinutes()
s = 59 - time.getSeconds()
let id = setInterval(seckill, 1000);


function seckill(){
    s--;  //获取当前时间
    //获取时间差，单位为秒
    
    //判断秒杀是否过期
    if (s == -1){
        s = 59
        m--
    }
    if(m == -1){
        m = 59
    }
     
     
 
    
    //将剩余的分钟和秒显示到指定的网页中
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}

