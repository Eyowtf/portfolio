# React Portfolio: Setup Guide

## 1. Requirements
Install Node.js (LTS) from https://nodejs.org, then check in a terminal:

    node -v
    npm -v

## 2. Unzip and install
Unzip this folder, open a terminal inside it, then run:

    npm install

## 3. Run it

    npm run dev

Open the local link shown in the terminal (usually http://localhost:5173).

## 4. Project layout
- `index.html`: page shell (change the `<title>`)
- `public/`: put your photo here (for example `me.jpg`), then set `photo: "/me.jpg"` in `App.jsx`
- `src/`: all your React code

## 5. Add your information
Search your project for square brackets `[ ... ]`. Each one is a place to type
your own info. Start with `App.jsx` (name, title, photo), then go page by page.

| File | What to fill in |
|------|-----------------|
| App.jsx | Full name, title, photo |
| components/Home.jsx | Headline, introduction, fun fact, 3 stats |
| components/Projects.jsx | Project list (titles, descriptions, tech, links, categories) |
| components/About.jsx | About paragraph, skills, education, experience |
| components/Contact.jsx | Email, phone, location, profile links |

## 6. Where each requirement is met
- **4 pages:** Home, Projects, About, Contact (`App.jsx` switches between them).
- **Functional components:** every file in `components/` is one.
- **Props:** `Sidebar`, `StatCard`, `ProjectCard`, `About`, `Home`.
- **State (`useState`):** page switching, menu, filter, tabs, form values.
- **Event handling:** `onClick`, `onChange`, and `onSubmit`.
- **CSS plugin + custom CSS:** Bootstrap grid plus your own `App.css`.

## 7. Submit / deploy (optional)

    npm run build

Upload the `dist` folder to Netlify, Vercel, or GitHub Pages.
