import image from './user.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        
        <div className="header">
            <Link to="/users">
                <div className="userIcon">
            <img src={image} alt="user icon"></img>
            </div>
            </Link>
            <Link to="/">
                 <h1>NC GAMES</h1>
            </Link>
            <div className="menu"></div>
            
        </div>
    )
}

export default Header; 