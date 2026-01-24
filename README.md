# Peruvian Amazonite Wholesale - Landing Page

A high-performance B2B landing page designed to connect international wholesale buyers directly with Peruvian Amazonite mines. Built with modern web technologies focusing on speed, accessibility, and user experience.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Astro](https://img.shields.io/badge/astro-v5.0-orange.svg)
![React](https://img.shields.io/badge/react-v19-blue.svg)
![Tailwind](https://img.shields.io/badge/tailwindcss-v4.0-38bdf8.svg)

## 🚀 Key Features

-   **⚡ High Performance**: Built on [Astro](https://astro.build) for zero-JS by default frontend architecture.
-   **🎨 Modern UI/UX**: Styled with [Tailwind CSS 4](https://tailwindcss.com) and [Shadcn UI](https://ui.shadcn.com/) components.
-   **📝 Robust Forms**: Contact form with strict validation using **Zod** and **React Hook Form**.
    -   Dynamic country selection.
    -   Smart grade selection logic.
    -   Real-time feedback with **Sonner** toasts.
-   **💎 Interactive Showcase**: Components to display product grading (AAA, AA, A) and mine information.
-   **🌙 Dark/Light Mode**: Fully themable using `next-themes`.

## 🛠️ Tech Stack

-   **Framework**: [Astro](https://astro.build/)
-   **UI Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Components**: [Radix UI](https://www.radix-ui.com/) (Headless)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
-   **Utilities**: `clsx`, `tailwind-merge`, `date-fns`

## 📂 Project Structure

```text
/
├── public/            # Static assets (logos, images)
├── src/
│   ├── components/    # UI Components (Header, Hero, Forms, etc.)
│   │   ├── ui/        # Reusable Shadcn UI components
│   ├── data/          # Static data (e.g., countries.json)
│   ├── layouts/       # shared layouts
│   ├── pages/         # Astro pages (routing)
│   └── styles/        # Global styles
└── package.json       # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`                |

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/pav-dev98/landing-pa.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run development server**:
    ```bash
    npm run dev
    ```

## 📄 License

Proprietary Software. Internal use only.
