import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import Customize from "./pages/Customize/Customize";
import Profile from "./pages/Profile/Profile";
import Themes from "./pages/Themes/Themes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/article/:id" element={<Article />}></Route>
            <Route path="/customize" element={<Customize />}></Route>
            <Route path="/themes/:theme" element={<Themes />}></Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
