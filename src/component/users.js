import User from "./user";
import './users.css'

function Users({setCurrentUserId, currentUserId, usersData}) {

const colors =[0x212738, 0xF97068, 0xD1D646, 0x57C4E5]


  return (
    <div className="usersContainer">
      
       { usersData.map((user, id) => <User key={id} id={id} uName={user.name} account={user.account} 
       setCurrentUserId={setCurrentUserId} uClass={id===currentUserId ? "selected" : "unSelected"} color={colors[id]}/> )}

    </div>
  );
}

export default Users;