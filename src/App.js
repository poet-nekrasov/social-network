import React from "react";
import "./App.css";
import { Routes, Route } from "../node_modules/react-router-dom/dist/index";
import HeaderContainer from "./components/ui/Header/HeaderContainer";
import NavBarContainer from "./components/ui/NavBarContainer/NavBarContainer";
import ProfileContainer from "./components/ui/ProfileContainer/ProfileContainer";
import MessengerContainer from "./components/ui/MessengerContainer/MessengerContainer";
import UsersContainer from "./components/ui/UsersContainer/UsersContainer";

import Home from "./components/ui/Home/Home";
import News from "./components/ui/News/News";
import Music from "./components/ui/Music/Music";
import Settings from "./components/ui/Settings/Settings";
import LoginContainer from "./components/ui/LoginContainer/LoginContainer";

const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />

      <NavBarContainer />

      <div className="content">
        <Routes>
          <Route path='/Login' element={<LoginContainer/>} />
          
          <Route path="/Home" element={<Home />} />

          <Route path="/Profile" element={<ProfileContainer />} />
          
          <Route path="/Profile/:userId" element={<ProfileContainer />} />

          <Route path="/Messenger" element={<MessengerContainer />} />

          <Route path="/Users" element={<UsersContainer />} />

          <Route path="/News" element={<News />} />

          <Route path="/Music" element={<Music />} />

          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
