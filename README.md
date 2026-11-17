# Digital Clock

A simple, modern, and fully responsive digital clock that I developed to practice **React** and **CSS**. The goal 
of this project was to create a clean interface that displays the time—updated to the second—and the full date, 
adapting perfectly to both mobile phones and computers.

## Features

* **Real-time time:** Automatically updates every second using the `useState` and `useEffect` hooks.
* **Formatted date:** Displays the day of the week, day, and month automatically formatted.
* **Responsive Design:** Built with flexible units (`clamp`, `rem`, `vw`, and `dvh`) to ensure readability on any screen size, including landscape mode on mobile phones.
* **Dark Theme:** Minimalist interface with contrast that is easy on the eyes.

## Technologies Used

* **React** (`useState` and `useEffect` hooks)
* **Vite** (Development environment)
* **CSS3** (Flexbox, Media Queries, and responsive features)

## How to Change the Language or Time Zone

If you want to set the clock to English or to the time zone of your current location, you just need to change two lines in the `src/App.jsx` file:

1. **To change the language to English (US or UK):**
   Replace `‘pt-PT’` with `‘en-US’` (12-hour AM/PM format) or `‘en-GB’` (24-hour format) in the `toLocaleTimeString` and `toLocaleDateString` functions.

2. **To set a specific time zone:**
   Add the `timeZone` property to the time options:
   ```jsx
   const formattedTime = time.toLocaleTimeString(‘en-GB’, {
     timeZone: ‘Europe/London’, // You can change this to ‘America/New_York’, ‘Europe/Lisbon’, etc.
     hour: ‘2-digit’,
     minute: ‘2-digit’,
     second: ‘2-digit’,
   });
   ```
   *(Note: By default, JavaScript automatically uses the time and time zone configured on the user’s device).*

## How to run the project locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open the link shown in the terminal (usually `http://localhost:5173`) in your browser.

## What I Learned

As a programming student, this exercise helped me solidify my understanding of state management and lifecycles in React (such as clearing intervals with `clearInterval` to prevent memory leaks), manipulating native dates in JavaScript, and building responsive layouts without relying on external CSS frameworks.
