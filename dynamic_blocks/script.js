function AgregarBloque(){
    let bloque = document.createElement("div");

    bloqueNo += 1;
    bloque.innerHTML = bloqueNo;
    let bloqueID = "bloqueNo" + toString(bloqueNo)
    bloque.setAttribute("id", bloqueID);

    bloque.setAttribute("class", "bloqueAd")

    let col = document.getElementById("col" + decideCol(bloqueID));
    
    col.appendChild(bloque);

}

function QuitarBloque(){
    let bloque = document.getElementById("bloqueNo" + toString(bloqueNo));
    EncontrarCol();
    bloque.remove();

}

function EncontrarCol(){
    if (col1.find(bloqueNo) !== undefined){
        col1.splice(col1.indexOf(bloqueNo), 1);
    }
    else if (col2.find(bloqueNo) !== undefined){
        col2.splice(col2.indexOf(bloqueNo), 1);
    }
    else if (col3.find(bloqueNo) !== undefined){
        col3.splice(col3.indexOf(bloqueNo), 1);
    }
}

function decideCol(bloqueID){
    if ((col1.length <= col2.length && col2.length <= col3.length) || col1.length == 0){
        col1.push(bloqueID);
        return "1";
    }
    else if(col2.length < col1.length || col2.length <= col3.length){
        col2.push(bloqueID);
        return "2";
    }
    else{
        col3.push(bloqueID);
        return "3";
    }
}
var col1 = []
var col2 = []
var col3 = []
var bloqueNo = 0;