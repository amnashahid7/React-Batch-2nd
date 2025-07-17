import React from 'react'

const NavBar = () => {
let login=true;
  return (
  <> 
{login? <>
<nav>
      <h1>NavBar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
</> :<>
<h1>Please logged in </h1>
</>}
    
  </>
  )
}

export default NavBar;