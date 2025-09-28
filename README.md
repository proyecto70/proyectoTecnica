# Aplicación Web de Comercio Electrónico

Una aplicación web moderna y receptiva construida con React, Vite y React Router. Esta aplicación ofrece una experiencia completa de compras en línea con listados de productos, funcionalidad de carrito de compras y un proceso de pago seguro.

Demo <https://juanpabloleonf.github.io/project-tecnica/>

## 🚀 Características

- **Diseño Responsive**: Diseño completamente adaptable que funciona en todos los dispositivos
- **Catálogo de Productos**: Explora y visualiza información detallada de los productos
- **Carrito de Compras**: Añade/elimina artículos y gestiona cantidades
- **Pago Seguro**: Proceso de pago de múltiples pasos con validación de formulario
- **Escaparate de Marcas**: Destaca marcas y productos destacados
- **Sección Acerca de**: Conoce más sobre la empresa y sus valores

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - React 19
  - React Router DOM v7
  - Vite (Herramienta de Construcción)
  - CSS3 (Vanilla CSS)
  - Context API (Gestión de Estado)

- **Herramientas de Desarrollo**:
  - ESLint (Linting de Código)
  - GitHub Pages (Despliegue)

## 📂 Estructura del Proyecto

```
src/
├── domain/               # Lógica de negocio y gestión de datos
│   ├── context/         # Proveedores de Contexto de React
│   ├── data/            # Datos de la aplicación y datos de prueba
│   ├── models/          # Modelos e interfaces de datos
│   └── reducers/        # Reductores de estado
├── ui/
│   ├── app/             # Componente principal de la aplicación
│   ├── components/      # Componentes UI reutilizables
│   ├── layouts/         # Componentes de diseño de página
│   └── pages/           # Componentes de páginas principales
├── index.css            # Estilos globales
└── main.jsx             # Punto de entrada de la aplicación
```

## 🚀 Comenzando

### Requisitos Previos

- Node.js (v16 o superior)
- npm (v7 o superior) o yarn


2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Construcción para Producción

```bash
npm run build
# o
yarn build
```

Esto creará una carpeta `dist` con la versión de producción.

## 🚀 Despliegue

La aplicación está configurada para desplegarse en GitHub Pages:

1. Construye la aplicación:
   ```bash
   npm run build
   ```

2. Despliega en GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🌐 Rutas

- `/` - Página de inicio con listado de productos
- `/payment` - Proceso de pago

## 🎨 Estilos

La aplicación utiliza CSS vanilla organizado por componentes. Los estilos globales se definen en `index.css`, mientras que los estilos específicos de cada componente se ubican junto a sus respectivos componentes.
