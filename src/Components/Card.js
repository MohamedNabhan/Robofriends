const Card = ({id,name,email}) => {
    return(
        <div className="card-item">
            <img src={`https://robohash.org/${name}`} alt={`robot-${name}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
      
    )
  
}
export default Card;