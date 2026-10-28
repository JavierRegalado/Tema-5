export const elementos ={
    btnAccion: document.getElementById("btn-accion"),
    mensajeEstado: document.getElementById("mensaje-estado"),
    btnToggleInfo: document.getElementById("btn-toggle-info"),
    infoExtra: document.getElementById("info-extra"),
    campoBusqueda: document.getElementById("campo-busqueda"),
    contenedorCaracteristicas: document.getElementById("contenedor-caracteristicas"),
    mensajeSinResultados: document.getElementById("mensaje-sin-resultados")
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

export function renderizarCaracteristicas(lista) {
    // Limpieza del contenedor antes de re-renderizar
    elementos.contenedorCaracteristicas.textContent = "";

    if (lista.length === 0) {
        elementos.mensajeSinResultados.classList.remove("oculto");
        return;
    }

    elementos.mensajeSinResultados.classList.add("oculto");

    lista.forEach(item => {
  
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = item.nombre;

        const categoria = document.createElement("span");
        categoria.classList.add("categoria");
        categoria.textContent = item.categoria;

        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion;

    
        tarjeta.append(titulo, categoria, descripcion);
        elementos.contenedorCaracteristicas.append(tarjeta);
    });
}