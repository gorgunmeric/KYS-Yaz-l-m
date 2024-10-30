import React from 'react';
import { Link , NavLink} from 'react-router-dom';

function Navbar(props) {
    return (
  
        <nav className="navbar navbar-expand-sm
        ">
        
        
          <div className='navbar-links'>
            <div className="navbar-left" > 
              <Link  to="/home">Home</Link>
              <Link  to="/about">Hakkımızda</Link>
              <Link  to="/contact">İletişim</Link>
             
            </div>
            <div className="navbar-right" >
            <Link  to="/">Giriş </Link>
            <Link  to="/sign">Kayıt Ol</Link>
            </div>
            </div>
        
      </nav>
    );
}

export default Navbar;