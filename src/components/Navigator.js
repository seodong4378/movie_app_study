import React from "react";
import {Link} from "react-router-dom";
import "./Navigator.css"

function Navigator() {
    return(
        <div className="navigator">
            <Link to="/">Home</Link>
            <Link to={{
                    pathname: "/about"
            }}>About</Link>
        </div>
    )
}

export default Navigator;