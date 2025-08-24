

export const SeriesCard = ({ data }) => {

    const { id, img_url, name, rating, description, genre, watch_url } = data;
    
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor : rating >= 8.5 ? "lightgreen" : "rgb(190, 135, 34)"
    }

    const rating_condition = rating >= 8.5 ? "superhit" : "average";

    return (
                    <li className="card">
                        <div>
                            <img src={img_url} alt={name} width="40%" height="40%" />
                        </div>
                        <div className="card-content">
                        <h1>Name: {name}</h1>
                <h1>Rating:
                    <span className={`rating ${rating_condition}`}>
                        {rating}
                    </span>
                     </h1>
                        <p /*style = {{margin : '2rem'}}*/>Summary:{description}</p>
                        <p>Genre: {genre}</p>
                        <a href={watch_url}>
                        <button style = {btn_style}>Watch Now</button>
                        </a>
                        </div>
                    </li>
                );
}