import{
    elementos,
    actualizarMensajeEstado
} from './interfaz.js';


elementos.btnAccion.addEventListener("click", () => {
    actualizarMensajeEstado("!Has pulsado al boton¡")
})

elementos.btnAccion.addEventListener("click", () => {
    console.log("Has pulsado al boton")
})