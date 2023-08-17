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
        
        currentAccount = updateAccounts(moviePrice, movieInfo)
        if (checkIsRented()) {setIsRented(true)}   

    }

    return (
        <>
                <div className="movie">
                    <div key={m.id}>{m.title}</div>
                    <img className={isRented ? "selected" : "unSelected"} key={m.title} alt={m.title} src={BASE_IMAGE_URL+m.poster_path} 
                        onClick={(isUserActive && !isRented && currentAccount>0 ) ? handleClick : null}/>
                
                    <button> <Link to={`/catalog/${movieInfo.id}`} > Movie Info </Link ></button>
               </div>
       
                   
        </>
    );
}

export default Movie; 