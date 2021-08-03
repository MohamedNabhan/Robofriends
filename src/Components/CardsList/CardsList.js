import Card from '../Card'
import './CardsList.css'

const CardsList = ({robots}) => {
    return(
        <div className="cards">
            {
                robots.map(user => {
                    return(
                        <Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email}
                        />
                    )
                })
            }
        </div>
    )
  
}
export default CardsList;