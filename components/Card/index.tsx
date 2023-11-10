import React from 'react'

type Props = {
    image: string
}

function Card({image} : Props) {
  return (
    <div className='card'>
        <div style={{backgroundImage: `url(${image})`}}>

        </div>
        <div className='body'>

        </div>

    </div>
  )
}

export default Card