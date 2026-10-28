import { caracteristicas } from './datos.js';
import{
    elementos,
    actualizarMensajeEstado,
    alternarInformacion,
    renderizarCaracteristicas
} from './interfaz.js';

document.addEventListener("DOMContentLoaded", () => {


    elementos.btnAccion.addEventListener("click", () => {
        actualizarMensajeEstado("!Has pulsado al boton¡")
    })

    elementos.btnAccion.addEventListener("click", () => {
        console.log("Has pulsado al boton")
    })

    elementos.btnToggleInfo.addEventListener("click", alternarInformacion);

    renderizarCaracteristicas(caracteristicas);

    elementos.campoBusqueda.addEventListener("input", (evento) => {
            const textoBusqueda = evento.target.value.toLowerCase().trim();

            const resultadosFiltrados = caracteristicas.filter(item => {
                const coincideNombre = item.nombre.toLowerCase().includes(textoBusqueda);
                const coincideDescripcion = item.descripcion.toLowerCase().includes(textoBusqueda);
                return coincideNombre || coincideDescripcion;
            });

            renderizarCaracteristicas(resultadosFiltrados);
        });
});