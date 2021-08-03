import React from 'react';


const Scroll = (props) => {
    return(
        <div style={{overflowY:'scroll', border: '1px solid #09c', height: '750px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;