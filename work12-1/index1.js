//获取当前年份
let year = new Date().getFullYear()
document.getElementById("cal").innerHTML = calendar(year)
function setCalendar(year){
    var year = parseInt(year);
    console.log(year);
    var pre = year - 1;
    var next = year + 1;
    console.log(pre);
    console.log(next);
    document.getElementById('preyear').setAttribute('data-year', pre);
    document.getElementById('curyear').setAttribute('data-year', year);
    document.getElementById('nextyear').setAttribute('data-year', next);
    document.getElementById('curyear').innerText = year;
    document.getElementById('preyear').innerText = "<<" + pre;
    document.getElementById('nextyear').innerText = next + ">>";
    document.getElementById("cal").innerHTML = calendar(year);
    
}