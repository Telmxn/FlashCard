import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import FlashCards from "./pages/FlashCards";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flashcards" element={<FlashCards />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
