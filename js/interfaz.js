export const elementos ={
    btnAccion: document.getElementById("btn-accion"),
    mensajeEstado: document.getElementById("mensaje-estado"),
    btnToggleInfo: document.getElementById("btn-toggle-info"),
    infoExtra: document.getElementById("info-extra")

}

export function actualizarMensajeEstado(texto) {
    elementos.mensajeEstado.textContent = texto;
}

export function alternarInformacion() {
    const estaOculto = elementos.infoExtra.classList.contains("oculto");

    if (estaOculto) {
        elementos.infoExtra.classList.remove("oculto");
        elementos.btnToggleInfo.setAttribute("aria-expanded", "true");
        elementos.infoExtra.setAttribute("aria-hidden", "false");
        elementos.btnToggleInfo.textContent = "Ocultar información";
    } else {
        elementos.infoExtra.classList.add("oculto");
        elementos.btnToggleInfo.setAttribute("aria-expanded", "false");
        elementos.infoExtra.setAttribute("aria-hidden", "true");
        elementos.btnToggleInfo.textContent = "Mostrar más información";
    }
}