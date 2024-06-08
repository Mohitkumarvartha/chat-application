const socket=io("https://chat-application-5-oaxo.onrender.com")

const name=window.prompt("enter your name:");


const outputDiv=document.getElementById("chatarea")
socket.emit("enter room",name)
socket.on("entered room",(name)=>
{
    displayentered(name)
})
document.getElementById('sendButton').onclick=()=>
{
    var msg=document.getElementById('inputBox').value
    
    if(msg==='') return
    displaymessage(msg)
    socket.emit("mymessage",name,msg)
}

socket.on("received_message",(name,message)=>
    {
        displaymessageother(name,message)
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
function displaymessageother(name,message)
{
    const div=document.createElement('div')
    div.innerHTML=name+':\n'+message;
    outputDiv.append(div)
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
function displayentered(name)
{
    const div=document.createElement('div')
    div.innerHTML=name+" entered the chat"
    outputDiv.append(div)
    div.style="background-color:blue"
    outputDiv.scrollTop = outputDiv.scrollHeight;
}