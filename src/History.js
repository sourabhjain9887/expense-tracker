import React from 'react'

function History(props) {
    return (
        <div>
            {props.data.map(text => {
                return(
                <>
                    
                    <li className='list' key={text.id}>{`${text.describe} ~~~~ ${text.amount}₹`}</li>
                    <button className='search-btn' onClick={()=>{props.deleteHandler(text.id)}}>Delete</button>
                    
                </>)
            })}
        </div>
    )
}

export default History
