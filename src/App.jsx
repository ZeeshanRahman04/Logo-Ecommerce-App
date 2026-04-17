import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
export default App;
