import React from 'react';
import New from './New'


export default function NewsBlock({blocks}) {
    console.log(blocks)
    return (
        blocks.map((e, id) => {
            return <New key={id} icon={e.icon} title={e.title} />;
        })   
    )
}