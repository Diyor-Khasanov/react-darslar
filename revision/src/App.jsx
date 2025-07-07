import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import NotFound from "./pages/NotFound";
import { NewsProvider } from "./context/NewsContext";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;
