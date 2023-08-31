import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';


function App() {
  
  return(
    <div className='container'>
        <Header/>
        <section className="content">
          <Outlet />
        </section>
        <Footer/>
    </div>
  );
}

export default App
