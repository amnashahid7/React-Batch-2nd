
import React from 'react';
import NavBar from './NavBar';
import FooterBar from'./FooterBar'; 
import './global.css'
function App() {


  return (
  <React.Fragment>
    <div className='glob'>heelo style from global</div>
  <NavBar/>
  <FooterBar/>

    {/* camelCase: navBar
    PascalCase: NavBar */}
  </React.Fragment>
  )
}

export default App
