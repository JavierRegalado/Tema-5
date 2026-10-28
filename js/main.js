import{
    elementos,
    actualizarMensajeEstado,
    alternarInformacion
} from './interfaz.js';


elementos.btnAccion.addEventListener("click", () => {
    actualizarMensajeEstado("!Has pulsado al boton¡")
})

elementos.btnAccion.addEventListener("click", () => {
    console.log("Has pulsado al boton")
})

elementos.btnToggleInfo.addEventListener("click", alternarInformacion);