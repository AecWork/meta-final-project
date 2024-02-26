import React from "react";
import './App.css';
import Header from './components/business/Header/Header.tsx';
import Main from './components/pages/Main/Main.tsx';
import SplashScreen from './components/pages/SplashScreen/SplashScreen.tsx';
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ModalContextProvider } from "./contexts/ModalContext.tsx";

const App = () => {
  return (
    <ThemeProvider>
      <ModalContextProvider>
        <SplashScreen />
        <Header />
        <Main />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
