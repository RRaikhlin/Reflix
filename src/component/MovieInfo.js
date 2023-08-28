    import { useState, useEffect } from "react";
    import './movie.css'
    import {useParams} from 'react-router-dom'
    import { BASE_IMAGE_URL, BASE_URL, API_KEY } from "./utils/Constants";

    function MovieInfo({}) {

        const { movieId } = useParams()

        const movieUrl = `${BASE_URL}/movie/${movieId}?&append_to_response=videos&api_key=${API_KEY}`;

        const [movies, setMovies] = useState(null);
        
        useEffect(() => {
            fetch(movieUrl)
                .then(response => response.json())
                .then(movieData => {
                    console.log(movieData)  
                    setMovies(movieData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, []);

        if (!movies) {
            return <div>Loading...</div>;
        }
        

    const title = movies.original_title || ""
    const image = movies.poster_path
    const overview = movies.overview
    if (!movies.videos){
    const video = movies.videos.results[0].key }


        return (
            <>
            <div>
                <div className="titlePage centered"><h1>MOVIE INFO</h1></div> 
                <div className="centered">
                    <div className="centered"><h2>{title}</h2>  </div>
                        <img className="unSelected centered" alt={title} src={BASE_IMAGE_URL+image} />
                    <div className="titlePage"> <h2>{overview}</h2> </div>
                </div>

        
            </div>
                
            </>
        );
    }

    export default MovieInfo; 