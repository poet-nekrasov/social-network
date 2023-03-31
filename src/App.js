import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./components/ui/Header/Header";
import NavBarContainer from "./components/ui/NavBarContainer/NavBarContainer";

import Home from './components/ui/Home/Home';
import MyProfileContainer from "./components/ui/MyProfileContainer/MyProfileContainer";
import MessengerContainer from "./components/ui/MessengerContainer/MessengerContainer";
import UsersContainer from "./components/ui/UsersContainer/UsersContainer";
import News from "./components/ui/News/News";
import Music from "./components/ui/Music/Music";
import Settings from "./components/ui/Settings/Settings";

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
                        element={ <MyProfileContainer/> }

                    />

                    <Route
                        path="/Messenger"
                        element={ <MessengerContainer/> }
                    />

                    <Route
                        path='/Users'
                        element={ <UsersContainer/> }
                    />

                    <Route
                        path='/News'
                        element={ <News/> }
                    />

                    <Route
                        path='/Music'
                        element={ <Music/>}
                    />

                    <Route
                        path='/Settings'
                        element={ <Settings/> }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
