const socket=io("http://localhost:3000")

const name=window.prompt("enter your name:");


const outputDiv=document.getElementById("chatarea")

document.getElementById('sendButton').onclick=()=>
{
    var msg=document.getElementById('inputBox').value
    
    if(msg==='') return
    displaymessage(msg)
    socket.emit("mymessage",msg)
}
socket.on("received_message",message=>
    {
        displaymessageother(message)
    }
)
function displaymessage(message)
{
    const div =document.createElement('div')
    div.innerHTML = "you:\n"+message;
    div.style="margin-right:0;margin-left:auto"
    outputDiv.append(div)
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
function displaymessageother(message)
{
    const div=document.createElement('div')
    div.innerHTML=name+':\n'+message;
    outputDiv.append(div)
    outputDiv.scrollTop = outputDiv.scrollHeight;
}