import React from 'react'
type Props = {
  params: {
    id: number;
  };
};

function Tour({ params: { id } }: Props) {
  return (
    <div>Tour</div>
  )
}

export default Tour