import { useEffect, useState } from "react";
import Movie from "./Movie";
import Account from "./Account";
import { BASE_URL, API_KEY } from "./utils/Constants";
import './Catalog.css'


function Catalog({updateAccounts, updateDataCaseUnrented, usersData, currentUserId}) {

    const trendingUrl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`;
   
 

    const [movies, setMovies] = useState([]);

    
    let isUserActive = false
    let rentedMoviesByCurrentUsers = []
    let currentAccount
        if (currentUserId >=0){
            isUserActive = true
            const rentedMoviesByUsers = usersData.map(userData => userData.rentedMovies)
            rentedMoviesByCurrentUsers = rentedMoviesByUsers[currentUserId]
            currentAccount = usersData[currentUserId].account
        }


 
  
    console.log("Catalog check")


    const [trendingMoviesData, setTrandingMoviesData] = useState([])

    useEffect(() => {
        fetch(trendingUrl)
            .then(response => response.json())
            .then(data => {
                const newTrendingMoviesData = data.results.slice(0, 10); 
                console.log(newTrendingMoviesData)
                setMovies(newTrendingMoviesData);
                setTrandingMoviesData(newTrendingMoviesData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [searchQuery, setSearchQuery] = useState()


  

   
    const search = (searchQuery) => {
        if (!searchQuery || searchQuery  == "") {setMovies(trendingMoviesData)
            return }

        const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`  

        fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          const searchResults = data.results.slice(0,10);
          console.log("search="+searchResults);
          setMovies(searchResults);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    
        useEffect(()=>
        search(searchQuery),
        [searchQuery]  )



    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value)
    }

 


    return (
        <>
          <input type="text" value={searchQuery} onChange={updateSearchQuery} />

          {isUserActive ? <Account currentAccount={currentAccount}/> : null}
            
          {(isUserActive && rentedMoviesByCurrentUsers.length !== 0 ) ? <div className="rentedContainer">
          <div className="titlePage"> <h1>Rented movies</h1></div>
            <div className="moviesContainer">
            {rentedMoviesByCurrentUsers.map((m, id) => 
                    {    return <Movie key={id} movieInfo = {m} updateAccounts={updateAccounts} isUserActive={isUserActive} 
                    rentedMoviesByCurrentUsers={rentedMoviesByCurrentUsers} currentAccount={currentAccount}/>   }
                )}
        </div>
       
                </div> : null}

            <div className="moviesContainer">

                {movies.map((m,id) =>

           {    return <Movie key={id} movieInfo = {m} updateAccounts={updateAccounts} isUserActive={isUserActive} 
                    rentedMoviesByCurrentUsers={rentedMoviesByCurrentUsers} currentAccount={currentAccount}/>   }
                )}
            </div>
            
        </>
    );
}

export default Catalog; 