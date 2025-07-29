import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Calendar className="navbar-icon" />
          <span>Gatherly</span>
        </Link>
        
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <div className="navbar-auth">
          <Link to="/signup" className="auth-button signup-btn">Sign Up</Link>
          <Link to="/login" className="auth-button login-btn">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;