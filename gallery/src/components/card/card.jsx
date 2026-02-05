import React from 'react'
import Cardhelper from './card.helper'
const Card = ({data=[]}) => {
    return (
        <div className='flex overflow-x-auto'>
            {
                data.map((el,i)=>{
                    return <Cardhelper key={i} {...el}/>
                })
            }
        </div>

    )
}

export default Card