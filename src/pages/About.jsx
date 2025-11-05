export default function About() {
  return (
    <div className="p-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-4">About This App</h1>
      <p className="mb-4">
        This is a <b>React.js</b> application built using <b>Vite</b> and <b>Tailwind CSS</b>, covering the following major concepts:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Component architecture and reusability</li>
        <li>State management and hooks</li>
        <li>API integration</li>
        <li>Theming with Tailwind CSS (light/dark mode)</li>
        <li>Routing with React Router</li>
      </ul>

      <p>
        The app includes a <b>Task Manager</b>, <b>API Integration Page</b>, and other reusable UI components like 
        <b> Navbar</b>, <b> Footer</b>, <b> Card</b>, and <b> Button</b>.
      </p>
    </div>
  );
}
