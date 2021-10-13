function textMudar(){
    let p = document.getElementsByTagName("p");
    for(let i = 0; i <= p.length; i++){
        document.getElementsByClassName("upperCase")[i].textContent = p[i].textContent.toLocaleUpperCase();
    }
}

function mudar(){
    document.getElementById("title").style.color = "red";
}