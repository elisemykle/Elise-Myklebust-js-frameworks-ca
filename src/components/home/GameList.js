import React from "react";
import {Link} from "react-router-dom";

export default function (props) {
    return (
        <ul className="GameList row">
            {props.items.map(item => {
                return (
                    <li key={item.id} className="GameItem column">
                        <img key={Math.random()} className="game--image" src={item.background_image} alt={`gameimg ${item.name}`}/>
                        <h2 key={Math.random()} className="game--name">{item.name}</h2>
                        <div key={Math.random()} className="gameDetails">
                            <span key={Math.random()} className="game--release">{item.released}</span>
                            <span key={Math.random()} className="game--rating">{item.rating}</span>
                        </div>
                        <Link key={Math.random()} className="gamebutton btn btn-primary" to={"/game/" + item.id}>Read More</Link>
                    </li>
                )
            })}
        </ul>
    )
}
