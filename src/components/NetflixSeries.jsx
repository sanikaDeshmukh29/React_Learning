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
  const age = 19;
  const rating = "8.2";
  const summary =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque dolorb hbdabduwi nkdhciwuhvibvwwb";

  const Genre = () => {

    const genre = "RomCom";
    return genre;
  }

  // let canWatch = "Not available";
  // if (age >= 18) canWatch = "Avaialable";


  const canWatch = () => {

    if (age >= 18) return "Avaialable";
    return "Not available";

  }

  // if (age > 18) {
  //    return (
  //   <div>
  //    <div>
  //      <img src="queen_of_tears.jpeg" alt="queen_of_tears.jpeg" width = "40%" height = "40%"git status />
  //    </div>
  //     <h1>Name: {name}</h1>
  //    <h1>Rating:{5 + 3.2} </h1>
  //     <p>Summary:{summary}</p>
  //     <p>Genre: {Genre()}</p>
  //     <button>Available</button>
  // </div>
  // )
  // }

  // this violates DRY(do not repeat yourself)

  // method - 2
  
  //method - 3
  // sometimes you might have very difficult if conditions, for that there  are some solutions

  //method - 4
  //Solutions can be better as it prevents cluttering of variables outside and 
  //encapsulates such logic inside a function




  return (
    <div>
     <div>
       <img src="queen_of_tears.jpeg" alt="queen_of_tears.jpeg" width = "40%" height = "40%"git status />
     </div>
      <h1>Name: {name}</h1>
     <h1>Rating:{5 + 3.2} </h1>
      <p>Summary:{summary}</p>
      <p>Genre: {Genre()}</p>
      <button>{canWatch()}</button>
      {/* <button>{age >= 18 ? "Available" : "Not Available"}</button> */}
      
  </div>
  )

};

export const Header = () => {
    return <p>@copyrightedbySanika</p>;
}

export const Footer = () => {
    return <p>@copyrightedbySanika</p>;
}

export default NetflixSries;
// here bu using default export you can export only once but with named export you can export multiple times