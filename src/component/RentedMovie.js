import { useState } from "react";
import './movie.css'
import './RentedMovie.css'
import { BASE_IMAGE_URL } from "./utils/Constants";

function RentedMovie({movieInfo, updateDataCaseUnrented, isUserActive, rentedMoviesByCurrentUsers, currentAccount}) {

 
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

    const [isRented, setIsRented] = useState(checkIsRented())
   

   

    const handleClick = () => {
        
        currentAccount = updateDataCaseUnrented (moviePrice, movieInfo)
        if (checkIsRented()) {setIsRented(true)}   

    }

    return (
        <>
            <div>
                <div className="rentedMovieContainer" >
                <div key={m.id}>{m.title}</div>
                <div className="imgContainer">
                <img className={isRented ? "selected" : "unSelected"} key={m.title} alt={m.title} src={BASE_IMAGE_URL+m.poster_path} 
                    />
                <button className="plus" onClick={handleClick}> + </button>   
                </div> 
                </div>
       
            </div>
            
        </>
    );
}

export default RentedMovie; 