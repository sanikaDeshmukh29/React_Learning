

export const SeriesCard = ({ data }) => {

    const { id,img_url,name,rating,description,genre,watch_url} = data;

    return (
                    <li>
                        <div>
                            <img src={img_url} alt={name} width="40%" height="40%" />
                        </div>
                        <h1>Name: {name}</h1>
                        <h1>Rating:{rating} </h1>
                        <p>Summary:{description}</p>
                        <p>Genre: {genre}</p>
                        <a href={watch_url}>
                        <button>Watch Now</button>
                        </a>
                    </li>
                );
}