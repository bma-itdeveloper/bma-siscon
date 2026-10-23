# Estructura del proyecto SisCon

Este proyecto está organizado para separar la interfaz del usuario, la lógica de negocio y la base de datos del sistema.

## Carpetas principales

- `src/` : código de la aplicación frontend.
- `src/app/` : punto de entrada de la aplicación y configuración general.
- `src/features/` : módulos funcionales del sistema.
  - `auth/` : login, autenticación y recuperación de acceso.
  - `dashboard/` : menu principal y módulos del sistema.
- `src/components/` : componentes reutilizables.
- `src/hooks/` : hooks personalizados.
- `src/services/` : consumo de APIs y servicios.
- `src/config/` : variables de entorno y configuración.
- `src/styles/` : estilos globales y temas.
- `src/utils/` : funciones utilitarias.
- `database/` : scripts, esquemas y procedimientos SQL Server.
- `docs/` : documentación del proyecto.
- `public/` : imágenes, iconos y archivos públicos.

## Sugerencia de desarrollo

1. Crear cada pantalla en `src/features/.../pages`.
2. Crear componentes específicos en `src/features/.../components`.
3. Mantener los servicios HTTP en `src/services/api`.
4. Guardar toda la lógica SQL y scripts en `database/sql`.
5. Usar `docs/` para escribir especificaciones, rutas y decisiones de diseño.
