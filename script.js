// import {io}  from '/socket.io-client'
// const socket=io('http://localhost:3000')
const outputDiv=document.getElementById("chatarea")
var inputmsg=document.getElementById('inputBox')
document.getElementById('sendButton').addEventListener("click",()=>
{
    var msg=inputmsg.value
    if(msg==='') return
    displaymessage(msg)
})
function displaymessage(message)
{
    const div =document.createElement('div')
    div.textContent = message;
    outputDiv.append(div)
    outputDiv.scrollTop = outputDiv.scrollHeight;
}