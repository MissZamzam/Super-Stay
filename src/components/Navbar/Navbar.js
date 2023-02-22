import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 

<div className="navbar">
  <div>
  <Link to='/'>

    <h1>Maybelline Makeup</h1>
    </Link>
  </div>

   <div>
  <Link to='/favorite'>
    Your Favorite
  </Link>
   </div>

</div>    );
}
 
export default Navbar;