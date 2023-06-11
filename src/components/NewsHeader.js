import React from 'react';



export default function NewsHeader({titles}) {
    return (
        <ul>
            {titles.map((el, id) => <li key={id} className='li'>{el}</li>)}
        </ul>
    )
}