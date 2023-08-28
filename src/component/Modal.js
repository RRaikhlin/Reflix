import User from "./user";
import './Modal.css'
import { useEffect, useState } from "react";


function Modal({modalActivate, modalActive}) {


  
       const [gifMovie, setGifMovie] = useState([])

       const modalActiv = "cat"
       const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=YHkH8Svwjypn4v1pjX5Gv7iqEBWN27mH&q=${modalActive}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

       useEffect(() => {
           fetch(gifUrl)
               .then(response => response.json())
               .then(data => {
                console.log("then" + data)
                if (data.data && data.data.length > 0) {
                    const newGifMovie = data.data[0].embed_url;
                    setGifMovie(newGifMovie);
                }

           
               })
               .catch(error => {
                   console.error('Error fetching data:', error);
               });
       }, []);


  return (
    <>
    <div className="modalContainer" onClick={modalActivate}>
     </div>   
     <div className="MovieInf">
       <h1> Movie Information: {modalActive} </h1>
        {gifMovie==[] ? <div> ...Loading </div> : <iframe className="gif-pic" src={gifMovie}></iframe>}

     </div>
     
     
  

  
    </>
  );
}

export default Modal;