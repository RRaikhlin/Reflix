import { Link} from 'react-router-dom';


function NavBar({movieInfo, updateAccounts}) {


    

    return (
        <>
            <div>
            <Link to="/">
         Landing
        </Link>
        <Link to="/catalog">
            Catalog
        </Link>
            </div>
            
        </>
    );
}

export default NavBar; 