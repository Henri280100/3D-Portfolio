import {
  HashRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;
