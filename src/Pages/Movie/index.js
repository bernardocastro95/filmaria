import './movie-info.css'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../Services/api'
export default function Movie(){
    const {id} = useParams()
    const history = useHistory();
    const[filme, setFilmes] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadMovie(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                history.replace('/')
                return
            }
            setFilmes(response.data)
            setLoading(false)
        }
        loadMovie()

        return () => {
            console.log("FILME DESMONTADO")
        }
    }, [id, history])

    if(loading){
        return(
            <div className="movieInfo">
            <h1>Movie Loading</h1>
        </div> 
        )
    }
    return(
        <div className="movieInfo">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>{filme.sinopse}</h3>

            <div className="botoes">
                <button onClick={()=>{}}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
              
            </div>
        </div>
    )
}