import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Analytics />
    </div>
  );
}

export default App;
