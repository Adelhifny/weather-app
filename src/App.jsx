import { Suspense } from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App() {
  
  return(
    <div className='container'>
        <Header/>
        <section className="content">
            <Suspense>
              <Outlet />
            </Suspense>
        </section>
        <Footer/>
    </div>
  );
}

export default App
