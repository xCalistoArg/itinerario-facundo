document.addEventListener("DOMContentLoaded", function() {
    const diasElementos = document.querySelectorAll('.dia');
    const selectElement = document.getElementById('dias');

    function ocultarTodosLosDias() {
        diasElementos.forEach(dia => dia.classList.remove('mostrar'));
    }

    function mostrarDiaSeleccionado(diaSeleccionado) {
        const diaAmostrar = Array.from(diasElementos).find(dia => dia.dataset.dia === diaSeleccionado);
        if (diaAmostrar) {
            diaAmostrar.classList.add('mostrar');
        }
    }

    function manejarCambioDia() {
        const diaSeleccionado = selectElement.value;
        ocultarTodosLosDias();
        if (diaSeleccionado) {
            mostrarDiaSeleccionado(diaSeleccionado);
        }
    }

    selectElement.addEventListener('change', manejarCambioDia);
});
