import React from 'react'

const Card = ({user}) => {
    return (
        <div>
           <div class="card">
  <h5 class="card-header">{user.name}</h5>
  <div class="card-body">
    <h5 class="card-title">{user.email}</h5>
    <h6>{user.company.name}</h6>
    <p class="card-text">{user.address.city}</p> 
           </div>
        </div>
        
        </div>
    )
}

export default Card
