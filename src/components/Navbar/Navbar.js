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

		<li><a href="#about">About</a></li>
		{/* <li><a href="#work">Work</a></li> */}
<Link to='/favorite'>
		<li><a href="#projects">Favorites</a></li>

</Link>

		{/* <li><a href="#contact">Contact</a></li> */}
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