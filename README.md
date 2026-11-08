# DMD Punto de Venta (proyecto aparte)

Proyecto standalone del Punto de Venta de DMD, extraído del sitio oficial
(www.dmdmx.dev) con el mismo patrón que el creador de páginas
(dmd-paginas-web-ia), el login (dmd-login) y Canva (dmd-canva):
código aparte, despliegue propio en Vercel y enlace desde el menú oficial.

- Producción: https://dmd-pos.vercel.app
- Entrada principal: `index.html` (copia de `punto-de-venta.html`)

## Archivos

- `index.html` / `punto-de-venta.html` — Plantillas de Punto de Venta
  para 20 Giros · 400 Estilos (catálogo, vista previa y lanzamiento de demos).
- `pos-boutique-luxury.html` — TkPOS Luxury Boutique & Haute Joaillerie.
- `pos-cajero-compacto.html` — TkPOS Modo Cajero Rápido / Supermercado.
- `pos-pantalla-tactil.html` — TkPOS Diseño Pantalla Táctil / Kiosco.
- `pos-retro-vintage.html` — TkPOS Vintage Retro Terminal (Paper Edition).
- `plantillas/templates.js` — Datos de las 20 plantillas de giros
  (BUSINESS_TEMPLATES) y estilos; es lo que cargan las 5 páginas.
- `plantillas/*.json` — Misma información por giro, en un archivo por giro
  (fuente de datos original; las páginas usan templates.js, no los JSON).
- `dmd-patch.js` — Reescribe los enlaces del menú móvil y la barra inferior
  que genera el script oficial para que apunten a www.dmdmx.dev,
  salvo las páginas del POS, que viven aquí.
- `assets/logo-dmd.svg`, `assets/favicon-16x16.png`,
  `assets/favicon-32x32.png`, `favicon.ico`, `apple-touch-icon.png` —
  copias locales de los favicons y el logo.

## Cómo funciona

Todo corre en el navegador, sin servidor ni API ni claves:

- El catálogo y las demos usan `plantillas/templates.js` (datos locales).
- Al lanzar una demo, la página guarda los productos y ajustes del giro
  en `localStorage` (`pos_products`, `pos_settings`, `pos_sales`,
  `pos_cash_movements`, `pos_current_giro`) y abre la demo TkPOS
  correspondiente en una pestaña nueva.
- Las fotos de los giros son de Unsplash (URLs externas).
- Tailwind y Lucide se cargan desde sus CDN públicos.

## Límites conocidos

- `style.css` (172 KB) y `script.js` (244 KB) se cargan desde
  `https://www.dmdmx.dev`, no están copiados aquí: no caben en una
  sola subida y `script.js` es un solo bloque que no se puede partir
  sin romper su lógica (ahí viven `openPremiumModal`, `addToCart`,
  `showDmdToast`, el menú móvil y la barra inferior que usa esta página).
  Si algún día se quiere un paquete 100% autocontenido, habría que
  refactorizar `script.js` en módulos.
- La membresía Premium y el carrito usan `localStorage` del navegador
  (igual que en la oficial); no hay autenticación real de servidor.
- No está conectado a Git (la GitHub App no tiene permiso para crear
  repositorios, 403). Las actualizaciones requieren repetir la subida
  de archivos a Vercel o crear el repo a mano.
- No se probó el flujo completo en un navegador real (generar demo,
  cobrar en caja, exportar); solo se verificó HTTP, títulos y presencia
  de los scripts y datos.

## Pendientes

- Enlazarlo desde el menú de la oficial (como se hizo con el creador
  de páginas, el login y Canva): requiere un PR en DMD-BC/DMD y que
  Axel lo fusione.
