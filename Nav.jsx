import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaSun, FaUser ,FaUndoAlt , FaMountain , FaCity , FaSync , FaStar} from 'react-icons/fa'; 
import './style.css';

export const Nav = () => {
   

    return (
        <div className="nav">
       

            <NavLink to='/logInAdvertiser' className='link'>
            <FaSignInAlt className="icon" /> 
            </NavLink>

            {<NavLink to='/registerAdvertiser' className='link'>
                 <FaUser className="icon" /> {/* Login Icon */}
             </NavLink> } 

             {<NavLink to='/allApartments' className='link'>
                <FaHome className="icon"/>
                 {/* <FaUser className="icon" /> Login Icon */}
             </NavLink> } 

             {<NavLink to='/allCategory' className='link'>
                <FaSun className="icon" />
                 {/* <FaUser className="icon" /> Login Icon */}
             </NavLink> } 

             {<NavLink to='/getApartments_filter' className='link'>
                 <FaMountain className="icon" /> {/* Login Icon */}
             </NavLink> } 

             {<NavLink to='/addApartment' className='link'>
                 <FaCity className="icon" /> {/* Login Icon */}
             </NavLink> } 



             {<NavLink to='/addCategory' className='link'>
                 <FaStar className="icon" /> {/* Login Icon */}
             </NavLink> } 

             {<NavLink to='/addCity' className='link'>
                 <FaUndoAlt className="icon" /> {/* Login Icon */}
             </NavLink> } 

            
        </div>
    );
};

