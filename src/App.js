import React from "react";
import './App.css';
import Header from './components/business/Header/Header.tsx';
import Main from './components/pages/Main/Main.tsx';
import Footer from './components/pages/Footer/Footer.tsx';
import SplashScreen from './components/pages/SplashScreen/SplashScreen.tsx';

const App = () => {
  return (
    <>
      <SplashScreen />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
