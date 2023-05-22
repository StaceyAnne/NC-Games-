import Header from "./components/Header";
import Nav from "./components/Landing";
import Reviews from "./components/Reviews";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleReview from "./components/SingleReview";
import Users from "./components/Users";
import { useState, useEffect } from "react";
import { getCategories } from "./api";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Nav categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/reviews" element={<Reviews categories={categories} />} />
        <Route path="/review/:review_id" element={<SingleReview />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/reviews/:category"
          element={<Reviews categories={categories} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
