import React from 'react'
import './social.css'
import data from './data.json'

const listItems = data.map(data =>
    <div className="card_container_social_summary">
        <p className='card_container_social_summary_total'>{data.total}</p>
        <p className='card_container_social_summary_type'>{data.typ}</p>
    </div>
);

const Social = () => {
    return (
        <div className='card_container_social'>
            {listItems}
        </div>
    )
}


export default Social