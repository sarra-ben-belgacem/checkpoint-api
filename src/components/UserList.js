import React  , { useState , useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

    


const UserList = () => {
  
        useEffect(() => {
          
         axios.get("https://jsonplaceholder.typicode.com/users") 
         .then((res) => {
             
            setUsers(res.data)
            
        
        })
        
         .catch ((err) => console.log(err))
        
        
        }, [])
        const [users , setUsers] = useState (null)
        const [loading , setLoading] = useState (true)
        
    return (
        <div>
          {  
      users && !loading ?

       users.map((el,i) => (

       <Card key={i} user={el} />


       ) ) : '......'




    }  
        </div>
    )
}

export default UserList
