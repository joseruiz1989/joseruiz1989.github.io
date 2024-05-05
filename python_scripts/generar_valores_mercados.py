# importing required modules
import pandas as pd
import glob

import xml.etree.ElementTree as ET

cac_ = r'{urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2}'
cbc_ = r'{urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2}'
cac_Attachment =        f'{cac_}Attachment'
cac_ExternalReference = f'{cac_}ExternalReference'
cbc_Description =       f'{cbc_}Description'
cac_InvoiceLine =       f'{cac_}InvoiceLine'

def get_main_root(xml_file):
    prints = False
    # Parsea el XML
    tree = ET.parse(xml_file)
    root = tree.getroot()

    # Accede a los elementos y sus valores
    for elemento in root:
        if elemento.tag == cac_Attachment:
            if prints: print(f'{elemento.tag}: {elemento.text}')
            for ele1 in elemento:
                if prints: print(f'  {ele1.tag}: {ele1.text}')


    if prints: print("-----------------------")

    main_root = root.find(f'./{cac_Attachment}/{cac_ExternalReference}/{cbc_Description}')
    # print(main_root.text)

    return main_root

def get_invoice_data(xml_path):
    prints = False
    main_root = get_main_root(xml_file)
    
    if prints: print("**************")
    root = ET.fromstring(main_root.text)
    # Accede a los elementos y sus valores
    productos = []
    
    IssueDate = root.find(f'./{cbc_}IssueDate').text

    for elemento in root:
        if elemento.tag == cac_InvoiceLine:
            producto = {}
            if prints: print("------------------------------------------------------------------------------------------------------------------------------------------------")
            # imprimir_elementos(elemento)
            for el_01 in elemento:
                if prints: print(f'{el_01.tag}: {el_01.text}')
                
            if prints: print("****************")

            producto['IssueDate'] = IssueDate
            
            InvoicedQuantity = elemento.find(f'./{cbc_}InvoicedQuantity').text
            producto['InvoicedQuantity'] = InvoicedQuantity
            if prints: print(f'  InvoicedQuantity: {InvoicedQuantity}')

            LineExtensionAmount = elemento.find(f'./{cbc_}LineExtensionAmount').text
            producto['LineExtensionAmount'] = LineExtensionAmount
            if prints: print(f'  LineExtensionAmount: {LineExtensionAmount}')

            Item_Description = elemento.find(f'./{cac_}Item/{cbc_}Description').text
            producto['Item_Description'] = Item_Description
            if prints: print(f'  Item_Description: {Item_Description}')

            Item_ID = elemento.find(f'./{cac_}Item/{cac_}StandardItemIdentification/{cbc_}ID').text
            producto['Item_ID'] = Item_ID
            if prints: print(f'  Item_ID: {Item_ID}')

            Price_PriceAmount = elemento.find(f'./{cac_}Price/{cbc_}PriceAmount').text
            producto['Price_PriceAmount'] = Price_PriceAmount
            if prints: print(f'  Price_PriceAmount: {Price_PriceAmount}')

            Price_BaseQuantity = elemento.find(f'./{cac_}Price/{cbc_}BaseQuantity').text
            producto['Price_BaseQuantity'] = Price_BaseQuantity
            if prints: print(f'  Price_BaseQuantity: {Price_BaseQuantity}')

            
            TaxTotal_Amount = elemento.find(f'./{cac_}TaxTotal/{cbc_}TaxAmount')
            if TaxTotal_Amount != None:
                TaxTotal_Amount = TaxTotal_Amount.text
            else:
                TaxTotal_Amount = 0
            producto['TaxTotal_Amount'] = TaxTotal_Amount
            if prints: print(f'  TaxTotal_Amount: {TaxTotal_Amount}')
            
            TaxTotal_RoundingAmount = elemento.find(f'./{cac_}TaxTotal/{cbc_}RoundingAmount')
            if TaxTotal_RoundingAmount != None:
                TaxTotal_RoundingAmount = TaxTotal_RoundingAmount.text
            else:
                TaxTotal_RoundingAmount = 0
            # producto['TaxTotal_RoundingAmount'] = TaxTotal_RoundingAmount
            if prints: print(f'  TaxTotal_RoundingAmount: {TaxTotal_RoundingAmount}')

            TaxSubtotal_TaxableAmount = elemento.find(f'./{cac_}TaxTotal/{cac_}TaxSubtotal/{cbc_}TaxableAmount')
            if TaxSubtotal_TaxableAmount != None:
                TaxSubtotal_TaxableAmount = TaxSubtotal_TaxableAmount.text
            else:
                TaxSubtotal_TaxableAmount = 0
            producto['TaxSubtotal_TaxableAmount'] = TaxSubtotal_TaxableAmount
            if prints: print(f'  TaxSubtotal_TaxableAmount: {TaxSubtotal_TaxableAmount}')

            TaxSubtotal_Category_Percent = elemento.find(f'./{cac_}TaxTotal/{cac_}TaxSubtotal/{cac_}TaxCategory/{cbc_}Percent')
            if TaxSubtotal_Category_Percent != None:
                TaxSubtotal_Category_Percent = TaxSubtotal_Category_Percent.text
            else:
                TaxSubtotal_Category_Percent = 0
            producto['TaxSubtotal_Category_Percent'] = TaxSubtotal_Category_Percent
            if prints: print(f'  TaxSubtotal_Category_Percent: {TaxSubtotal_Category_Percent}')

            TaxSubtotal_Category_TaxScheme_ID = elemento.find(f'./{cac_}TaxTotal/{cac_}TaxSubtotal/{cac_}TaxCategory/{cac_}TaxScheme/{cbc_}ID')
            if TaxSubtotal_Category_TaxScheme_ID != None:
                TaxSubtotal_Category_TaxScheme_ID = TaxSubtotal_Category_TaxScheme_ID.text
            else:
                TaxSubtotal_Category_TaxScheme_ID = 0
            producto['TaxSubtotal_Category_TaxScheme_ID'] = TaxSubtotal_Category_TaxScheme_ID
            if prints: print(f'  TaxSubtotal_Category_TaxScheme_ID: {TaxSubtotal_Category_TaxScheme_ID}')

            TaxSubtotal_Category_TaxScheme_Name = elemento.find(f'./{cac_}TaxTotal/{cac_}TaxSubtotal/{cac_}TaxCategory/{cac_}TaxScheme/{cbc_}Name')
            if TaxSubtotal_Category_TaxScheme_Name != None:
                TaxSubtotal_Category_TaxScheme_Name = TaxSubtotal_Category_TaxScheme_Name.text
            else:
                TaxSubtotal_Category_TaxScheme_Name = 0
            # producto['TaxSubtotal_Category_TaxScheme_Name'] = TaxSubtotal_Category_TaxScheme_Name
            if prints: print(f'  TaxSubtotal_Category_TaxScheme_Name: {TaxSubtotal_Category_TaxScheme_Name}')


            Charge_Indicator = elemento.find(f'./{cac_}AllowanceCharge/{cbc_}ChargeIndicator')
            if Charge_Indicator != None:
                Charge_Indicator = Charge_Indicator.text
            else:
                Charge_Indicator = 0
            producto['Charge_Indicator'] = Charge_Indicator
            if prints: print(f'  Charge_Indicator: {Charge_Indicator}')

            Charge_MultiplierFactorNumeric = elemento.find(f'./{cac_}AllowanceCharge/{cbc_}MultiplierFactorNumeric')
            if Charge_MultiplierFactorNumeric != None:
                Charge_MultiplierFactorNumeric = Charge_MultiplierFactorNumeric.text
            else:
                Charge_MultiplierFactorNumeric = 0
            producto['Charge_MultiplierFactorNumeric'] = Charge_MultiplierFactorNumeric
            if prints: print(f'  Charge_MultiplierFactorNumeric: {Charge_MultiplierFactorNumeric}')

            Charge_Amount = elemento.find(f'./{cac_}AllowanceCharge/{cbc_}Amount')
            if Charge_Amount != None:
                Charge_Amount = Charge_Amount.text
            else:
                Charge_Amount = 0
            producto['Charge_Amount'] = Charge_Amount
            if prints: print(f'  Charge_Amount: {Charge_Amount}')

            Charge_BaseAmount = elemento.find(f'./{cac_}AllowanceCharge/{cbc_}BaseAmount')
            if Charge_BaseAmount != None:
                Charge_BaseAmount = Charge_BaseAmount.text
            else:
                Charge_BaseAmount = 0
            producto['Charge_BaseAmount'] = Charge_BaseAmount
            if prints: print(f'  Charge_BaseAmount: {Charge_BaseAmount}')

            producto['Precio_comparar'] = float(producto['Price_PriceAmount']) + float(producto['TaxTotal_Amount'])
        
            # if prints: print(f'{elemento.tag}: {elemento.text}')
            productos.append(producto)

    return productos

def imprimir_elementos(elemento, nivel=0):
    """Función recursiva para imprimir elementos XML."""
    espacio = '  ' * nivel
    tag = elemento.tag.replace(cac_, 'cac_').replace(cbc_, 'cbc_')
    print(f"{espacio}{tag}")

    for hijo in elemento:
        imprimir_elementos(hijo, nivel + 1)

    if elemento.text and elemento.text.strip():
        print(f"{espacio}  Texto: |{elemento.text}|")

def obtener_dict_por_nombre(df, nombre_buscar):
    # Filtrar el DataFrame por el valor de 'id'
    fila_seleccionada = df[df['Producto'] == nombre_buscar]
    
    # Extraer el valor de almacen
    Almacen = fila_seleccionada['Almacen'].iloc[0]
    
    # Retornar un diccionario con los valores de 'nombre' y 'apellido'
    return {'Almacen': Almacen}


if __name__ == '__main__':

    mercados = [['Mercamio', 'C:/Users/joser/OneDrive/Papeles/facturas cosas/mercamio/'],
                ['Dollarcity', 'C:/Users/joser/OneDrive/Papeles/facturas cosas/dollarcity/'],
                ['Exito', 'C:/Users/joser/OneDrive/Papeles/facturas cosas/exito/'],
                ['Alkosto', 'C:/Users/joser/OneDrive/Papeles/facturas cosas/alkosto/'],
                ['Jumbo', 'C:/Users/joser/OneDrive/Papeles/facturas cosas/jumbo/']]
    
    df = pd.DataFrame()
    
    for almacen, main_folder in mercados:
        folders = glob.glob(f"{main_folder}*/")
        folders.sort()
        
        for folder in folders[:]:
            xml_files = glob.glob(f"{folder}*.xml")
            for xml_file in xml_files[:]:
                print(f"{xml_file}")

                productos = get_invoice_data(xml_file)
                for prod in productos:
                    prod['Almacen'] = almacen
                    if '�' in prod['Item_Description']:
                        prod['Item_Description'] = prod['Item_Description'].replace('�', 'n')
                    # print("*/*/*/*/*/*/*/*/*/"*20)
                    # for key in prod:
                        # print(key, prod)
                    df = df._append(prod, ignore_index=True)

    df.fillna(0, inplace=True)
    df['InvoicedQuantity'] = df['InvoicedQuantity'].astype(float)
    df['Price_PriceAmount'] = df['Price_PriceAmount'].astype(float)
    df['TaxTotal_Amount'] = df['TaxTotal_Amount'].astype(float)
    df['Precio_comparar'] = df['Precio_comparar'].astype(int)

    df['total']=round(df['InvoicedQuantity']*df['Price_PriceAmount'])
    df['total_imp']=df['total']+df['TaxTotal_Amount']
    
    df = df.sort_values(by=['Item_Description', 'IssueDate'], ascending=[True, False])

    df['IssueDate'] = pd.to_datetime(df['IssueDate'])
    df['IssueDate'] = df['IssueDate'].dt.strftime('%d %b %Y')
    print(df.columns)

    df_end = df[['IssueDate', 'Item_Description', 'Precio_comparar', 'Almacen']]
    # df_end = df

    df_end = df_end.rename(columns={'IssueDate': 'Fecha',
                                    'Item_Description': 'Producto',
                                    'Precio_comparar': 'Precio'})
    
    df_end.to_csv('files/mercado.csv', index=False)


    # print(df_end)
    
    # para los nombres de los productos
    product_names = df_end['Producto'].unique().tolist()
    product_names.sort()
    
    nombres_path = 'files/nombres_edt.csv'
    
    
    nombres_categorizados_df = pd.read_csv(nombres_path, index_col=None, low_memory=False)
    print(nombres_categorizados_df.columns)
    nombres_categorizados = nombres_categorizados_df['nombre_original'].unique().tolist()
    for product in product_names:
        if product not in nombres_categorizados:
            print(f"falta: |{product}|")
            nombres_categorizados_df = nombres_categorizados_df._append({'nombre_original': product}, ignore_index=True)
            
    nombres_categorizados_df = nombres_categorizados_df.sort_values(by='nombre_original')
    
    for idx, row in nombres_categorizados_df.iterrows():
        _producto = row['nombre_original']
        almacen = obtener_dict_por_nombre(df_end, _producto)['Almacen']
        nombres_categorizados_df.at[idx, 'Almacen'] = almacen
    
    nombres_categorizados_df.to_csv('files/nombres_edt.csv', index=False)

            

                
