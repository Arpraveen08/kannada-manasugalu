import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Expenses from "./pages/expenses/Expenses";
import Events from "./pages/events/Events";
import Volunteers from "./pages/volunteers/Volunteers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/volunteer" element={<Volunteers/>} />
          </Routes>
        </main>

        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
