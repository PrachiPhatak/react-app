import React from "react";

//Stateless function component

const Navbar = ({totalCounters}) =>{
    return (<nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar
            <span
                className="badge badge-pill bg-dark text-white m-2"> {totalCounters}
                 </span>
        </a>
    </nav>);
}

export default Navbar;