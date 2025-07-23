


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

// 1. using variables
//? you  can embed any javascript variable within jsx by enclosing 
// it  in a curly braces{}. The value of the  varibale will be inserted into the DOM 
// at the respective location

// 2. using expressions

//? jsx allows you to write  javascript expressions inside curly braces
// This  includes operations , function calls and other js expressions that produce a value.

//* Function calls

//? function specially those which return jsx canbe invoked directly within your jsx




const NetflixSries = () => {

  const name = "Queen of Tears";
  const rating = "8.2";
  const summary =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque dolorb hbdabduwi nkdhciwuhvibvwwb";

  const Genre = () => {

    const genre = "RomCom";
    return genre;
  }
  
  return (
    <div>
     <div>
       <img src="queen_of_tears.jpeg" alt="queen_of_tears.jpeg" width = "40%" height = "40%"git status />
     </div>
      <h1>Name: {name}</h1>
     <h1>Rating:{5 + 3.2} </h1>
      <p>Summary:{summary}</p>
      <p>Genre: {Genre()}</p>
  </div>
  )

};