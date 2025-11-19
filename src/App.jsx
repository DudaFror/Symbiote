import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition">
      <Header />
      <Home />
    </div>
  );
}