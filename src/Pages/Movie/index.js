import './movie-info.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../Services/api'
export default function Movie(){
    const {id} = useParams()
    const[filme, setFilmes] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadMovie(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            setFilmes(response.data)
            setLoading(false)
        }
        loadMovie()
    }, [id])

    if(loading){
        return(
            <div className="movieInfo">
            <h1>Movie Loading</h1>
        </div> 
        )
    }
    return(
        <div className="movieInfo">
            <h1>DETAILS - {id}</h1>
        </div>
    )
}