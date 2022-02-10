import logo from './logo.svg';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HeaderComponent from './containers/HeaderContainer';
import HomeComponent from './containers/HomeContainer';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
