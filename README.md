# React Portfolio

A fully functional, responsive, and modern React portfolio website built with Tailwind CSS and Framer Motion.

## Features

- **Responsive Design**: Fully optimized for mobile and desktop.
- **Modern UI**: Clean theme with smooth Framer Motion animations.
- **Navigation**: Easy navigation between sections (Home, About, Skills, Projects, Certification, Contact, Resume).
- **Resume Viewer**: Built-in PDF viewer and download button.
- **Contact**: Contact form and WhatsApp integration.

## Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, Cards, etc.)
- `src/pages`: Page components for each route.
- `src/assets`: Static assets.
- `public`: Public assets like `resume.pdf`.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization

- **Personal Info**: Update `src/pages/About.jsx`, `src/components/Hero.jsx`, and `src/components/Footer.jsx`.
- **Skills**: Update `src/pages/Skills.jsx`.
- **Projects**: Update `src/pages/Projects.jsx`.
- **Certifications**: Update `src/pages/Certification.jsx`.
- **Resume**: Replace `public/resume.pdf` with your actual resume PDF.

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- Vite
