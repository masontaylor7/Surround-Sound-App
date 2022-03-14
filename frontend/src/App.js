import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import "./index.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MusicPage from "./components/MusicPage";
import ProfilePage from "./components/ProfilePage";
import PlaylistPage from "./components/PlaylistsPage";
import IndividualPlaylist from "./components/IndividualPlaylist";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="main-project-body">
      <Navigation isLoaded={isLoaded} className='nav-bar'/>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path='/music'>
            <MusicPage setTitle={setTitle} setUrl={setUrl}/>
          </Route>
          <Route exact path='/users/:id'>
            <ProfilePage />
          </Route>
          <Route exact path='/users/:userId/playlists'>
            <PlaylistPage />
          </Route>
          <Route exact path='/users/:userId/playlists/:playlistId'>
            <IndividualPlaylist />
          </Route>
          <Route path=''>
            <h2>This Page Does Not Exist</h2>
          </Route>
        </Switch>
      )}
      <Footer title={title} url={url}/>
    </div>
  );
}

export default App;
