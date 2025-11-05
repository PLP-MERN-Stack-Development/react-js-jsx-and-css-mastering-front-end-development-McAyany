
# React + Vite + Tailwind CSS Assignment

## 📖 Overview
This project is a **React.js application** built using **Vite** and **Tailwind CSS**, covering the following major concepts:
- Component architecture and reusability
- State management and hooks
- API integration
- Theming with Tailwind CSS (light/dark mode)
- Routing with React Router

The app includes a **Task Manager**, **API Integration Page**, and other reusable UI components like Navbar, Footer, Card, and Button.

## 🖼️ App Screenshots

### Home Page
![Home Page](./screenshots/home-page.png)

### Task Manager
![Task manager Page](./screenshots/taskmanager.png)

### API
![ApiIntegration page](./screenshots/API.png)


---

## 🧱 Task 1: Project Setup

### Steps:
1. Initialize the project using **Vite** with the React template.
   ```bash
   npm create vite@latest my-react-app -- --template react
   cd my-react-app
   npm install
   ```
2. Install Tailwind CSS and dependencies:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
3. Create `tailwind.config.js` file:
   ```bash
   npx tailwindcss init -p
   ```
4. Add Tailwind directives to `index.css`:
   ```css
   @import "tailwindcss";
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```

---

## 🧩 Task 2: Component Architecture

### Components Created:
- **Button**: Reusable button component with variants (`primary`, `secondary`, `danger`)
- **Card**: Displays boxed content with shadow and padding
- **Navbar**: Contains navigation links to different pages
- **Footer**: Displays copyright info
- **Layout**: Wraps Navbar, Footer, and main page content

### Example:
```jsx
<Layout>
  <TaskManager />
</Layout>
```

---

## ⚙️ Task 3: State Management and Hooks

### Features in Task Manager:
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)

### Hooks Used:
- **useState** → Manage task list and UI state
- **useEffect** → Load and persist tasks using localStorage
- **useContext** → Manage app theme (light/dark)
- **Custom Hook (useLocalStorage)** → Persist tasks locally

### Example Code:
```jsx
const [tasks, setTasks] = useLocalStorage("tasks", []);
```

---

## 🌐 Task 4: API Integration

### API Used:
**JSONPlaceholder API** – Provides English sample data such as posts, comments, and users.

### Features:
- Fetch posts from API
- Display posts in a responsive grid
- Show loading and error messages
- Implement pagination
- Add search filter

### Example Endpoint:
```js
https://jsonplaceholder.typicode.com/posts
```

### Example:
```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(() => setError(true));
}, []);
```

---

## 🎨 Task 5: Styling with Tailwind CSS

### Objectives:
- Create a **responsive layout** for mobile, tablet, and desktop.
- Implement **light/dark mode** with Tailwind’s dark variant.
- Add **animations and transitions** to interactive elements.
- Use **utility classes** for spacing, typography, and layout.

### Example Code:
```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center transition-all">
  <p className="text-3xl font-bold">
    Current Theme: 
    <span className="text-blue-500 dark:text-yellow-400">Dark Mode Test</span>
  </p>
</div>
```

---

## 🧭 Navigation Structure

| Route | Component | Description |
|-------|------------|-------------|
| `/` | Home | Landing page |
| `/about` | About | App info page |
| `/tasks` | TaskManager | Manage tasks |
| `/api` | ApiIntegration | Fetch and display data from API |

---

## 🧠 Theme Management (Context API)

### Context Provider: `ThemeContext.jsx`
Manages global theme state using `useContext` and `useState`.

```jsx
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
```

### Applying Theme to Root:
```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

---

## 🧰 Folder Structure
```
src/
│
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   └── useLocalStorage.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── TaskManager.jsx
│   └── ApiIntegration.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Running the App
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

---

## 💡 Key Concepts Practiced
- React component design and props
- State and lifecycle management
- Custom hooks and context
- API fetching and error handling
- Responsive and theme-based styling with Tailwind CSS

---

## 🧾 License
This project is for educational purposes under the **MIT License**.

---

## 👨‍💻 Author
**AYANY Obala**  
React + Tailwind CSS Project  
2025
