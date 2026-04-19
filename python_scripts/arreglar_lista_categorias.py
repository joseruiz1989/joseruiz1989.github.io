# python -m http.server
# importing required modules
import pandas as pd
import glob


def obtener_dict_por_nombre(df, nombre_buscar):
    # Filtrar el DataFrame por el valor de 'id'
    fila_seleccionada = df[df['Producto'] == nombre_buscar]
    
    # Extraer el valor de almacen
    Almacen = fila_seleccionada['Almacen'].iloc[0]
    
    # Retornar un diccionario con los valores de 'nombre' y 'apellido'
    return {'Almacen': Almacen}


if __name__ == '__main__':
    
    nombres_path = 'files/nombres_edt.csv'
    nombres_df = pd.read_csv(nombres_path, index_col=None, low_memory=False)
    
    nombres_df.fillna('-', inplace=True)
    nombres_df['Sobra_nombre'] = nombres_df['nombre_original']
    
    for idx, row in nombres_df.iterrows():
        producto = row['nombre_original']
        producto_sep = producto.split()

            

                
