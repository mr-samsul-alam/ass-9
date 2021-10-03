import './App.css';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componants/Home/Home';
import About from './componants/About/About';
import NotFound from './componants/NotFound/NotFound';

function App() {
  return (
    <div className="App">
       <Router>
       <Header></Header>
         <Switch>
           <Route exact path='/home'>
          <Home></Home>
           </Route>
           <Route exact path='/'>
          <Home></Home>
           </Route>
           <Route exact path='/about'>
            <About></About>
           </Route>
           <Route exact  path='*'>
              <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
       </Router>
     
    
    </div>
  );
}

export default App;
