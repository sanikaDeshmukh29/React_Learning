

export const SeriesCard = (props) => {
    return (
                    <li>
                        <div>
                            <img src={props.curElem.img_url} alt={props.curElem.name} width="40%" height="40%" />
                        </div>
                        <h1>Name: {props.curElem.name}</h1>
                        <h1>Rating:{props.curElem.rating} </h1>
                        <p>Summary:{props.curElem.description}</p>
                        <p>Genre: {props.curElem.genre}</p>
                        <a href={props.curElem.watch_url}>
                        <button>Watch Now</button>
                        </a>
                    </li>
                );
}