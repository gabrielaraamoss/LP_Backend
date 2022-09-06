# LP_Backend

## Instalación 
1. Clonar proyecto 
2. Cambiar directorio proyecto
3. Instalar dependencias 
```
npm install 
```
4. Crear schema en MySQL con el nombre "api"
5. Ejecutar siguiente query en MySQL
```
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  `publicacion` varchar(150) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `family` varchar(20) DEFAULT NULL,
  `carbohydrates` varchar(150) DEFAULT NULL,
  `protein` float(2,0) DEFAULT NULL,
  `calories` float(2,0) DEFAULT NULL,
  `sugar` float(2,0) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)
```
6. **Configurar conexión:** ```En el archivo server.js por las mismas credenciales usadas en MySQL Workbrench```
7. Alzar backend 
```
node server.js
```
![image](https://user-images.githubusercontent.com/68141841/188541937-7ed6501d-0928-4a42-a9b7-5bac47aae38c.png)
