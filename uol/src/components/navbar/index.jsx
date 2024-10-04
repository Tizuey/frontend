import "./style.css";

function Navbar() {
  return (
    <>
    <header>
      <nav className="navbar">
          <div id="gray">

              <ul className="links">
                  <li><a href="#">SAC</a></li>
                  <li><a href="#"><i id="icon-email"></i> EMAIL</a></li>
                  <li><a href="#"><i id="icon-entre"></i> ENTRE</a></li>
                  <li><a href="#" id="button">ASSINE UOL</a></li>
              </ul>

          </div>

          <div id="white">

              <div className="logo">
                  <a href="#"></a>
              </div>
  
          </div>

      </nav>
  </header>
</>
  );
}

export default Navbar;