function initial(){
    
    var color = prompt("Insira a cor desejada: #0000FF p/azul | #00FF00 p/verde| #FF0000 p/vermelho | (ou outra que queira)")
    document.body.style.backgroundColor = color
    /*
    if(color == "0000FF"){
        document.body.style.backgroundColor = "blue"
    }else if(color == "00FF00"){
        document.body.style.backgroundColor = "green"
    }
    else if(color == "FF0000"){
        document.body.style.backgroundColor = "red"
    }*/
}

function alterar(){
    document.getElementById("inputtxt").setAttribute("value", "Tirei Total, ou eu espero que sim :)")
}

function cafe(){
    document.getElementById("cafe").setAttribute("src", "")
}

function cracha(){
    document.getElementById("cracha").setAttribute("src", "imgs/cafe.jpg")
}

function lista(){
    document.getElementById("lista").setAttribute("src", "")
    var meunome = document.createElement("h6")
    meunome.innerText = "Leonardo B. Pompeu"
    meunome.style.color = "#ffb703"
    meunome.style.fontSize = "15px"
    document.getElementById("tdlist").appendChild(meunome);
}

function mala(){
    alert("Clicou na mala")
}

function oculos(){
    if(document.body.style.backgroundColor == "red"){
        document.body.style.backgroundColor = "white"
    }else{
        document.body.style.backgroundColor = "red"
    }
    
}

function tv(){
    document.getElementById("tv").setAttribute("src", "")
    var tv = document.createElement("img")
    tv.src = "imgs/tv.jpg"
    document.getElementById("divtv").appendChild(tv)
    
    
}