import '../Default/default.css'

export const DefaultComponent = () => {



    return(

        <div className="star-wars-greeting">
     
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/768px-Star_wars2.svg.png"
          alt="Star Wars"
          className="star-wars-image"
        />
        <p className="star-wars-description">
          Explore the epic universe of Star Wars
        </p>

        <h1 className="star-wars-text">
          May the Force be with you!
        </h1>
      </div>
    )
}