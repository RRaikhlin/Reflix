import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import './App.css';
import Landing from './component/landing';
import Catalog from './component/Catalog';
import NavBar from './component/NavBar';
import MovieInfo from './component/MovieInfo'






function App() {

  const dataUsers =  [
    {name:"Anna",
    account: 10,
    rentedMovies: []},
    {name:"Igor",
    account: 10,
    rentedMovies: []}, 
    {name:"Oleg",
    account: 10,
    rentedMovies: []},      
    {name:"Alexander",
    account: 10,
    rentedMovies: []},     ]
  
  
  const [currentUserId, setCurrentUserId] = useState(-1)
//  useEffect(() => {
//    setCurrentUserId(0)
//  }, []);

  

    console.log("curUser="+currentUserId)

  const [usersData, setUsersData] = useState (dataUsers)
  
  const updateAccounts = (amount, movieInfo, isRented) => {
    const updatedUsersAccounts = [...usersData]
      if (!isRented){
        updatedUsersAccounts[currentUserId].account -= amount 
        updatedUsersAccounts[currentUserId].rentedMovies.push(movieInfo) 
        console.log("current user ac= "+ updatedUsersAccounts[currentUserId].account)
      }
      if (isRented){
        updatedUsersAccounts[currentUserId].account += amount 
        const updatedRentedMovies = updatedUsersAccounts[currentUserId].rentedMovies.filter(m => m.id != movieInfo.id)
        updatedUsersAccounts[currentUserId].rentedMovies = updatedRentedMovies
        console.log("current user ac= "+ updatedUsersAccounts[currentUserId].account)
      }

    setUsersData(updatedUsersAccounts) 
    return updatedUsersAccounts[currentUserId]
  }


  return (     
   
     <Router>  
  <NavBar />
  <Routes>
    <Route path="/" element={<Landing setCurrentUserId={setCurrentUserId} currentUserId={currentUserId} usersData={usersData} />} />
    <Route path="catalog" element={<Catalog updateAccounts={updateAccounts}  
          usersData={usersData} currentUserId={currentUserId}/>} />
    <Route path="catalog/:movieId" element={<MovieInfo />} />

  
  </Routes>
</Router>


  
  );
}

export default App;
