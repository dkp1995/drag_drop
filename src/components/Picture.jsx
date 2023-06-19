import React from 'react'
import { useDrag } from 'react-dnd'

const Picture = ({ id, url }) => {

  const [ {isDragging} , drag] = useDrag(()=>( { 

          type: 'picture',
          item: { id: id},
          collect: (monitor) => ({ 
              isDragging: !!monitor.isDragging()
          })
  }))

  return (

      <>
          <img 
            src={url} 
            width='300px' 
            height='300px' 
            ref={drag}
            style={ { border: isDragging ? '5px solid green' : '0px'}}
            />
      </>
  )
}

export default Picture