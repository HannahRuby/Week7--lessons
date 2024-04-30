import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import SortOrderForm from "./Components/SortOrderForm.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <h1>Welcome to my Dynamic Routes</h1>
        <Routes>
          <Route path="/users/:username" element={<UserPage />}>
            <Route path="posts" element={<UserPage />} />
            <Route path="likes" element={<UserPage />} />
          </Route>
          <SortOrderForm />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
