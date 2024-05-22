# Zip Code Information Service

Este proyecto es un servicio REST que permite a los usuarios obtener información sobre códigos postales utilizando el servicio Zippopotam.

## Instalación

1. Clona este repositorio en tu máquina local:

```
git clone ........
```

2. Navega al directorio del proyecto:

```
cd zippopotam
```

3. Instala las dependencias del proyecto:

```
npm install
```

## Uso

Para iniciar el servidor localmente, ejecuta el siguiente comando:

```
npm run dev
```

Esto iniciará el servidor en el puerto especificado en el archivo `.env` o por defecto en el puerto 3000.

## Endpoints

### Obtener información de un código postal

- **URL**: `http://localhost:3000/api/zipcode/:countryCode/:zipCode`
- **Método HTTP**: GET
- **Parámetros de ruta**:
  - `countryCode`: El código de país del código postal (por ejemplo, "US" para Estados Unidos).
  - `zipCode`: El código postal que se desea buscar.
- **Respuesta exitosa**:
  ```json
    "post code": "60300",
    "country": "Mexico",
    "country abbreviation": "MX",
    "places": [
        {
            "place name": "Los Reyes de Salgado Centro",
            "longitude": "-102.1167",
            "state": "Michoacan De Ocampo",
            "state abbreviation": "MIC",
            "latitude": "19.3156"
        }
    ]
  ```

```
- **Códigos de estado HTTP**:
 - 200: Se encontró la información del código postal.
```
