import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaSun, FaUser ,FaUndoAlt , FaMountain , FaCity , FaSync , FaStar} from 'react-icons/fa'; 
import './style.css';

export const Nav = () => {
    // const user = useSelector(state => state.currentUser);

    return (
        <div className="nav">
        {/* //     {user.username && <p className='username'>{user.username}</p>} */}

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

             {/* {<NavLink to='/AddApartmentP' className='link'>
                 <FaCity className="icon" /> {/* Login Icon */}
             {/* </NavLink> }  */} 

             {<NavLink to='/addCategory' className='link'>
                 <FaStar className="icon" /> {/* Login Icon */}
             </NavLink> } 

             {<NavLink to='/addCity' className='link'>
                 <FaUndoAlt className="icon" /> {/* Login Icon */}
             </NavLink> } 

             {/* {<NavLink to='/Edit' className='link'>
                 <FaUndoAlt className="icon" /> {/* Login Icon */}
             {/* </NavLink> }   */}


             
             {/* {<NavLink to='/getByBedsL' className='link'>
                <FaMountain className="icon" />
                 {/* <FaUser className="icon" /> Login Icon */}
             {/* </NavLink> }   */}



            {/* // <NavLink to='/signIn' className='link'> */}
            {/* //     <FaSignInAlt className="icon" /> Sign In Icon */}
            {/* // </NavL/ink> */}

            {/* // <NavLink to='/Sort' className='link'> */}
            {/* //     <FaCar className="icon" /> Cars Icon */}
            {/* // </Nav/Link> */}
            {/* <NavLink to='/ReturnCarForm' className='link'>
                <FaCar className="icon" />Return Car
            </NavLink> */}
            {/* <NavLink to='/ReturnCar' className='link'>
                <FaUndoAlt className='icon' /> 
            </NavLink> */}
        </div>
    );
};

