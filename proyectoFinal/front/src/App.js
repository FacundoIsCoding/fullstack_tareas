import React from 'react'

import Header from "./components/layout/header";
import Nav from "./components/layout/nav";
import Footer from "./components/layout/footer";
import homePage from "./pages/homePage"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<homePage />} />
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;
