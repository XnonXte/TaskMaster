const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-tm-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="./src/assets/logo.jpg"
            alt="TaskMaster"
            width={30}
            height={30}
            className="d-inline-block align-text-top rounded"
          />{" "}
          <span className="text-tm-primary">TaskMaster</span>
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                target="_blank"
                href="https://youtube.com/@XnonXte"
                className="nav-link"
                aria-current="page"
              >
                <i className="bi bi-youtube"></i> YouTube
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                href="https://twitter.com/XnonXte"
                className="nav-link"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                href="https://github.com/XnonXte"
                className="nav-link"
              >
                <i className="bi bi-github"></i> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
