import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import Login from './components/Login';
// import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route, } from "react-router-dom"
// import { BrowserRouter as Router, Route, Redirect ,Routes} from 'react-router-dom';
import GameList from './components/GameList';
import { useState } from 'react';
// import Checkout from './components/Checkout';
import Info from './components/Checkout';

function SignInButton({ onSignIn }) {
  return (
    <button onClick={onSignIn}>Game List</button>
  );
}
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleSignIn() {
    setIsSignedIn(true);
  }
  return (
  <>
    <Headers />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/details' element={<Details />} /> */}
      <Route path='*' element={<Errror />} />
      <Route path='/info' element={<Info />}/>
      <Route path='/check' element={<check/>}/>
      {/* <Route path='/gameList' element={<GameList />}/> */}
      {/* <Route exact path="/">
        {isSignedIn ? <Redirect to="/games" /> : <SignInButton onSignIn={handleSignIn} />}
      </Route> */}
      {/* <Route exact path="/games">
        {isSignedIn ? <GameList /> : <Redirect to="/" />}
      </Route> */}
    </Routes>
    {isSignedIn ? <GameList /> : <SignInButton onSignIn={handleSignIn} />}
    
  </>
  );
}

export default App;