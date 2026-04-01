# Starter Kit Pro

Este es un starter kit de alto rendimiento diseñado para construir landing pages con una filosofía de **"cero tolerancia a la deuda técnica"**.

## Tecnologías Principales
- **Vite** + **React** + **TypeScript**
- **Tailwind CSS**

## Calidad y Mantenibilidad
- Configurado con reglas estrictas de `ESLint` y `Prettier`.
- Integración nativa con `TypeDoc` para documentación de código.

## CI/CD Pipeline
Este proyecto implementa dos flujos de trabajo clave en GitHub Actions:

### 1. Integración Continua (CI Pipeline)
Ubicado en `.github/workflows/ci.yml`.
- Se detona automáticamente en cada `push` o `pull_request` hacia la rama `main`.
- Realiza: Instalación de dependencias, chequeo de Linter, Type checking estricto, pruebas con **Vitest** y finalmente construye el artefacto.

### 2. Despliegue Continuo (CD)
Ubicado en `.github/workflows/deploy.yml`.
- Se ejecuta **solamente si** el `CI Pipeline` ha finalizado con éxito ("Completed" state) sobre la rama `main`.
- Automáticamente despliega la carpeta `dist/` a través de FTP apuntando a la raíz del servidor gracias al hook `SamKirkland/FTP-Deploy-Action`.

> **Nota para el equipo de Infraestructura:** Asegúrate de que los Secrets `FTP_SERVER`, `FTP_USER` y `FTP_PASSWORD` estén configurados en el repositorio.

## Scripts de Desarrollo
- `npm run dev`: Levanta el entorno de servidor en local.
- `npm run build`: Compila para producción en `dist/`.
- `npm run test`: Ejecuta los Smoke Tests unitarios de manera única gracias a Vitest y Testing Library.
- `npm run docs`: Inspecciona el código (usando interfaces y funciones tipadas) y expone la documentación TSDoc formateada en la carpeta `docs/`.
