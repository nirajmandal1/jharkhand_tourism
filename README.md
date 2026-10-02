# 🌿 Jharkhand Tourism - Eco & Cultural Travel Web Application

An interactive, modern web platform designed to promote sustainable tourism, rich tribal culture, sacred heritage, and breathtaking natural wonders of **Jharkhand, India** — the *"Land of Forests"*.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Key Features

### 1. 🏞️ Explore Destinations
- Browse popular attractions: **Netarhat** (*Queen of Chotanagpur*), **Betla National Park**, **Hundru Falls**, and **Deoghar Baidyanath Temple**.
- Real-time **search and category filter** by name, location, or travel type (Hill Station, Wildlife, Waterfall, Religious).
- Ratings, highlights, and quick access to virtual tours and trip planning.

### 2. 🎥 Virtual Tours & Video Showcase
- **Full HD Video Tour:** Built-in video player showcasing the natural landscapes and culture of Jharkhand.
- **360° Virtual Tours:** Interactive modal previews of top tourist spots.
- **AR Cultural Experiences:** Augmented reality previews for tribal art recognition, wildlife spotting, and historical site timelines.

### 3. 🤖 AI Trip Planner
- Customized itinerary generator based on:
  - Travel dates & number of travelers.
  - Budget range (`₹5,000` to `₹50,000+`).
  - Accommodation preferences (Eco-resorts, Homestays, Hotels).
  - Selected interests (Nature, Wildlife, Culture, Adventure, Photography, Spirituality).
  - Optional add-ons (Local guide, Professional photographer).
- Generates structured day-by-day travel plans instantly.

### 4. 🎨 Local Culture, Handicrafts & Cuisine
- **Tribal Heritage:** Learn about the Santhal, Oraon, and Munda communities.
- **Indigenous Arts:** Showcase of Sohrai wall art, bamboo crafts, and wood carvings.
- **Authentic Cuisine:** Discover local specialties like *Dhuska*, *Ghugni*, *Rugra* (wild mushroom curry), *Bamboo Shoot curry*, and *Handia*.

### 5. 📅 Events & Festivals
- Information on traditional celebrations including **Sarhul Festival**, **Karam Festival**, and wildlife photography workshops.
- Event pass booking simulations and seasonal highlight calendar.

### 6. 👥 Community Connect
- Travel feed where visitors can share experiences, tips, and photos.
- Working like counters and interactive post-sharing form.
- Trending hashtags (`#HundruFalls`, `#NetarhatSunset`, `#BetlaWildlife`).

### 7. 💬 AI Tourism Assistant (Chatbot)
- Floating assistant providing quick travel tips in simple English, Hindi, and regional context.
- Instant answers about routes, best time to visit, and local recommendations.

### 8. 🚨 Emergency Tourist SOS
- Quick-access emergency dialog with direct click-to-call links:
  - **Tourist Helpline:** `1363` (Toll-Free)
  - **Police Emergency:** `100` / `112`
  - **Medical Emergency:** `108`

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) with SWC
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI & Icons:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Styling:** Vanilla CSS & Tailwind utility classes

---

## 📂 Project Structure

```text
React_app/
├── public/                 # Static assets (logo1.png, favicon)
├── src/
│   ├── components/
│   │   ├── figma/          # ImageWithFallback helper component
│   │   ├── material/       # Local media assets (video.mp4, deogharImg.jpg)
│   │   ├── ui/             # Reusable UI components (buttons, cards, dialogs, tabs)
│   │   └── SearchBar.tsx   # Standalone search component
│   ├── styles/             # Global CSS styles
│   ├── App.tsx             # Main application layout and page views
│   ├── index.css           # Core styling and Tailwind utilities
│   ├── main.tsx            # React application entry point
│   └── vite-env.d.ts       # Module declarations for media & Vite client
├── index.html              # HTML shell
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration with path aliases
└── vite.config.ts          # Vite build and development configuration
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/nirajmandal1/jharkhand_tourism.git
cd jharkhand_tourism/React_app
```

*(Or navigate to `React_app` if already downloaded locally).*

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) in your browser.

### 4. Build for Production
```bash
npm run build
```

This creates an optimized production bundle in the `build/` folder.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles TypeScript and creates an optimized production bundle in `build/` |

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome!
1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m "Add NewFeature"`
4. Push to the branch: `git push origin feature/NewFeature`
5. Open a Pull Request.

---

## 👤 Author

* **Niraj Mandal** - [@nirajmandal1](https://github.com/nirajmandal1)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).