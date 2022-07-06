import styles from "./components/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDeatils";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
      <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
            <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </main>
    </Router>
  );
}
