


export const App = () => {
 
   return (
     <>
       <NetflixSries />
       <NetflixSries />
       <NetflixSries />
       <NetflixSries />
       <NetflixSries />
     </>
    
   )
};

// Implementing  dynamic values

//? you  can embed any javascript variable within jsx by enclosing 
// it  in a curly braces{}. The value of the  varibale will be inserted into the DOM 
// at the respective location

const NetflixSries = () => {

  const name = "Queen of Tears";
  const rating = "8.2";
  const summary =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque dolorb hbdabduwi nkdhciwuhvibvwwb";

  return (
    <div>
     <div>
       <img src="queen_of_tears.jpeg" alt="queen_of_tears.jpeg" width = "40%" height = "40%"git status />
     </div>
      <h1>Name: {name}</h1>
     <h1>Rating:{rating} </h1>
      <p>Summary:{summary}</p>
  </div>
  )

};