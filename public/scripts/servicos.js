function expandContent(a, b, c){
    document.querySelector(`#${a} > div`).style.height = "auto";
    document.querySelector(`#${a} > div > p`).style.display = "block"
    
    document.querySelector(`#${a} > button.${b}`).style.display = "none";
    document.querySelector(`#${a} > button.${c}`).style.display = "block";
}

function compressContent(a, b, c){
    document.querySelector(`#${a} > div`).style.height = "160px";
    document.querySelector(`#${a} > div > p`).style.display = "none"

    document.querySelector(`#${a} > button.${b}`).style.display = "block";
    document.querySelector(`#${a} > button.${c}`).style.display = "none";
}