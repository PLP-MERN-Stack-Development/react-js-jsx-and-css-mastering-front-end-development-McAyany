export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
