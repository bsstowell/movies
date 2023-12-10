import { useState } from "react"

export const MoviePreview = (props) => {
    const [clicked, setClicked] = useState(false)


   const {movie, onClick} = props

    return (
        <div 
            className='movie'
            onClick={() => {
                setClicked(true)
                onClick()
            }}
        
        >
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.rating}</p>
           
           <p>clicked? {clicked ? 'yes' : 'no'}</p>
        </div>
   )

    
}

