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
  - `/fechas` - Listado de fechas/shows
  - `/buscar` - Búsqueda de artistas en Discogs API
  - `/contacto` - Formulario de contacto
  - `/admin` - Panel administrativo
- **Rutas anidadas:** `/admin/nuevo-artista`, `/admin/nueva-fecha`
- **Ruta dinámica:** `/artistas/[slug]` para perfiles individuales
- **Navegación:** Uso del componente `Link` de Next.js en todos los enlaces

### 2. Configuración de Layouts
- **Barra de navegación:** Fija, con logo y menú principal (componente reutilizable)
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
├── fechas/
│   ├── page.js           # Listado de fechas
│   └── FechasClient.jsx  # Cliente para renderizar fechas
├── buscar/
│   └── page.js           # Búsqueda de artistas en Discogs API
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

src/components/
├── ArtistaCard.jsx       # Tarjeta de artista (Server Component)
├── FechaCard.jsx         # Tarjeta de fecha (Server Component)
├── FavButton.jsx         # Botón de favoritos (Client Component)
├── SearchBar.jsx         # Barra de búsqueda (Client Component)
├── DiscogsCard.jsx       # Tarjeta de resultados de Discogs (Server Component)
└── Navbar.jsx            # Barra de navegación (Client Component)

src/app/
├── ProximasFechasClient.jsx  # Cliente para mostrar próximas fechas
├── artistas/
│   └── ArtistasClient.jsx    # Cliente para filtrar artistas
└── context/
    └── ArtistasContext.jsx   # Contexto global con localStorage

src/lib/
└── data.js                # Datos iniciales de artistas y fechas

src/app/api/
└── discogs/
    └── route.js          # API Route proxy para Discogs API

---

Este proyecto fue desarrollado como parte del Trabajo Práctico N° 1 de la materia Programacion III.