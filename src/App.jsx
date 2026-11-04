import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
