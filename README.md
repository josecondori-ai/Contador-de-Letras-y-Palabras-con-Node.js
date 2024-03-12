# Contador de Letras y Palabras con Node.js

Este script en Node.js se diseñó para leer archivos de texto y proporcionar información sobre la cantidad de letras totales en el archivo, así como contar la cantidad de palabras que contienen un término específico, en este caso, "react".

## Uso

1. **Preparación:**
    - Asegúrate de tener Node.js instalado en tu máquina.

2. **Ejecución:**
    - Descarga el script y guárdalo en tu directorio de trabajo.
    - Ejecuta el script proporcionando el nombre del archivo que deseas analizar.

    ```bash
    node nombre_del_script.js
    ```

3. **Resultados:**
    - El script mostrará en la consola la cantidad total de letras en el archivo y la cantidad de palabras que contienen el término "react".

## Características

- **Conteo de Letras:**
    - El script cuenta la cantidad total de letras en el archivo, excluyendo espacios y saltos de línea.

- **Conteo de Palabras con 'React':**
    - Identifica y cuenta la cantidad de palabras que contienen la subcadena 'react' (sin distinción entre mayúsculas y minúsculas).

## Ejemplo de Archivo

Si tienes un archivo de texto llamado `ejemplo.txt` y deseas analizarlo, ejecuta el siguiente comando:

```bash
node nombre_del_script.js ejemplo.txt
