import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import style from './styling/style.css'

import Navbar from './components/Navbar';
import mainSection from './components/mainSection';
import Documentation from './components/Documentation';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" component={mainSection} exact />
          <Route path="/documentation" component={Documentation} />
          <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
