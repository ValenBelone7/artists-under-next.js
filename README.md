# UnderFechas

**La agenda de la escena under**

Una aplicación web para descubrir artistas, fechas y todo lo que necesitas saber antes de salir a los shows de la escena musical under.

## Información del Proyecto

**Nombre del proyecto:** UnderFechas  
**Descripción breve:** Plataforma web que centraliza información sobre artistas de la escena musical under, sus próximas fechas de show y permite contactarse para agendar nuevas presentaciones.  
**Número del grupo:** Grupo 14  
**Nombre del equipo:** Depo

### 👥 Integrantes del equipo
- Valentin Belone
- Tiago Pescara

---

## 🚀 Tecnologías Utilizadas

- **Next.js 16.2.3** - Framework de React
- **Tailwind CSS** - Framework de estilos
- **JavaScript** - Lenguaje de programación
- **React 19.2.4** - Biblioteca de UI

---

## Requisitos Cumplidos

### 1. Configuración de Rutas
- **Rutas base implementadas:**
  - `/` - Página principal
  - `/artistas` - Listado de artistas
  - `/contacto` - Formulario de contacto
  - `/admin` - Panel administrativo
- **Ruta anidada:** `/admin` con layout propio
- **Ruta dinámica:** `/artistas/[slug]` para perfiles individuales
- **Navegación:** Uso del componente `Link` de Next.js en todos los enlaces

### 2. Configuración de Layouts
- **Barra de navegación:** Fija, con logo y menú principal
- **Pie de página:** Con información del proyecto y branding
- **Layout anidado:** Layout específico para rutas de administración


## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
# Clonar el repositorio
git clone [URL-del-repositorio]
cd under-nextjs

# Instalar dependencias
npm install


### Ejecución

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
http://localhost:3000

### Construcción para producción
```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

---

## 📁 Estructura del Proyecto

```
src/app/
├── layout.js              # Layout principal con navbar y footer
├── page.js                # Página de inicio
├── artistas/
│   ├── page.js           # Listado de artistas
│   └── [slug]/
│       └── page.js       # Perfil dinámico de artista
├── contacto/
│   └── page.js           # Formulario de contacto
└── admin/
    ├── layout.js         # Layout anidado de administración
    ├── page.js           # Panel principal
    ├── nuevo-artista/
    │   └── page.js       # Formulario nuevo artista
    └── nueva-fecha/
        └── page.js       # Formulario nueva fecha
```

---

Este proyecto fue desarrollado como parte del Trabajo Práctico N° 1 de la materia Programacion III.