function sofas(){
    esconder()
    const galeria=document.getElementById("sofa")
    galeria.classList.toggle("ativo")
}
function camas(){
    esconder()
    const galeria=document.getElementById("cama")
    galeria.classList.toggle("ativo")
}
function cadeiras(){
    esconder()
    const galeria=document.getElementById("cadeira")
    galeria.classList.toggle("ativo")
}

function esconder(){
    const search=document.querySelectorAll(".categoria .oculto")
    search.forEach(c=>{
        c.classList.remove("ativo")
    })
}