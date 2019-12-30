function send() {
    let sno = document.getElementById('sno').Value
    let name = document.getElementById('name').Value
    let content = document.getElementById('content').Value 
    let xmlhttp;
    
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open('post',"http://139.9.81.203:8090/ajax",true)
    xmlhttp.setRequestHeader("Content-type","qpplication/x-www-form-urlencoded");
    xmlhttp.send('sno'+sno+'&content='+content)


    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let ajaxData = JSON.parse(xmlhttp.responseText)
            result = ajaxData.reverse().map((val)=>{return JSON.stringify(val)})
            document.getElementById("result").innerHTML = result.join('<br>');

        }
    }
}