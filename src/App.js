import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import Navbar from "./components/navbar";
import TodoPage from "./pages/todoPage";
import DetailPage from "./pages/detailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoPage />}></Route>
          <Route path="/details" element={<DetailPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
