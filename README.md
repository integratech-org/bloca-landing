<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/integratech-org/bloca-landing">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BLOCA Landing</h3>

  <p align="center">
    Marketing Website for BLOCA System
    <br />
    Product Showcase • Documentation • Contact • Resources
    <br />
    <a href="https://github.com/integratech-org/bloca-landing"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/integratech-org/bloca-landing/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/integratech-org/bloca-landing/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#related-projects">Related Projects</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![BLOCA Landing Banner][product-banner]](https://github.com/integratech-org/bloca-landing)

**BLOCA Landing** is the public-facing marketing website for the BLOCA (Batch-Level Optimization through Compaction Analytics) system. Built with Next.js 16 and React, it serves as the primary entry point for potential customers, investors, and researchers interested in learning about the BLOCA ecosystem.

The website features product overviews, technical specifications, case studies, documentation links, and contact information. It's designed with performance and SEO in mind, using static site generation for fast load times and excellent search engine visibility. The site includes animations, responsive design with Tailwind CSS, and a dark mode toggle for accessibility.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next.js][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript.org]][TypeScript-url]
* [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
* [![Lucide][Lucide.dev]][Lucide-url]
* [![Docker][Docker.com]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is a modern Next.js application that can be deployed as a static site or containerized with Docker.

### Prerequisites

* **Software:**
  - Node.js 20 or higher
  - [Bun](https://bun.sh/) package manager (recommended) or npm
  - Docker and Docker Compose (for containerized deployment)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/integratech-org/bloca-landing.git
   cd bloca-landing
   ```

2. Install dependencies
   ```sh
   bun install
   ```

3. Create environment configuration (if needed)
   ```sh
   cp .env.example .env.local
   # Edit .env.local with your specific configuration:
   # - Contact form submission endpoint
   # - Analytics tracking IDs
   # - Social media links
   ```

4. Start the development server
   ```sh
   bun dev
   ```

5. Install pre-commit hooks (for development)
   ```sh
   bun postinstall
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Development

Start the development server with hot reload:

```sh
bun dev
```

The site will be available at http://localhost:3000/

### Production Build

Build the application for production:

```sh
bun build
```

The optimized static site will be created in the `.next/` directory.

### Static Export

Export as a fully static site:

```sh
bun build && bun export
```

Static files will be generated in the `out/` directory and can be served by any static hosting service.

### Docker Deployment

Build and run with Docker Compose:

```sh
docker compose up -d
```

The containerized site will be available at http://localhost:3000/

### Common Operations

```sh
# Run linting
bun lint

# Fix linting issues
bun lint:fix

# Run TypeScript type checking
bun ts-check

# Format code with Prettier
bun format

# Check code formatting
bun prettier:check
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- FEATURES -->
## Features

### Marketing & Content
- **Hero Section**: Eye-catching introduction with product tagline and call-to-action buttons
- **Product Overview**: High-level explanation of BLOCA's value proposition and key benefits
- **Technical Specifications**: Detailed specs for hardware components and software features
- **Case Studies**: Real-world applications and success stories (if available)
- **Pricing Information**: Transparent pricing tiers or contact sales CTA

### Documentation & Resources
- **Getting Started Guide**: Quick start instructions for new users
- **API Documentation Links**: Direct links to BLOCA API, ML, and other technical docs
- **FAQ Section**: Answers to common questions about the system
- **Download Resources**: Brochures, whitepapers, and technical diagrams (PDF)

### User Engagement
- **Contact Form**: Lead capture form with form validation
- **Newsletter Signup**: Email subscription for product updates
- **Social Media Integration**: Links to Facebook, LinkedIn, GitHub organization
- **Testimonials**: Customer quotes and ratings (if available)

### Performance & SEO
- **Static Site Generation**: Pre-rendered pages for instant load times
- **SEO Optimization**: Metadata, structured data, and Open Graph tags
- **Responsive Design**: Mobile-first layout that adapts to all screen sizes
- **Image Optimization**: Next.js Image component for optimized image delivery
- **Accessibility**: WCAG 2.1 AA compliance with semantic HTML and ARIA labels

### Design & UX
- **Dark Mode**: System-aware theme with manual toggle using next-themes
- **Smooth Animations**: Subtle animations with tw-animate-css
- **Modern UI Components**: shadcn-inspired components with class-variance-authority
- **Lucide Icons**: Consistent icon library for visual clarity
- **Tailwind CSS**: Utility-first styling for rapid development

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- RELATED PROJECTS -->
## Related Projects

BLOCA Landing is part of the **BLOCA (Batch-Level Optimization through Compaction Analytics)** ecosystem:

* **[bloca-api](https://github.com/integratech-org/bloca-api)** - Cloud REST API backend for data persistence and business logic
* **[bloca-edge](https://github.com/integratech-org/bloca-edge)** - IoT edge hub running on Raspberry Pi for real-time telemetry
* **[bloca-ml](https://github.com/integratech-org/bloca-ml)** - Machine learning service for compressive strength prediction and defect classification
* **[bloca-admin](https://github.com/integratech-org/bloca-admin)** - Web admin dashboard for system oversight
* **[bloca-mobile](https://github.com/integratech-org/bloca-mobile)** - Mobile application for machine operators
* **[bloca-firmware](https://github.com/integratech-org/bloca-firmware)** - ESP32 firmware for sensor and actuator control
* **[IntegraTech Organization](https://github.com/integratech-org)** - View all BLOCA projects and documentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

IntegraTech - [Facebook](https://www.facebook.com/profile.php?id=61592806334500) - integratech1@outlook.com

Project Link: [https://github.com/integratech-org/bloca-landing](https://github.com/integratech-org/bloca-landing)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/integratech-org/bloca-landing.svg?style=for-the-badge
[contributors-url]: https://github.com/integratech-org/bloca-landing/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/integratech-org/bloca-landing.svg?style=for-the-badge
[forks-url]: https://github.com/integratech-org/bloca-landing/network/members
[stars-shield]: https://img.shields.io/github/stars/integratech-org/bloca-landing.svg?style=for-the-badge
[stars-url]: https://github.com/integratech-org/bloca-landing/stargazers
[issues-shield]: https://img.shields.io/github/issues/integratech-org/bloca-landing.svg?style=for-the-badge
[issues-url]: https://github.com/integratech-org/bloca-landing/issues
[product-banner]: images/banner.png

<!-- Technology Badges -->
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript.org]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Lucide.dev]: https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-url]: https://lucide.dev/
[Docker.com]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
