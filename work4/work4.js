document.write("<p>金字塔</p>")
let level= prompt('请设置金字塔的层数')
level=parseFloat(level)&&Number(level)
if (isNaN(level)){
    alert ('金字塔的层数是数字')
}
for (let i=1;i<=level;i++){
    let blank = level - i;
    for(let k=0;k<blank;++k){ 
        document.write('&nbsp;');//空格慢慢变少，要设置逐渐递减的变量，blank逐渐递减
    }
    let star =i*2-1
    for(let j=0;j<star;++j){
        document.write('*')
    }
    document.write("<br>")//为什么
}
let str ='<table border="9">'
for (let i=1;i<10;++i){
    str +='<tr>'//删除无影响
    for(var j=1;j<=i;++j){//？？？
        str += '<td>'+ j+'*' +i + '=' + (j*i) +'</td>'//td是格子
    }//为什么会换行
    str +='</tr>'//这个有什么用
}
str +='</table>'
document.getElementById('table').innerHTML =str