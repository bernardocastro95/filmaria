import './error.css'
import {Link} from 'react-router-dom'

export default function Error(){
    return (
        <div class="not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">See Movies</Link>
        </div>
    )
}