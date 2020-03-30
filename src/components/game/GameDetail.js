import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function (props) {
    const [game, setGame] = useState([]);
    const {id} = useParams();
    const apiUrl = `https://api.rawg.io/api/games/${id}`;
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setGame(json))
            .catch(error => console.log(error));
    }, [apiUrl]);
    console.log(game);
    return (
        <div>
            <h1 className="">{game.name}</h1>
            <img className="" src={game.background_image} alt={"image of " +game.name}/>
            <p>{game.description_raw}</p>
            <a href={game.website}>Open Game Page</a>
        </div>
    )
}
