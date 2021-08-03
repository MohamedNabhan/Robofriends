

const CardSearch = ({searchChange}) => {
    return(
        <div className="d-flex justify-content-center p-2">
            <div className="col-6 ">
            <input 
            type="search" 
            placeholder="Search..." className="form-control "
            onChange={(e) => searchChange(e)}
            /> 
            </div>
        
        </div>
    )
  
}
export default CardSearch;