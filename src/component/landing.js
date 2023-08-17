import Users from "./users";


function Landing({setCurrentUserId, currentUserId, usersData}) {

    
    
      return (
        <Users setCurrentUserId={setCurrentUserId} currentUserId={currentUserId} usersData={usersData}/>
      );
    }
    
    export default Landing;