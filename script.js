const title = document.getElementById("title")
const result = document.getElementById("result")
const code = document.getElementById("code")
const message = document.getElementById("message")
const codeThisMessage = document.getElementById("codeThisMessage")
const shiftArea = document.getElementById("shiftArea")
const encode = document.getElementById("encode")
const switcher = document.getElementById("switcher")

let activated = false

encode.onclick = function()
{
    const message = codeThisMessage.value
    const shift = Number(shiftArea.value)

    if(!activated)
    {
        if(message.length > 0 && message.length < 40 && shift)
        {
            Encode(message, shift)
        }
        else if(message.length > 40)
        {
            result.innerText = "Max text length is 40 characters"
        }
        else if(message == "")
        {
            result.innerText = "Enter text"
        }
        else if(!shift)
        {
            result.innerText = "Shift must be a number"
        }
    }
    else
    {
        if(message.length > 0 && message.length < 40 && shift)
        {
            Decode(message, shift)
        }
        else if(message.length > 40)
        {
            result.innerText = "Max text length is 40 characters"
        }
        else if(message == "")
        {
            result.innerText = "Enter text"
        }
        else if(!shift)
        {
            result.innerText = "Shift must be a number"
        }
    }
}

switcher.style.cursor = "pointer"
switcher.onclick = function()
{
    if(!activated)
    {
        title.innerText = "Decoder"
        result.innerText = "Result below"
        code.innerText = "..."
        message.innerText = "Decode this message"
        codeThisMessage.value = ""
        shiftArea.value = ""
        encode.innerText = "Decode"
        switcher.innerText = "Switch to Encoder"
        code.style.cursor = "default"
        activated = true
    }
    else
    {
        title.innerText = "Encoder"
        result.innerText = "Result below"
        code.innerText = "..."
        message.innerText = "Encode this message"
        codeThisMessage.value = ""
        shiftArea.value = ""
        encode.innerText = "Encode"
        switcher.innerText = "Switch to Decoder"
        code.style.cursor = "default"
        activated = false
    }     
}



function Encode(message, shift)
{
    let str = ""
    for(let i = 0; i < message.length; i++)
    {
        const ascii = message.charCodeAt(i)
        const shifted = ascii + shift
        const stringed = String.fromCharCode(shifted)
        str += stringed
        code.innerText = str
    }
    result.innerText = "Click to copy code"
    code.style.cursor = "pointer"
    CopyText()
}

function Decode(message, shift)
{
    let str = ""
    for(let i = 0; i < message.length; i++)
    {
        const ascii = message.charCodeAt(i)
        const shifted = ascii - shift
        const stringed = String.fromCharCode(shifted)
        str += stringed
        code.innerText = str
    }
    result.innerText = "Click to copy code"
    code.style.cursor = "pointer"
    CopyText()
}

code.onclick = function CopyText()
{
    navigator.clipboard.writeText(code.innerText)
    result.innerText = "Copied!"
}