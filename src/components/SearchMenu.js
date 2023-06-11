import React from 'react';



export default function SearchMenu({filtres}) {
    return (
        <ul>
            {filtres.map((el, id) => <li className='li' key={id}>{el}</li>)}
        </ul>     
    )
}