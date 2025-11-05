import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
      
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all">
      <h1 className="text-4xl font-bold mb-4">Welcome to My React App</h1>
      <p className="text-lg max-w-xl mb-6">
        This app demonstrates modern frontend practices — React, Tailwind, hooks, and API integration.
      </p>
      <Card title="Actions">
        <div className="flex gap-3">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
        </div>
      </Card>
      <a
        href="./About"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-transform transform hover:scale-105"
      >
        Explore Features
      </a>
    </div>
  );
}
