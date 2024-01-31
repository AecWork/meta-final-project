import './App.css';
import Header from './components/business/Header/Header.tsx';
import Button, { ButtonType } from './components/business/Button/Button.tsx';
import Main from './components/pages/Main/Main.tsx';
import Footer from './components/pages/Footer/Footer.tsx';

function App() {
  return (
    <>
      <Button type={ButtonType.CTA}>Login</Button>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
