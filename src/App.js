// import About from "./pages/about/About";
// import Expenses from "./pages/expenses/Expenses";
// import Events from "./pages/events/Events";
// import Volunteers from "./pages/volunteers/Volunteers";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense,lazy,useEffect } from "react";
import Header from "../src/components/header/Header";

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Expenses = lazy(() => import('./pages/expenses/Expenses'));
const Events = lazy(() => import('./pages/events/Events'));
const Volunteers = lazy(() => import('./pages/volunteers/Volunteers'));
const Gallery = lazy(() => import('./pages/gallery/Gallery'));
const Donate = lazy(() => import('./pages/donate/Donate'));







function App() {

  useEffect(() => {
    const preloadHomePage = async () => {
      await import('./pages/home/Home');
    };
    
    preloadHomePage();
  }, []); 

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Suspense fallback={<div> Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/volunteer" element={<Volunteers/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/donate" element={<Donate/>} />
            
          </Routes>
          </Suspense>
        </main>

        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
