import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='nav-right-side-block'>
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <div className='nav-bar'>
            <div className='nav-left-side-block'>
                <div className='logo-block'>
                    <img className='speaker-png' src='https://cdn.iconscout.com/icon/free/png-256/speaker-1751756-1489642.png' alt=''/>
                </div>
                <div className='links-and-app-name'>
                    <div className='nav-link-block'>
                        <NavLink className='nav-link home-nav-link' exact to="/">Home</NavLink>
                        <NavLink className='nav-link music-nav-link' to='/music'>Browse Music</NavLink>
                        {sessionUser ? <NavLink className='nav-link my-music-link' to={`/users/${sessionUser.id}`}>My Music</NavLink> : null}
                        {sessionUser ? <NavLink className='nav-link my-playlists-link' to={`/users/${sessionUser.id}`}>My Playlists</NavLink> : null}
                    </div>
                    <div className='surround-sound-text'><span className='surround-text'>Surround</span><span className='sound-text'>Sound</span></div>
                </div>
            </div>
            <div className='right-side-block'>
                {isLoaded && <div className='sessionLinks'>{sessionLinks}</div>}
            </div>
        </div>
    );
}

export default Navigation;
