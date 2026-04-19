function imprimirNumero() {
    // Obtén el elemento por su id
    // var miParrafo = document.getElementById('numero');

    // Cambia el contenido del párrafo

    let contador = 1;

    function imprimir() {
        console.log(contador);
        // miParrafo.textContent = contador;
        contador++;
        setTimeout(imprimir, 1500);
    }

    imprimir();
}

function imprimirCsv() {
    const urlArchivoCSV = 'files/mercado.csv';
    function llenarTablaDesdeCSV(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const lineas = data.split('\n');
                const encabezados = lineas[0].split(',');
    
                // Crear la fila de encabezados
                const tabla = document.getElementById('miTabla');
                const encabezadoRow = tabla.insertRow(0);
                encabezados.forEach(encabezado => {
                    const th = document.createElement('th');
                    th.textContent = encabezado;
                    encabezadoRow.appendChild(th);
                });
    
                // Llenar la tabla con datos
                for (let i = 1; i < lineas.length; i++) {
                    const valores = lineas[i].split(',');
                    const fila = tabla.insertRow(i);
                    valores.forEach(valor => {
                        const celda = fila.insertCell();
                        celda.textContent = valor;
                    });
                }
            })
            .catch(error => {
                console.error('Error al leer el archivo CSV:', error);
            });
    }

    llenarTablaDesdeCSV(urlArchivoCSV);
}

