import './App.css'
import Header from './components/Header/Header';
import Siderbar from './components/Siderbar/Siderbar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Login from './components/FormLogin/Login';
import { useState } from 'react';
import Radium, {StyleRoot} from 'radium';


function App() {
  

  return (
    <StyleRoot>

    <div className="App">
      <Header name="AnhDuc" age="20">AnhDuc</Header>
      <Body></Body>
      <Footer></Footer>
    </div>

    </StyleRoot>
  )
}

export default Radium(App)
