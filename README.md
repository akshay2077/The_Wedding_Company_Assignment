🎓 Interactive Quiz Application

A beautiful, responsive, and animated quiz application built with React + TypeScript + TailwindCSS.
Designed with smooth UI, animations, progress tracking, and an engaging final score screen.

🚀 Live Demo

🔗 Live URL: (Add your Vercel/Netlify link here)
🔗 GitHub Repository: https://github.com/akshay2077/The_Wedding_Company_Assignment

📸 Screenshots
⭐ Quiz Start Screen
![WhatsApp Image 2025-12-12 at 16 38 07_613bd22f](https://github.com/user-attachments/assets/9eaa2a62-1a4b-4aa7-bac5-08561ca40f6e)


⭐ Question Screen
![WhatsApp Image 2025-12-12 at 16 32 23_7614742d](https://github.com/user-attachments/assets/9a100a0f-9111-4b70-81cb-62bfd1fd3ceb)
![WhatsApp Image 2025-12-12 at 16 32 11_7b138326](https://github.com/user-attachments/assets/63d39549-89d9-4a84-8718-26038ba33292)
![WhatsApp Image 2025-12-12 at 16 32 35_add774f3](https://github.com/user-attachments/assets/c25d0094-05eb-4841-a00a-08c16cbe3a1c)



⭐ Final Score Screen
![WhatsApp Image 2025-12-12 at 16 36 45_d15dcb69](https://github.com/user-attachments/assets/33da678d-1a32-4332-bbff-33c9dd9721a3)


🧠 Features
✔ Clean & Modern UI

Soft gradients, glowing shadows, rounded cards

Smooth animations and delightful micro-interactions

✔ Progress Bar

Dynamic progress indicator for every question

✔ Interactive Options

Options highlight on selection

Smooth hover + click animations

✔ Paw Animation on First Question

Cute paw GIF & “Best of Luck!” bubble appears only on the first question

✔ Auto-Animated Score Counter

Score animates from 0 → Final percentage

✔ Fully Responsive

Works seamlessly on desktop, tablet, and mobile

🛠 Tech Stack
Technology	Purpose
React + TypeScript	Core application
TailwindCSS	Styling & layout
Vite	Fast frontend build tool
GitHub Pages / Vercel	Deployment
📂 Folder Structure
src/
 ├── assets/
 │    └── paw.gif
 ├── components/
 │    ├── OptionButton.tsx
 │    ├── QuestionCard.tsx
 │    └── ScoreScreen.tsx
 ├── pages/
 │    └── Quiz.tsx
 ├── shared/
 │    ├── TitleSection.tsx
 │    └── ProgressBar.tsx
 ├── data/
 │    └── quizData.ts
 ├── index.css
 ├── App.tsx
 └── main.tsx

▶️ How to Run the Project Locally
1. Clone the Repository
git clone https://github.com/akshay2077/The_Wedding_Company_Assignment.git
cd The_Wedding_Company_Assignment

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev

4. Build for Production
npm run build

🌐 Deployment Instructions (Vercel)

Go to https://vercel.com

Click New Project

Import your GitHub repository

Choose Vite + React

Set Build Command:

npm run build


📘 Assumptions Made

Quiz questions are static and stored locally

User score resets only when "Start Again" is clicked

No backend needed for this assignment

⏱ Time Spent on This Assignment

Approx: 8 – 10 hours, including:

UI layout and animations

State management logic

TailwindCSS styling

Score animation

Paw animation logic

Deployment setup
