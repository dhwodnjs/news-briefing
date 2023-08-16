import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import Customize from "./pages/Customize/Customize";
import Profile from "./pages/Profile/Profile";
import Themes from "./pages/Themes/Themes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/customize" element={<Customize />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/themes/:theme" element={<Themes />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
