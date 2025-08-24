

export const SeriesCard = ({ data }) => {

    const { id, img_url, name, rating, description, genre, watch_url } = data;
    
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize : "1.6rem"
    }

    return (
                    <li className="card">
                        <div>
                            <img src={img_url} alt={name} width="40%" height="40%" />
                        </div>
                        <div className="card-content">
                        <h1>Name: {name}</h1>
                        <h1>Rating:{rating} </h1>
                        <p /*style = {{margin : '2rem'}}*/>Summary:{description}</p>
                        <p>Genre: {genre}</p>
                        <a href={watch_url}>
                        <button style = {btn_style}>Watch Now</button>
                        </a>
                        </div>
                    </li>
                );
}