# System Architecture - Editorial Portfolio

This document outlines the technical decisions, architectural patterns, and structural organization of the Editorial Portfolio project.

## 1. Design Philosophy
The architecture is guided by three core principles:
* **Separation of Concerns**: Decoupling content (data) from presentation (HTML/CSS).
* **Performance First**: Utilizing vanilla technologies to ensure near-instant loading speeds (LCP < 2.5s).
* **Scalability**: Ensuring that adding new "Build" projects or "Think" articles requires zero changes to the core UI logic.

---

## 2. Tech Stack Selection & Justification

| Technology | Role | Justification |
| :--- | :--- | :--- |
| **HTML5 / CSS3** | Core Structure | Provides the leanest possible foundation for a high-end, typography-driven "Editorial" aesthetic. |
| **Vanilla JavaScript** | Logic & Interactivity | Chosen over heavy frameworks (React/Vue) to maintain a zero-dependency footprint and demonstrate fundamental engineering skills. |
| **CSS Variables** | Design System | Enables a centralized "Editorial" theme (colors, fonts, spacing) for consistent branding across all sub-pages. |
| **SVG (Inline)** | Interactive Map | A lightweight alternative to Mapbox/Leaflet, ensuring the "Explore" page remains fast and responsive on mobile devices. |
| **Vercel** | Infrastructure | Provides professional-grade CI/CD and edge network distribution for global access. |

---

## 3. Project Directory Structure

The repository is organized to reflect a modular, product-centric mindset:

```text
my-portfolio/
├── index.html          # Identity / Hero Entry(Contains Contact Modal HTML)
├── build.html          # Case Study Gallery (Product & Marketing)
├── think.html          # Intellectual Depth (Research & Papers)
├── explore.html        # International Narrative (SVG Map)
├── css/
│   ├── style.css       # Global Design System (Tokens & Typography)
│   └── components.css  # Scoped styles for Modals（Contacts), Cards, and Tooltips
├── js/
│   ├── data.js         # The "Source of Truth" (JSON-like data objects)
│   ├── main.js         # UI Controllers (DOM Manipulation & Modals)
│   └── map.js          # Coordinate-to-SVG mapping logic
└── assets/             # Optimized Media (WebP images, PDF reports)

