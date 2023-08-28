import { Link} from 'react-router-dom';
import './NavBar.css'



function NavBar({movieInfo, updateAccounts}) {


    

    return (
        <>
            <div>
        <button className='button'>  
        <Link to="/">
         Landing
        </Link>
        </button>

        <button className='button'>  
        <Link to="/catalog">
            Catalog
        </Link>
        </button>
            </div>
            
        </>
    );
}

export default NavBar; 