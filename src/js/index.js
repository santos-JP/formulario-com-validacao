const verificarCampo = document.querySelectorAll(".dado-formulario")
const campoObrigatorio = document.querySelectorAll(".campoObrigatorio")

function enviar() {
    for(let i = 0; i < verificarCampo.length; i++){
        let value = verificarCampo[i].value;

        if(value !== ""){
            verificarCampo[i].classList.add("obrigatorioPrenchido")
            campoObrigatorio[i].classList.remove("campoAparecer")
        } else if(value === ""){
            verificarCampo[i].classList.remove("obrigatorioPrenchido")
            verificarCampo[i].classList.add("obrigatorioNaoPrenchido")
            campoObrigatorio[i].classList.add("campoAparecer")
        
        }
    }
}