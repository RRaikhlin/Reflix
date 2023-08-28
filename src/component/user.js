import './user.css'

function User({id, uName, account, setCurrentUserId, uClass, color}) {
 
console.log(id)

 //   const [userClass, setUserClass] = useState("unSelected")

    const handleClick = () => {
      setCurrentUserId(id)
  //    setUserClass("selected")
    }
    
    
      return (
    
          <div className={`${uClass} user`}   style={{backgroundColor: `#${color.toString(16)}`}}  onClick={handleClick}>
       
          <h3> name: {uName} </h3>
           <br></br>
         
          <h4> account: {account} </h4>
      
          </div>   )
    
    
      
    }
    
    export default User;
    