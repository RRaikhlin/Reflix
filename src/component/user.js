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
       
           name: {uName}
         
           account: {account}
      
          </div>   )
    
    
      
    }
    
    export default User;
    