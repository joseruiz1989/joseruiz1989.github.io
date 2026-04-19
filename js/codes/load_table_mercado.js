function imprimirMercado() {
    const urlArchivoCSV = 'files/mercado.csv';
    function llenarTablaDesdeCSV(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const lineas = data.split('\n');
                // const encabezados = lineas[0].split(',');
                const encabezados = ['Fecha', 'Producto', 'PrecioN', 'PrecioPromo', 'Almacen', 'Precio unidad', 'Categoria'];
    
                // Crear la fila de encabezados
                const tabla = document.getElementById('miTabla');
                const encabezadoRow = tabla.insertRow(0);
                console.log(encabezados);
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
                    celda1.textContent = valores[3];
                    // 15: precio comparar
                    // 16: precio normal
                    // 17: almacen
                    // 22: categoria
                    // 26: unidad
                    // 29: precio unidad
                    
                    const precionormal = fila.insertCell();
                    var numeroFormateado = Math.round(valores[16]);
                    // console.log(numeroFormateado);
                    var numeroFormateado1 = numeroFormateado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    precionormal.textContent = numeroFormateado1
                    precionormal.classList.add("precio_mercado");

                    const preciopromo = fila.insertCell();
                    var numeroFormateado = Math.round(valores[15]);
                    // console.log(numeroFormateado);
                    var numeroFormateado1 = numeroFormateado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    preciopromo.textContent = numeroFormateado1
                    preciopromo.classList.add("precio_mercado");

                    const celda3 = fila.insertCell();
                    celda3.textContent = valores[17];

                    const preciounidad = fila.insertCell();
                    var numeroFormateado = valores[29];
                    var numeroFormateado1 = numeroFormateado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    preciounidad.textContent = numeroFormateado1 + ' ' + valores[26]
                    preciounidad.classList.add("precio_mercado");

                    const categoria = fila.insertCell();
                    categoria.textContent = valores[22];

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
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("miTabla");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      // Inicialmente, se asume que la fila coincide con el filtro
      var match = false;
      td = tr[i].getElementsByTagName("td");
      // Itera sobre todas las celdas de la fila
      for (j = 0; j < td.length; j++) {
          if (td[j]) {
              txtValue = td[j].textContent || td[j].innerText;
              // Si se encuentra una coincidencia en alguna celda, marca la fila como coincidente y sal del bucle
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  match = true;
                  break;
              }
          }
      }
      // Muestra u oculta la fila según si coincide con el filtro
      if (match) {
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
  }
}



