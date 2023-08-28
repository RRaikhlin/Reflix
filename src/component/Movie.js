import { useState, useEffect } from "react";
import './movie.css'
import {Link} from 'react-router-dom'
import { BASE_IMAGE_URL } from "./utils/Constants";

function Movie({movieInfo, updateAccounts, isUserActive, rentedMoviesByCurrentUsers, currentAccount}) {

 
    const moviePrice = 2
    const m = movieInfo

//    const [isSelected, setIsSelected] = useState("selected")
   

      console.log("movie check")
       
    
    const checkIsRented = () => {
        if (typeof rentedMoviesByCurrentUsers !== "undefined" && rentedMoviesByCurrentUsers.length != 0 ) {
            const rentedMoviesId = rentedMoviesByCurrentUsers.map(m => m.id)
            return rentedMoviesId.includes(movieInfo.id)
        }
        return false
    }  

   // let cccc = checkIsRented()
   // console.log("checkIsRented()" +   cccc)
    const [isRented, setIsRented] = useState(checkIsRented())

    useEffect(() =>setIsRented(checkIsRented())

    )
   

   

    const handleClick = () => {

        currentAccount = updateAccounts(moviePrice, movieInfo, isRented)

        if (checkIsRented()) {setIsRented(true)}   

    }

    return (
        <>

                <div className="movie">
                    <div className="title" key={m.id}><h3>{m.title}</h3></div>
                       <div className="imgContainer movie">           
                       <Link to={`/catalog/${movieInfo.id}`}>
                    <img className={isRented ? "selected image" : "unSelected image"} key={m.title} alt={m.title} src={BASE_IMAGE_URL + m.poster_path} />
                    </Link>      
                 {(!isRented)&&<button className="plus" onClick={(isUserActive && currentAccount>0 ) ? handleClick : null}> + </button>} 
                 {(isRented)&&<button className="plus" onClick={(isUserActive ) ? handleClick : null}> - </button>}   
  
                    </div>
               </div>
           
       
                   
        </>
    );
}

export default Movie; 