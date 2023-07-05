import React from 'react';

const Nav = (props) => {
    return (
        <div>
        {/* <!-- Navbar --> */}
        <header>
          <div classname="bar">
            <nav>
              <h2 classname="logo">
                Musi<span>fied</span>
              </h2>
              <ul>
                <li>
                  <a href="home.html"></a>Home
                </li>
                <li>
                  <a href="aboutus.html"></a>About Us
                </li>
                <li>
                  <a href="subs.html"></a>Subscriptions
                </li>
                <li>
                  <a href="songs.html"></a>Songs
                </li>
                <li>
                  <a href="playlists.html"></a>Playlists
                </li>
              </ul>
              <button type="button">Get Musified Premium</button>
            </nav>
          </div>
          {/* <!-- end --> */}
        </header>
        </div>
    );
}

export default Nav;