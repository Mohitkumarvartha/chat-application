const socket=io("http://localhost:3000")



const outputDiv=document.getElementById("chatarea")

document.getElementById('sendButton').onclick=()=>
{
    var msg=document.getElementById('inputBox').value
    console.log(msg)
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
    div.textContent = message;
    div.style="float:right"
    outputDiv.append(div)
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
function displaymessageother(message)
{
    const div=document.createElement('div')
    div.textContent=message;
    outputDiv.append(div)
    outputDiv.scrollTop = outputDiv.scrollHeight;
}