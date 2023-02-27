import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
<nav>
	<input id="nav-toggle" type="checkbox" />
	<div class="logo">MINZ<strong>CODE</strong></div>
	<ul class="links">
    <Link to='/'>
    		<li><a href="#home">Home</a></li>
    </Link>
    <Link to='/favorite'>
    		<li><a href="#projects">favorites</a></li>
    </Link>
	</ul>
	<label for="nav-toggle" class="icon-burger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</label>
</nav>


 );
}
 
export default Navbar;