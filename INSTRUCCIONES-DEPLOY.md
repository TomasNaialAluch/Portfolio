# 🚀 Instrucciones para Corregir el Error 404

## Problema Actual
GitHub Pages está intentando servir los archivos fuente directamente desde la rama `main`, pero un proyecto Vite necesita ser **construido** primero antes de desplegarse.

## Solución (Pasos a Seguir)

### Paso 1: Cambiar la Configuración de GitHub Pages

1. Ve a tu repositorio en GitHub: https://github.com/TomasNaialAluch/Portfolio
2. Haz clic en la pestaña **"Settings"** (Configuración)
3. En el menú lateral izquierdo, haz clic en **"Pages"**
4. En la sección **"Build and deployment"**, verás que dice **"Source: Deploy from a branch"**
5. **Cambia esto** haciendo clic en el dropdown de "Source"
6. Selecciona **"GitHub Actions"** en lugar de "Deploy from a branch"
7. **NO es necesario cambiar nada más** - deja los demás campos como están
8. El sistema guardará automáticamente

### Paso 2: Ejecutar el Workflow Manualmente (si es necesario)

Si el workflow no se ejecuta automáticamente después de cambiar la configuración:

1. Ve a: https://github.com/TomasNaialAluch/Portfolio/actions
2. Si no ves ningún workflow ejecutándose, haz clic en **"Deploy to GitHub Pages"** en la lista de workflows
3. Haz clic en el botón **"Run workflow"** (ubicado en la parte superior derecha)
4. Asegúrate de que la rama sea **"main"**
5. Haz clic en **"Run workflow"** verde
6. Espera 2-5 minutos a que termine

### Paso 3: Verificar que Funcionó

Después de que el workflow termine (verás un checkmark verde ✓):

1. Abre tu navegador en **modo incógnito** (Ctrl+Shift+N) o **limpia la caché** (Ctrl+Shift+Delete)
2. Visita: https://tomasnaialaluch.github.io/Portfolio/
3. Deberías ver tu portfolio completo sin errores 404

### Paso 4: Verificar en la Consola del Navegador

1. Abre las herramientas de desarrollo (F12)
2. Ve a la pestaña **Console**
3. **NO deberías ver** el error: `Failed to load src/main.jsx:1 resource: the server responded with a status of 404`
4. Si todo está bien, no verás errores relacionados con archivos no encontrados

## ¿Por qué sucede esto?

- **"Deploy from a branch"**: GitHub Pages sirve los archivos directamente desde tu rama. Esto funciona para sitios HTML estáticos simples, pero **NO funciona** para proyectos Vite/React que necesitan ser compilados.

- **"GitHub Actions"**: Ejecuta el workflow que construye tu proyecto (npm run build) y luego despliega los archivos compilados (carpeta `dist/`). Esto es lo que necesitas para proyectos Vite.

## Verificación Técnica

El `index.html` que GitHub Pages debe servir (después del build) debería tener:
```html
<script type="module" crossorigin src="/Portfolio/assets/index-XXXXX.js"></script>
<link rel="stylesheet" crossorigin href="/Portfolio/assets/index-XXXXX.css">
```

**NO debería tener:**
```html
<script type="module" src="/src/main.jsx"></script>
```

## Si el Problema Persiste

1. Verifica que el workflow terminó exitosamente en: https://github.com/TomasNaialAluch/Portfolio/actions
2. Si el workflow falló (ícono rojo), haz clic en él y revisa los logs para ver qué salió mal
3. Asegúrate de que la configuración de Pages muestra **"Source: GitHub Actions"**
4. Espera unos minutos después del cambio, ya que GitHub Pages puede tardar en actualizar

## Estado Actual del Proyecto

✅ Workflow de GitHub Actions configurado correctamente  
✅ Configuración de Vite con base path `/Portfolio/` correcta  
✅ Build local funciona correctamente  
⏳ **NECESITAS**: Cambiar la configuración de GitHub Pages a "GitHub Actions"



