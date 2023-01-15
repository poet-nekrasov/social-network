import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./Components/UI/Header/Header";
import NavBarContainer from "./Components/UI/NavBarContainer/NavBarContainer";

import Home from './Components/UI/Home/Home';
import MyProfileContainer from "./Components/UI/MyProfileContainer/MyProfileContainer";
import MessengerContainer from "./Components/UI/MessengerContainer/MessengerContainer";
import UsersContainer from "./Components/UI/UsersContainer/UsersContainer";
import News from "./Components/UI/News/News";
import Music from "./Components/UI/Music/Music";
import Settings from "./Components/UI/Settings/Settings";


const App = () => {

    return (
        <div className='wrapper'>
            <Header />
            <NavBarContainer />
            <div className="content">
                <Routes>
                    <Route
                        path='/Home'
                        element={<Home/>}
                    />
                    <Route
                        path="/My profile"
                        element={<MyProfileContainer/>}
                    />
                    <Route
                        path="/Messenger"
                        element={<MessengerContainer/>}
                    />
                    <Route
                        path='/Users'
                        element={<UsersContainer/>}
                    />
                    <Route
                        path='/News'
                        element={<News/>}/>
                    <Route
                        path='/Music'
                        element={<Music/>}
                    />
                    <Route
                        path='/Settings'
                        element={<Settings/>}
                    />
                </Routes>
            </div>
        </div>
    );

}

export default App;
