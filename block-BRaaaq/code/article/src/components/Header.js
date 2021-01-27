function Header() {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NEWS Articles</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-link" href="##">Home</a>
        <a className="nav-link" href="##">About</a>
        <a className="nav-link" href="##">Contact</a>
      </div>
    </div>
  </div>
</nav>
</div>
  );
}

export default Header;
