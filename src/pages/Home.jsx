import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Home Page</h1>

      <Card title="Actions">
        <div className="flex gap-3">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
        </div>
      </Card>
    </div>
  );
}
