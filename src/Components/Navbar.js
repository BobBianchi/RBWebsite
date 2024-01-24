import { NavLink } from "react-router-dom";
import { useContext } from "react";

export default function Navbar() {
    return (
        <div className="d-flex align-items-center bg-secondary">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink
                        id="artworkPageLink"
                        className="nav-link text-white"
                        to="/"
                    >
                        Artwork
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}