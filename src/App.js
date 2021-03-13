import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Dialogs" render={ () => <Dialogs dialogsPage={props.state.dialogsPage} newMessageText={props.state.dialogsPage.newMessageText} dispatch={props.dispatch} /> } />
          <Route path="/Profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> } />
          <Route path="/News" render={ () => <News/> } />
          <Route path="/Settings" render={ () => <Settings/> } />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
