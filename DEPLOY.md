# Guía de Despliegue - GitHub Pages

## 🔗 Link del Portfolio
**https://tomasnaialaluch.github.io/Portfolio/**

## 📋 Pasos para Desplegar

### 1. Configurar el Repositorio

Asegúrate de que tu repositorio esté en GitHub:
```bash
git remote add origin https://github.com/TomasNaialAluch/Portfolio.git
git branch -M main
git push -u origin main
```

### 2. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/TomasNaialAluch/Portfolio`
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Source", selecciona **GitHub Actions**
5. Guarda los cambios

### 3. Hacer Push del Código

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 4. Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás un workflow llamado "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (tiene un ícono verde ✓)
4. Tu sitio estará disponible en: **https://tomasnaialaluch.github.io/Portfolio/**

## 🔄 Actualizaciones Automáticas

Cada vez que hagas `git push` a la rama `main`, GitHub Actions:
- Instalará las dependencias
- Construirá el proyecto
- Lo desplegará automáticamente en GitHub Pages

## ⚠️ Notas Importantes

- El primer despliegue puede tardar unos minutos
- Asegúrate de que el workflow tenga permisos de escritura en Pages
- Si hay errores, revisa la pestaña "Actions" para ver los logs

## 🐛 Solución de Problemas

Si el sitio no carga:
1. Verifica que el workflow se haya completado exitosamente
2. Espera 5-10 minutos después del despliegue
3. Limpia la caché del navegador (Ctrl+F5)
4. Verifica que la URL sea exactamente: `https://tomasnaialaluch.github.io/Portfolio/`

