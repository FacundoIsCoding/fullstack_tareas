import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/header";

function App() {
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

      <main>
        <section classname="images">
          <div classname="covers">
            <img src="images/slipknotcover.jpg" alt="Slipknot Cover" />
            <h2>some text</h2>
            <p>by slipknot</p>
          </div>
          <div classname="covers">
            <img src="images/slipknotcover.jpg" alt="Slipknot Cover" />
            <h2>some text</h2>
            <p>by slipknot</p>
          </div>
          <div classname="covers">
            <img src="images/slipknotcover.jpg" alt="Slipknot Cover" />
            <h2>some text</h2>
            <p>by slipknot</p>
          </div>
          <div classname="covers">
            <img src="images/slipknotcover.jpg" alt="Slipknot Cover" />
            <h2>some text</h2>
            <p>by slipknot</p>
          </div>
          <div classname="covers">
            <img src="images/slipknotcover.jpg" alt="Slipknot Cover" />
            <h2>some text</h2>
          </div>
          <div classname="covers">
            <img src="images/slipknotcover.jpg" alt="Slipknot Cover" />
            <h2>some text</h2>
          </div>
        </section>
        <h1>
          About Us
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            hendrerit lectus vel imperdiet tempor. Proin fringilla mauris eget
            nunc gravida lacinia. Duis sed lacus ut ipsum varius vehicula non
            condimentum sapien. Nullam quis gravida magna. Pellentesque ut risus
            neque. Suspendisse ultricies pulvinar pulvinar. Sed tempus lacus sit
            amet dignissim egestas. Nam id odio posuere, ullamcorper sapien et,
            tempus metus. Phasellus sollicitudin massa et rutrum tempus. Etiam
            tempus lacus eget sem fermentum, in maximus ligula tincidunt. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum
            enim dolor, eu lacinia leo condimentum sed. Vivamus a turpis quis
            tellus imperdiet consequat sit amet tincidunt dolor. Etiam dignissim
            feugiat sem sit amet tempor. Fusce iaculis et odio non sagittis.
            Nulla congue ornare elit eu rutrum. Aliquam sapien ante, suscipit
            porta eleifend sed, mollis ut risus. Praesent varius felis eget ante
            sollicitudin fermentum. Suspendisse placerat odio ultricies ligula
            scelerisque, eget fermentum enim dictum. Aenean imperdiet eros ac
            elementum mollis. Maecenas et leo quam. Ut non aliquet orci.{" "}
          </p>
        </h1>
      </main>

      <footer>
        &copy; Reserved Rights 2023
      </footer>
    </div>
  );
}

export default App;
