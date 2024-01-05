function imprimirMercado() {
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
                    // valores.forEach(valor => {
                    //     const celda = fila.insertCell();
                    //     celda.textContent = valor;
                    // });

                    // console.log(valores);

                    const celda0 = fila.insertCell();
                    celda0.textContent = valores[0];

                    const celda1 = fila.insertCell();
                    celda1.textContent = valores[1];

                    const celda2 = fila.insertCell();
                    var numeroFormateado = Math.round(valores[2]);
                    // console.log(numeroFormateado);
                    var numeroFormateado1 = numeroFormateado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    celda2.textContent = numeroFormateado1
                    celda2.classList.add("precio_mercado");

                    const celda3 = fila.insertCell();
                    celda3.textContent = valores[3];
                }
            })
            .catch(error => {
                console.error('Error al leer el archivo CSV:', error);
            });
    }

    llenarTablaDesdeCSV(urlArchivoCSV);


    var numeroCells = document.querySelectorAll(".precio_mercado");

    // Iterar sobre cada celda y formatear el número
    numeroCells.forEach(function(cell) {
        var numero = parseFloat(cell.innerHTML);
        var numeroFormateado = numero.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
        cell.innerHTML = numeroFormateado;
    });
}

function search_product() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("miTabla");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



