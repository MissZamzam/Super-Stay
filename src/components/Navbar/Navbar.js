import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-light">
  <div class="container-fluid">
    <a class="navbar-brand navbar mb-4 text-success">Maybelline</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}
 
export default Navbar;