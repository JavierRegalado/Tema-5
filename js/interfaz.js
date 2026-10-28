export const elementos ={
    btnAccion: document.getElementById("btn-accion"),
    mensajeEstado: document.getElementById("mensaje-estado")
}

export function actualizarMensajeEstado(texto) {
    elementos.mensajeEstado.textContent = texto;
}