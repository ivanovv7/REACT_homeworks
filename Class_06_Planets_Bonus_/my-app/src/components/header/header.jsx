import "../header/header.css"
import {Link} from "react-router-dom"

export const  HeaderPrintComponent = () => {
  const siteName = "Starwars movies and details";

  //wrap all the needed details in an array so that i can dynamically provide url for the clicked navLink
  const navLinks = [
  {name:"home", url: "/homePage"},
  {name:"people", url: "/peoplePage"},
  {name:"planets", url: "/planetsPage"}
];

    return (
        <>
            <nav className="containerNav">
                <h2>{siteName}</h2>

                <ul className="listOfNavLinks">
                  {navLinks.map((link) => (
                  <Link key={link.name} to={`${link.url}`}><li key={link.name}>{link.name}</li> </Link> 

                  ))}
                </ul>

            </nav>
        </>
    );
}