import Header from './components/Header'
import Nav from './components/Landing'
import Reviews from './components/Reviews'
import './App.css';
import {Routes, Route } from 'react-router-dom'
import SingleReview from './components/SingleReview';
import Users from './components/Users';

function App() {
  return (

    <div className="App">
     
     <Header/>
     <Routes>
     <Route path="/" element={<Nav/>}/>
     <Route path="/reviews" element={<Reviews/>}/>
     <Route path="/review/:review_id" element={<SingleReview/>}/>
     <Route path="/users" element={<Users/>}/>
     </Routes>
    </div>

  );
}

export default App;
