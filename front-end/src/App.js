// Developer : Rudra Infotachus
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import data from './test_data.js';
import SigninScreen from './screens/SigninScreen';
import Bill from './components/Bill.js'
import BillScreen from './screens/BillScreen.js';

// import SignIn from './screen/SigninScreen'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    
    <div class="grid-container">
    <header class="row">
      <div>
        <a class="brand" href="index.html">Recovery-Agent</a>
      </div>
      <div>
        
      
      </div>
    </header>
    <main>
          <Route path="/bill/:id" component = {BillScreen}></Route>
          <Route path="/" component={SigninScreen}  exact></Route>
          <Route path="/Bills" component={Bill}  ></Route>
 
 
    </main>
    <footer class="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
