import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Movie from './Pages/Movie'
const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
    
}

export default Routes;