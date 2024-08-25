import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
