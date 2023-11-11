import React from 'react'

type Props = {
  id: number;
}

function Tour({id} : Props) {
  return (
    <div>{id} тура</div>
  )
}

export default Tour