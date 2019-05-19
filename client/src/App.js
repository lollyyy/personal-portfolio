import React from 'react';
import Github from './Github'

const App = () => {

  return(
    <div class='main-wrap'>
    <h1>Hello World!</h1>
    <p>This is Jaakko's personal portfolio</p>

    <p>While you're waiting for this site to finish, you can follow the progress
    on Github:</p>
    <a href="https://github.com/lollyyy/personal-portfolio">
    <img src="https://jaakko-ihanamaki.herokuapp.com/assets/github.png" alt="Link to this page's github repo" />
    </a>

    <Github />
    </div>
  )
}

export default App;
