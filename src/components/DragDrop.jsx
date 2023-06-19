import React, { useState} from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'


const ImageList = [ 
      { id: 1 , url : 'https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg'},
      { id: 2 , url : 'https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg'},
      { id: 3 , url :  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}
]

const DragDrop = () => {

  const [ pictureList, setPictureList ] = useState(ImageList)

  const [borad, setBoard ] = useState([])

  const [ { isOver }, drop ] = useDrop(()=>({ 

          accept: 'picture',
          drop : (item) => addPictureToBoard(item.id),
          collect: (monitor) => ({ 
            isOver: !!monitor.isOver()
        })
  }))

  const addPictureToBoard = (id) =>{
      const picList = pictureList.filter((picture) => id === picture.id)
      setBoard((borad) => [ ...borad, picList[0] ])

      const newList = pictureList.filter((picture) => id !== picture.id)
      setPictureList(newList)

  }

  return (
    <>
          <div className='board' ref={drop}>

              {borad.map((picture)=> 
                <Picture id={picture.id} url={picture.url}/> 
                
                )

              }

          </div>

          <div className='pictures'>
              {pictureList.map((picture)=> 
                <Picture id={picture.id} url={picture.url}/> 
                
                )

              }
          </div>

          
    
    </>
  )
}

export default DragDrop