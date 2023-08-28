import { Link} from 'react-router-dom';
import './NavBar.css'



function NavBar({movieInfo, updateAccounts}) {


    

    return (
        <>
            <div>
        <button className='button'>  
        <Link to="/">
        <h4> Home </h4>
        </Link>
        </button>

        <button className='button'>  
        <Link to="/catalog">
        <h4>   Catalog </h4>
        </Link>
        </button>
            </div>
            
        </>
    );
}

export default NavBar; 