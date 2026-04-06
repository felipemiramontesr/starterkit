# 🛡️ Sentinel StarterKit Pro

[![CI Pipeline](https://github.com/felipemiramontesr/starterkit/actions/workflows/ci.yml/badge.svg)](https://github.com/felipemiramontesr/starterkit/actions/workflows/ci.yml)
[![Documentation Deployment](https://github.com/felipemiramontesr/starterkit/actions/workflows/docs.yml/badge.svg)](https://github.com/felipemiramontesr/starterkit/actions/workflows/docs.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **"Cero Deuda Técnica. Máximo Rendimiento."**
> Un ecosistema Tier-1 diseñado para desplegar landing pages cinematográficas con una gobernanza de software de clase mundial.

---

## 🏛️ Arquitectura y Blueprints
Para una comprensión profunda de la ingeniería detrás de este proyecto, consulte nuestros recursos maestros:

- 📑 **[Documentación Técnica (Live)](https://felipemiramontesr.github.io/starterkit/technical-docs/)** - Portal interactivo generado automáticamente desde el código fuente (TSDoc/JSDoc).
- 🏗️ **[Arquitectura de Sistema (Blueprints)](docs/ARCHITECTURE.md)** - Diagramas Mermaid detallando el flujo de datos y el motor de diseño.

## 🚀 Tecnologías Core
| Frontend Stack | Backend Engine | Devops & QA |
| :--- | :--- | :--- |
| **React 19** + Vite | **Node.js 20** + Express | **Vitest** (Unit Testing) |
| TypeScript (Strict) | Zod (Zero Trust Validation) | ESLint (Tier-1 Rules) |
| Tailwind CSS 4 | Helmet (Security Headers) | GitHub Actions (CI/CD) |

## 🛠️ Comandos Globales (Monorepo)

```bash
# Desarrollo Local
npm run dev          # Iniciar frontend y backend
npm run build        # Compilar para producción (dist/)

# Calidad y Pruebas
npm run test         # Ejecutar suite de pruebas unitarias
npm run lint         # Validar estándares de código y JSDoc
npm run docs:build   # Generar blueprints técnicos locales
```

## 🔐 Gobernanza de Software
Este repositorio implementa una política de **"Zero Warning Build"**:
- **Linting Estricto:** Cada línea de código es validada contra estándares de documentación profesional.
- **Validación Zod:** Blindaje total de entradas de datos en el backend.
- **Deployment Atómico:** Despliegues automatizados vía FTP una vez que todos los controles de calidad son superados.

---

*Desarrollado con pasión por la excelencia técnica.* 💎✨
