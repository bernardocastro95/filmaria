import './saved.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Saved() {
   
        const [movies, setMovie] = useState([])

        useEffect(()=> {
            const list = localStorage.getItem('filmes')
            setMovie(JSON.parse(list) || [])
    
        }, [])

        function handleDelete(id){
            let filterMovie = movies.filter((item) => {
                return(item.id !== id)
            })

            setMovie(filterMovie)

            localStorage.setItem('filmes', JSON.stringify(filterMovie))
        }
        return(
            <div id="my-movies">
                <h1>Your Favorites</h1>
    
                <ul>
                    {movies.map((item)=> {
                        return(
                            <li key={item.id}>
                                <span>{item.nome}</span>
                                <div>
                                    <Link to={`/filme/${item.id}`}>Details</Link>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
}