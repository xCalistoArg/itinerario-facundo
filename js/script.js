function mostrarDia() {
    const diaSeleccionado = document.getElementById('dias').value;
    const dias = document.querySelectorAll('.dia');
    
    dias.forEach(dia => {
        dia.classList.remove('mostrar');
        if (dia.dataset.dia === diaSeleccionado) {
            dia.classList.add('mostrar');
        }
    });
}
