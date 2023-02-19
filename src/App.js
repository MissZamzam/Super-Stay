import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import MakeUp from "./components/MakeupPage/Makeup";
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/makeup' element={<MakeUp />}/>
      {/* <Route path='/navbar' /> */}
      <Route path='/footer' element={<Footer />} />

    </Routes>
    </div>
  );
}

export default App;
