import Header from './components/Header'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import './App.css';
import {Routes, Route } from 'react-router-dom'
import SingleReview from './components/SingleReview';


function App() {
  return (

    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={<Nav/>}/>
     <Route path="/reviews" element={<Reviews/>}/>
     <Route path="/review/:review_id" element={<SingleReview/>}/>
     </Routes>
    </div>

  );
}

export default App;
