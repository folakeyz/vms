import React from 'react';
import Overlay from './components/Particles/Particles';
import styles from './styles.module.css';

import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Checkin from './pages/Checkin';



function App() {
  return (
    <div className={styles.pixCarousel}>
  <Navbar /> 
        <Switch>
        <Route exact path="/" />
        </Switch>
     <Overlay />
     <h1>Welcome</h1>
     <p>Please sign in</p>
    </div>
  );
}

export default App;
