// To whatever nutjob feels the need to look at this code, please note that I whipped this up in a couple of minutes.

window.onload = ()=>{
    let button = document.getElementById("button")
    button.addEventListener('click', getNewImage)
}

var chars = "abcdefghijklmnopqrstuvwxyz0123456789"

var getNewImage = ()=>{
    let url = "https://prnt.sc/"

    for (let i = 0; i < 6; i++) {
        let char = chars[Math.round(Math.random()*chars.length)]
        url += char
    }

    window.open(url, "_blank")
}