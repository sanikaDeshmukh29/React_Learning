import seriesData from "../api/seriesData.json"
    
 
    
const NetflixSeries = () => {
    return (
        <ul>
            {seriesData.map((curElem) => {
                return (
                    <li key={curElem.id}>
                        <div>
                            <img src={curElem.img_url} alt={curElem.name} width="40%" height="40%" />
                        </div>
                        <h1>Name: {curElem.name}</h1>
                        <h1>Rating:{curElem.rating} </h1>
                        <p>Summary:{curElem.description}</p>
                        <p>Genre: {curElem.genre}</p>
                        <a href={curElem.watch_url}>
                        <button>Watch Now</button>
                        </a>
                    </li>
                );
            })}
           
        </ul>
    );
};

export default NetflixSeries;


