import Header from './components/Header'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import './App.css';
import {Routes, Route } from 'react-router-dom'


function App() {
  return (

    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={<Nav/>}/>
     <Route path="/reviews" element={<Reviews/>}/>
     </Routes>
    </div>

  );
}

export default App;
