document.addEventListener("DOMContentLoaded", function() {
    // Inicializa la selección de días y visualización de horarios
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

    // Inicializa el calendario
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Vista inicial del calendario
        selectable: true,  // Permite seleccionar rangos de fechas
        select: function(info) {  // Función para manejar la selección de fechas
            const eventTitle = prompt('¿Quieres marcar este horario como libre? Ingresa el título:');
            if (eventTitle) {
                calendar.addEvent({
                    title: eventTitle,
                    start: info.startStr,
                    end: info.endStr,
                    allDay: true,
                    backgroundColor: '#27ae60',  // Color verde para horarios libres
                    borderColor: '#27ae60'
                });

                // Notificación simple al usuario
                alert('Horario libre marcado el ' + info.startStr);
            }
        },
        events: [
            // Ejemplo de un evento predefinido
            {
                title: 'Evento existente',
                start: '2024-09-12',
                backgroundColor: '#2980b9',
                borderColor: '#2980b9'
            }
        ]
    });

    calendar.render();  // Renderiza el calendario en la página
});
