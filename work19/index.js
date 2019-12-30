let ws//
function connect(){
    let server = document.getElementById('server').value
    ws = new WebSocket(server);//()里面是什么意思
    ws.onopen = function(){//disabled禁用    .disabled是什么意思
        document.getElementById('conn').disabled = 'disable';
        document.getElementById('disconn').disabled = '';
        let nickname = document.getElementById('nickname').value//
        if(nickname){
            ws.send('nickname|'+nickname)//|有什么用
        }
    }
    ws.onclose = function(){
        document.getElementById('conn').disable = '';
        document.getElementById('disconn').disable= 'disable';
    }
    ws.onmessage = function(event){
        let board = document.getElementById('board')
        let newmsg = document.createElement('div')
        console.log(event.data)//.data
        newmsg.innerHTML = event.data
        board.appendChild(newmsg)
        board.scrollTop = board.scrollHeight;
    }
}

function disconnect(){
    ws.close()
}

function send(){
    let msg = document.getElementById('content').value
    ws.send(msg)
}
