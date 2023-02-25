import { Routes, Route } from 'react-router-dom';
import Makeup from "./components/MakeupPage/Makeup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favorites from './components/Favorite/Favorite';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path='/' element={<Makeup />}/>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/favorite' element={<Favorites />} />


      <Route path='/footer' element={<Footer />} />

    </Routes>
    </div>
  );
}

export default App;
