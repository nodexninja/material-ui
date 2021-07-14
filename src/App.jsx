import React from 'react';
import './App.css';
import { Button } from '@material-ui/core'

function App() {
  return (
    <React.Fragment>
      <nav>
        Nodex Ninja
      </nav>
      <section>
        <div class="content">
          <p>
            Welcome to my Material UI website tutorial!
            This website was made with Replit, React and Vite for free.
            Replit provides NPM in its IDE so there is no need to download anything!
          </p>
          <Button className="adjust" variant="contained" color="primary" disableElevation>
            Get Started
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;