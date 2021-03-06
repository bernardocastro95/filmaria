import { useEffect, useState } from 'react'
import api from '../../Services/api'
import {Link} from 'react-router-dom'
import './home.css'

export default function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{
  async  function loadFilme(){
    const response = await api.get('/r-api/?api=filmes/');
    setFilmes(response.data)
    }
    loadFilme();
  }, [])
  return(
    
    <div className="container">
      <h1>Home</h1>
      <div className="listaFilmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome}/>
              <Link to={`/filme/${filme.id}`}>Access</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
