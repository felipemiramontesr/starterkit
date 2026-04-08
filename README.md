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

## 🚀 Inicio Rápido (Quick Start)

### 1. Clonación y Dependencias

```bash
git clone https://github.com/felipemiramontesr/starterkit.git
cd starterkit
npm install
```

### 2. Configuración de Entorno

Cree archivos `.env` siguiendo las plantillas (opcional si usa valores por defecto):

```bash
# Backend (.env)
PORT=3000
WEBHOOK_URL=https://discord.com/api/webhooks/...
```

### 3. Lanzamiento en Desarrollo

```bash
npm run dev
```

## 🛠️ Tecnologías Core

| Frontend Stack      | Backend Engine              | Devops & QA               |
| :------------------ | :-------------------------- | :------------------------ |
| **React 19** + Vite | **Node.js 20** + Express    | **Vitest** (Unit Testing) |
| TypeScript (Strict) | Zod (Zero Trust Validation) | ESLint (Tier-1 Rules)     |
| Tailwind CSS 4      | Helmet (Security Headers)   | GitHub Actions (CI/CD)    |

## 🧪 Estrategia de Calidad (QA)

Este proyecto implementa una cobertura de pruebas exhaustiva y una gobernanza de código estricta:

- **Tests Unitarios:** Cobertura total de componentes UI y lógica de API.
- **Linting "Grado Militar":** Configuración de ESLint que exige JSDoc profesional en cada función pública.
- **Validación Zod:** Blindaje total de la capa de transporte de datos.
- **Prettier:** Formateo consistente y automático en todo el monorepo.

## 🔐 Despliegue Automatizado

El pipeline de **GitHub Actions** se encarga de:

1. Validar estándares de código (Linting).
2. Ejecutar la suite completa de pruebas (Testing).
3. Compilar los assets optimizados (Build).
4. Desplegar de forma atómica vía **LFTP** a Hostinger.

---

_Desarrollado con pasión por la excelencia técnica por el equipo de Google DeepMind Advanced Agentic Coding._ 💎✨
