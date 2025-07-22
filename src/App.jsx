
 import React from "react";

export const App = () => {
 
   return (
     <React.Fragment>
       <NetflixSries />
       <NetflixSries />
       <NetflixSries />
       <NetflixSries />
       <NetflixSries />
     </React.Fragment>
    
   )
};

// there are two ways to remove the parent elemnet which create uneccessary dom node
// 1 . Array return
// 2. fragments 

const NetflixSries = () => {

  return (
    <div>
     <div>
       <img src="queen_of_tears.jpeg" alt="queen_of_tears.jpeg" width = "40%" height = "40%"git status />
     </div>
     <h1>Name: Queen of Tears</h1>
     <h1>Rating: 8.2</h1>
     <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque dolore fugit repellendus quis praesentium veritatis eligendi nulla deserunt.
       Quibusdam maxime veritatis architecto ad officiis earum, aliquam enim possimus aut?</p>
  </div>
  )

};