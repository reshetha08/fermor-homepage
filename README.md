# Fermor — Modern Financial Clarity (Frontend Assignment)

Hi there! 👋 Welcome to my submission for the Fermor frontend assignment. I've designed and built a responsive landing page focused on making personal finance feel intuitive, transparent, and approachable.

- **Live Demo:** [https://fermor-homepage-psi.vercel.app/](https://fermor-homepage-psi.vercel.app/)
- **Repository:** [https://github.com/reshetha08/fermor-homepage](https://github.com/reshetha08/fermor-homepage)

---

## 🧠 Product Thinking & Design Decisions

When thinking about how to approach the Fermor homepage, my main goal was to strike a perfect balance. Finance platforms often fall into two extremes: they are either intimidating and overly complex, or they look a bit too generic. 

Here is my thought process behind the layout, design, and execution:

- **Why the Dark Theme?** I went with a deep, premium dark theme (`#0a0f1c` base). Dark mode naturally conveys security, focus, and a modern software aesthetic. It’s also much easier on the eyes, which is important for a platform where users might spend time reviewing their wealth and habits.
- **Strategic Use of Color:** I used a vibrant, trustworthy blue for the primary accents, gradients, and buttons. Blue is the universal color of trust in the financial sector, and using it selectively helps guide the user's eye straight to the primary calls to action without making the UI feel cluttered.
- **Subtle, Polished Animations:** Instead of heavy, chaotic motion, I implemented a custom `IntersectionObserver` hook to handle scroll animations. Elements gently fade in and slide up exactly when they enter the viewport. This makes the interface feel highly polished, modern, and responsive without distracting from the actual content.
- **Clear Information Architecture:** I structured the page to tell a story: starting with a strong, jargon-free value proposition in the Hero, moving to a live market ticker to build immediate context, and then detailing the features simply and clearly. 

---

## 🛠️ Tech Stack Used

- **React:** Built using functional components and hooks (`useState`, `useEffect`, `useRef`).
- **Vite:** Chosen for an incredibly fast and modern local development environment.
- **Tailwind CSS:** Used for all styling. It allowed me to rapidly build a custom design system and ensure everything is mobile-first and fully responsive.
- **Lucide React:** Used for clean, consistent, and accessible iconography.

---

## 💻 Setup Instructions

If you would like to run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/reshetha08/fermor-homepage.git](https://github.com/reshetha08/fermor-homepage.git)
   cd fermor-homepage
