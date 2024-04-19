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
      <Router>
        <NavBar />
        <HashRouter>
          <Routes>
            <Route path="/3D-Portfolio/" element={<Home />} />
            <Route
              path="/*"
              element={
                <>
                  <Routes>
                    <Route path="/3D-Portfolio/about" element={<About />} />
                    <Route path="/3D-Portfolio/projects" element={<Projects />} />
                    <Route path="/3D-Portfolio/contact" element={<Contact />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </HashRouter>
      </Router>
    </main>
  );
};

export default App;
