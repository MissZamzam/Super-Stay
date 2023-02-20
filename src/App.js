import { Routes, Route } from 'react-router-dom';
import MakeUp from "./components/MakeupPage/Makeup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<MakeUp />}/>
      <Route path='/navbar' element={<Navbar />} />

      <Route path='/footer' element={<Footer />} />

    </Routes>
    </div>
  );
}

export default App;
