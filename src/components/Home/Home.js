import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="sub-container">
                <NavLink to="/makeup">
                    <button>Maybelline Products</button>
                </NavLink>
            </div>     

        </div> 

    )
}
 
export default Home;