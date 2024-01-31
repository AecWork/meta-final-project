import './App.css';
import Header from './components/business/Header/Header.tsx';
import Button, { ButtonType } from './components/business/Button/Button.tsx';
import Main from './components/pages/Main/Main.tsx';
import Footer from './components/pages/Footer/Footer.tsx';

function App() {
  return (
    <>
    <div style={{padding: "32px"}}>
    <Button type={ButtonType.BIG_CTA}>Login</Button>
    </div>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
