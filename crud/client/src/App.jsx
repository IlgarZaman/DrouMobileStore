import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import DetailPage from "./pages/details";
import "./style/index.scss";
import "./style/styles.css";
import AllRproduct from "./pages/allProduct.jsx";
import Favorite from "./pages/favorite";
import ErrorPage from "./pages/error-page";
import Store from "./pages/store";
import ScrollButton from "./components/scrolbutton/scrollbutton";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-page/:id" element={<DetailPage />} />
        <Route path="/all-product" element={<AllRproduct />} />
        <Route path="/favorite-product" element={<Favorite />} />
        <Route path="/store-page" element={<Store />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollButton />

      <Footer />
    </div>
  );
}

export default App;
