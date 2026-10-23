# SisCon

Sistema para llevar el control de ingresos de un pequeño negocio.

## Objetivo

SisCon tendrá un login inicial y un menú principal con las aplicaciones del sistema. La información se almacenará en SQL Server 2022.

## Estructura recomendada del proyecto

```text
bma-siscon/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   └── common/
│   ├── config/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   └── dashboard/
│   │       ├── components/
│   │       └── pages/
│   ├── hooks/
│   ├── services/
│   │   └── api/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── database/
│   ├── scripts/
│   └── sql/
│       ├── schema/
│       └── stored-procedures/
├── docs/
│   └── estructura-proyecto.md
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## Recomendación de trabajo

- Usar `src/features/auth` para la pantalla de login.
- Usar `src/features/dashboard` para el menú principal y módulos.
- Guardar componentes reutilizables en `src/components`.
- Dejar la conexión a SQL Server y servicios en `src/services` y `database/sql`.
- Mantener documentación técnica en `docs/`.

## Comandos

```bash
npm install
npm run dev
```
