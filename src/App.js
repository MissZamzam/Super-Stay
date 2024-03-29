import { Routes, Route } from 'react-router-dom';
import Makeup from "./components/MakeupPage/Makeup";
import Navbar from "./components/Navbar/Navbar";
import Favorites from './components/Favorites/Favorites';
import MakeupDetails from './components/Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trial from './components/Trial/Trial';


function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path='/' element={<Makeup />}/>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/favorite' element={<Favorites />} />
      <Route path='/trial' element={<Trial />} />
      <Route path='/product/:id' element={<MakeupDetails />} />



    </Routes>
    </div>
  );
}

export default App;
